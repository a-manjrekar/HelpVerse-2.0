import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getEvents, getRegistrations } from '../utils/localStorage';

export function Dashboard() {
  const { user } = useAuth();
  const events = getEvents();
  const registrations = getRegistrations();

  const userEvents = user?.role === 'organizer' 
    ? events.filter((event: any) => event.organizerId === user.id)
    : registrations
        .filter((reg: any) => reg.userId === user.id)
        .map((reg: any) => ({
          ...events.find((event: any) => event.id === reg.eventId),
          registrationDate: reg.date
        }));

  const stats = user?.role === 'organizer' 
    ? {
        totalEvents: userEvents.length,
        activeEvents: userEvents.filter((event: any) => new Date(event.date) >= new Date()).length,
        totalRegistrations: registrations.filter((reg: any) => 
          userEvents.some((event: any) => event.id === reg.eventId)
        ).length
      }
    : {
        eventsJoined: userEvents.length,
        upcomingEvents: userEvents.filter((event: any) => new Date(event.date) >= new Date()).length,
        pastEvents: userEvents.filter((event: any) => new Date(event.date) < new Date()).length
      };

  const getEventRegistrations = (eventId: string) => {
    return registrations.filter((reg: any) => reg.eventId === eventId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-2 text-gray-600">Welcome back, {user?.name}!</p>
            </div>
            {user?.role === 'organizer' && (
              <Link
                to="/create-event"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Create New Event
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="mt-2 text-3xl font-semibold text-indigo-600">{value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {user?.role === 'organizer' ? 'My Events' : 'Registered Events'}
              </h3>
              
              {userEvents.length > 0 ? (
                <div className="space-y-6">
                  {userEvents.map((event: any) => (
                    <div key={event.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{event.title}</h4>
                          <p className="text-sm text-gray-500">{event.date}</p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          {event.cause}
                        </span>
                      </div>
                      
                      {user?.role === 'organizer' && (
                        <div className="mt-3">
                          <h5 className="text-sm font-medium text-gray-700 mb-2">Registered Volunteers</h5>
                          {getEventRegistrations(event.id).length > 0 ? (
                            <ul className="space-y-1">
                              {getEventRegistrations(event.id).map((reg: any) => (
                                <li key={reg.id} className="text-sm text-gray-600">
                                  {reg.userName} - {new Date(reg.date).toLocaleDateString()}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500">No registrations yet</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  {user?.role === 'organizer' 
                    ? 'No events created yet' 
                    : 'No events registered yet'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}