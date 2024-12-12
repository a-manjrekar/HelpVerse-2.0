import React from 'react';
import type { Cause } from '../../types';

interface EventFiltersProps {
  selectedCause: Cause | 'all';
  onCauseSelect: (cause: Cause | 'all') => void;
  causes: Cause[];
}

export function EventFilters({ selectedCause, onCauseSelect, causes }: EventFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCauseSelect('all')}
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
          onClick={() => onCauseSelect(cause)}
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
  );
}