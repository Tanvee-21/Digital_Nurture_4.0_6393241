import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = parseFloat(rupees) / 90; // Assume 1 Euro = ₹90
    setEuro(converted.toFixed(2));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Currency Converter (INR ➝ EUR)</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter amount in ₹:
          <input
            type="number"
            value={rupees}
            onChange={handleChange}
            required
            style={{ marginLeft: '10px' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '10px' }}>Convert</button>
      </form>

      {euro && (
        <p>Equivalent Euro: €{euro}</p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
