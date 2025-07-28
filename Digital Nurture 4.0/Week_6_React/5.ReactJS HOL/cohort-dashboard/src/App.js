import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  const cohorts = [
    {
      id: 'C101',
      technology: 'React JS',
      status: 'Ongoing',
      startDate: '2025-07-01',
      coach: 'Tanvee',
      trainer: 'Kiran'
    },
    {
      id: 'C102',
      technology: 'Spring Boot',
      status: 'Completed',
      startDate: '2025-06-10',
      coach: 'Ravi',
      trainer: 'Sneha'
    },
    {
      id: 'C103',
      technology: 'Python ML',
      status: 'Ongoing',
      startDate: '2025-07-15',
      coach: 'Priya',
      trainer: 'Anil'
    }
  ];

  return (
    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#eaf4ff' }}>
      <h1 style={{ color: '#1e3a8a' }}>MyAcademy Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} {...cohort} />
      ))}
    </div>
  );
}

export default App;
