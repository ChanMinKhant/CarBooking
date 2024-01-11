import React, { useState } from 'react';

const TimeDropdown = ({ setChosenTime }) => {
  const [times] = useState(['6:05', '10:00', '15:00', '20:00']);

  const handleChooseTime = (event) => {
    setChosenTime(event.target.value);
  };

  return (
    <div className='mt-5'>
      <label>Select a time:</label>
      <select onChange={handleChooseTime}>
        {times.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeDropdown;
