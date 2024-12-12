import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  const handleExploreEvents = () => {
    const eventsSection = document.getElementById('events');
    eventsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-indigo-900 pt-24">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80"
          alt="Volunteers working together"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Make a Difference Today
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Join thousands of volunteers making positive changes in their communities. 
          Find meaningful opportunities to contribute and create lasting impact.
        </p>
        
        <div className="mt-10">
          <button
            onClick={handleExploreEvents}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
}