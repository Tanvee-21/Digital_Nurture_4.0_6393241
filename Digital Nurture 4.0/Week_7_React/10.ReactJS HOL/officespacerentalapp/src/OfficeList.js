import React from 'react';

const OfficeList = () => {
  const offices = [
  {
    name: 'WeWork BKC',
    rent: 50000,
    address: 'Bandra Kurla Complex, Mumbai',
    image: 'https://images.unsplash.com/photo-1581092795360-6db63e95dc0e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Regus Hi-Tech City',
    rent: 75000,
    address: 'Hi-Tech City, Hyderabad',
    image: 'https://images.unsplash.com/photo-1558002038-14751f1c5295?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'SmartWorks Indiranagar',
    rent: 60000,
    address: 'Indiranagar, Bangalore',
    image: 'https://images.unsplash.com/photo-1607082349250-9721d740f495?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: '91Springboard',
    rent: 45000,
    address: 'Sector 44, Gurgaon',
    image: 'https://images.unsplash.com/photo-1573164713347-df1e7a1c1dcf?auto=format&fit=crop&w=400&q=80'
  }
];


  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Office Space Rental App</h1>

      {offices.map((office, index) => {
        const rentStyle = {
          color: office.rent < 60000 ? 'red' : 'green',
          fontWeight: 'bold'
        };

        return (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              margin: '15px auto',
              width: '300px',
              borderRadius: '8px',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            {/* 👇 Image goes here */}
            <img
              src={office.image}
              alt={office.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />

            <h3>{office.name}</h3>
            <p>Address: {office.address}</p>
            <p style={rentStyle}>Rent: ₹{office.rent}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
