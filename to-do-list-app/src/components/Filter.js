import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      {["All", "Active", "Completed"].map(status => (
        <button key={status} onClick={() => setFilter(status)} className={filter === status ? "active" : ""}>
          {status}
        </button>
      ))}
    </div>
  );
}

export default Filter;