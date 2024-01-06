import React, { useState, useEffect } from 'react';

const DateDropdown = () => {
  const [dates, setDates] = useState([]);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

  useEffect(() => {
    const today = new Date();
    const nextDates = [];

    for (let i = 0; i < 15; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);

      const formattedDate = nextDay.toLocaleDateString('en-GB', options);
      nextDates.push(formattedDate);
    }

    setDates(nextDates);
  }, [options]);

  return (
    <div>
      <label>Select a date:</label>
      <select>
        {dates.map((date, index) => (
          <option key={index} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateDropdown;
