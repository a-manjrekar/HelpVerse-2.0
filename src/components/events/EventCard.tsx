import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { saveRegistration, getRegistrations } from '../../utils/localStorage';
import type { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleJoinEvent = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    const registrations = getRegistrations();
    const alreadyRegistered = registrations.some(
      (reg: any) => reg.eventId === event.id && reg.userId === user.id
    );

    if (alreadyRegistered) {
      alert('You have already registered for this event');
      return;
    }

    const registration = {
      id: crypto.randomUUID(),
      eventId: event.id,
      userId: user.id,
      userName: user.name,
      eventTitle: event.title,
      date: new Date().toISOString()
    };

    saveRegistration(registration);
    alert('Successfully registered for the event!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        className="h-48 w-full object-cover"
        src={event.imageUrl}
        alt={event.title}
      />
      <div className="p-6">
        <div className="flex items-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {event.cause}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-gray-900">{event.title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{event.description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="h-4 w-4 mr-2" />
            <span>{event.spots} spots left</span>
          </div>
        </div>
        
        <button 
          onClick={handleJoinEvent}
          className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Join Event
        </button>
      </div>
    </div>
  );
}