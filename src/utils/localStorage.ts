// Local storage keys
const STORAGE_KEYS = {
  USERS: 'helpverse_users',
  EVENTS: 'helpverse_events',
  REGISTRATIONS: 'helpverse_registrations'
} as const;

// User storage functions
export const getUsers = () => {
  const users = localStorage.getItem(STORAGE_KEYS.USERS);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user: any) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

// Event storage functions
export const getEvents = () => {
  const events = localStorage.getItem(STORAGE_KEYS.EVENTS);
  return events ? JSON.parse(events) : [];
};

export const saveEvent = (event: any) => {
  const events = getEvents();
  events.push(event);
  localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
};

export const updateEvent = (eventId: string, updates: Partial<any>) => {
  const events = getEvents();
  const eventIndex = events.findIndex((e: any) => e.id === eventId);
  if (eventIndex !== -1) {
    events[eventIndex] = { ...events[eventIndex], ...updates };
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  }
};

// Registration storage functions
export const getRegistrations = () => {
  const registrations = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
  return registrations ? JSON.parse(registrations) : [];
};

export const saveRegistration = (registration: any) => {
  const registrations = getRegistrations();
  registrations.push(registration);
  localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(registrations));
  
  // Update event spots
  const events = getEvents();
  const event = events.find((e: any) => e.id === registration.eventId);
  if (event && event.spots > 0) {
    updateEvent(event.id, { spots: event.spots - 1 });
  }
};