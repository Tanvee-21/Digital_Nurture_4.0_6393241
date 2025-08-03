import React from 'react';
import FlightDetails from './FlightDetails';

function UserPage() {
  const handleBook = (flightId) => {
    alert(`Ticket booked for flight ID: ${flightId}`);
  };

  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can book tickets below:</p>
      <FlightDetails onBook={handleBook} />
    </div>
  );
}

export default UserPage;
