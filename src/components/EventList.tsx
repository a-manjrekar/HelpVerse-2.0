import React from 'react';
import { EventCard } from './EventCard';
import type { Event, Cause } from '../types';

const causes: Cause[] = ['environment', 'education', 'health', 'community', 'elderly', 'youth'];

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Beach Cleanup Drive',
    description: 'Join us for a day of environmental conservation as we clean up the coastline.',
    date: 'March 15, 2024',
    location: 'Sunset Beach',
    cause: 'environment',
    imageUrl: 'https://images.unsplash.com/photo-1617358452135-3a5c75afeddf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    organizer: 'Green Earth Initiative',
    spots: 15
  },
  {
    id: '2',
    title: 'Youth Mentorship Program',
    description: 'Help shape young minds through our after-school mentorship program.',
    date: 'March 20, 2024',
    location: 'Central Community Center',
    cause: 'education',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
    organizer: 'Youth Forward',
    spots: 8
  },
  {
    id: '3',
    title: 'Senior Care Visit',
    description: 'Spend time with elderly residents, sharing stories and bringing joy.',
    date: 'March 25, 2024',
    location: 'Sunshine Elderly Home',
    cause: 'elderly',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80',
    organizer: 'Care Connect',
    spots: 12
  }
];

export function EventList() {
  const [selectedCause, setSelectedCause] = React.useState<Cause | 'all'>('all');

  const filteredEvents = selectedCause === 'all' 
    ? mockEvents 
    : mockEvents.filter(event => event.cause === selectedCause);

  return (
    <section className="py-16 bg-gray-50" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCause('all')}
            className={`px-4 py-2 rounded-full ${
              selectedCause === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          {causes.map(cause => (
            <button
              key={cause}
              onClick={() => setSelectedCause(cause)}
              className={`px-4 py-2 rounded-full capitalize ${
                selectedCause === cause
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cause}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}