import React from 'react';

export function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About HelpVerse
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Connecting passionate volunteers with meaningful opportunities
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create a world where everyone can easily find and participate in volunteer opportunities
                that match their interests and skills, making a positive impact in their communities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A connected community where social service is accessible to all, and where every individual
                has the power to create positive change through volunteering.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Community First</li>
                <li>• Accessibility</li>
                <li>• Transparency</li>
                <li>• Impact-Driven</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Impact</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">10K+</div>
              <div className="mt-2 text-gray-600">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">500+</div>
              <div className="mt-2 text-gray-600">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">1000+</div>
              <div className="mt-2 text-gray-600">Events Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">50K+</div>
              <div className="mt-2 text-gray-600">Volunteer Hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}