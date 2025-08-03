import React from 'react';

const flights = [
  { id: 1, destination: 'Delhi', time: '10:00 AM' },
  { id: 2, destination: 'Mumbai', time: '12:30 PM' },
  { id: 3, destination: 'Bangalore', time: '3:00 PM' },
];

function FlightDetails({ onBook }) {
  return (
    <div>
      <h3>Flight Details</h3>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            Flight to {flight.destination} at {flight.time}
            {onBook && (
              <button onClick={() => onBook(flight.id)} style={{ marginLeft: '10px' }}>
                Book
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightDetails;
