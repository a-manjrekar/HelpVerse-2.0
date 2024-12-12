import React, { useState } from 'react';
import { SearchBar } from './search/SearchBar';
import { EventFilters } from './events/EventFilters';
import { EventGrid } from './events/EventGrid';
import { getEvents } from '../utils/localStorage';
import type { Event, Cause } from '../types';

const causes: Cause[] = ['environment', 'education', 'health', 'community', 'elderly', 'youth'];

export function EventList() {
  const [selectedCause, setSelectedCause] = useState<Cause | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const events = getEvents();
  
  const filteredEvents = events.filter((event: Event) => {
    const matchesCause = selectedCause === 'all' || event.cause === selectedCause;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCause && matchesSearch;
  });

  return (
    <section className="py-16 bg-gray-50" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
        
        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            className="max-w-md"
          />
        </div>

        <div className="mb-8">
          <EventFilters
            selectedCause={selectedCause}
            onCauseSelect={setSelectedCause}
            causes={causes}
          />
        </div>

        <EventGrid events={filteredEvents} />
      </div>
    </section>
  );
}