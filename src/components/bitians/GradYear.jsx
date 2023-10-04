import React, { useState } from 'react';

function GradYear({ onSelect, selectedYears }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const years = [2020, 2021, 2022, 2023, 2024, 2025];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleYear = (year) => {
    if (selectedYears.includes(year)) {
      const updatedYears = selectedYears.filter((selectedYear) => selectedYear !== year);
      onSelect(updatedYears);
    } else {
      const updatedYears = [...selectedYears, year];
      onSelect(updatedYears);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`bg-black text-white px-4 py-2 rounded-lg shadow focus:outline-none ${
          isDropdownOpen ? 'bg-gray-800' : 'hover:bg-gray-800 hover:text-black'
        }`}
      >
   
          Filter by year
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isDropdownOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-12 right-0 mt-2 w-36 bg-black text-white rounded-lg shadow-lg">
          <h6 className="text-white font-medium p-3">Year</h6>
          <ul>
            {years.map((year) => (
              <li key={year}>
                <label className="flex items-center p-2">
                  <input
                    type="checkbox"
                    className="mr-2 form-checkbox text-primary-600 focus:ring-primary-500"
                    value={year}
                    checked={selectedYears.includes(year)}
                    onChange={() => toggleYear(year)}
                  />
                  <span className="text-white">{year}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GradYear;
