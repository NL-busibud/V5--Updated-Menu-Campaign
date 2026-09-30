import React, { useState } from "react";
import "./filterbar.css";

function FilterBar({ selectedFilter, setSelectedFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "All time",
    "Last 30 days",
    "Last 7 days",
  ];

  const handleSelect = (option) => {
    setSelectedFilter(option);
    setIsOpen(false);
  };

  return (
    <div className="filter-bar">
      <div className="filter-dropdown">

        <button
          className="filter-select"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedFilter}</span>

          <span className={`filter-arrow ${isOpen ? "open" : ""}`}>
            ▾
          </span>
        </button>

        {isOpen && (
          <div className="filter-options">
            {options.map((option) => (
              <button
                key={option}
                className={`filter-option ${
                  selectedFilter === option ? "selected" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default FilterBar;