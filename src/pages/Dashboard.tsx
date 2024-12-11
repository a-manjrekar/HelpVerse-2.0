import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back, {user?.name}!</p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {user?.role === 'volunteer' ? (
              <>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">My Upcoming Events</h3>
                    <div className="mt-4">
                      <p className="text-gray-500">No upcoming events</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">My Impact</h3>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-semibold text-indigo-600">0</p>
                        <p className="text-sm text-gray-500">Events Attended</p>
                      </div>
                      <div>
                        <p className="text-2xl font-semibold text-indigo-600">0</p>
                        <p className="text-sm text-gray-500">Volunteer Hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">My Events</h3>
                    <div className="mt-4">
                      <p className="text-gray-500">No events created yet</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">Volunteer Stats</h3>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-semibold text-indigo-600">0</p>
                        <p className="text-sm text-gray-500">Total Volunteers</p>
                      </div>
                      <div>
                        <p className="text-2xl font-semibold text-indigo-600">0</p>
                        <p className="text-sm text-gray-500">Active Events</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}