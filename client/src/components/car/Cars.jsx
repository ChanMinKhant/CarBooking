import React from 'react';
import CarInterface from './CarInterface';
import DateDropdown from '../../utils/DateDropdown';
import TimeDropdown from '../../utils/TimeDropdown';
import TravelDirectionDropdown from '../../utils/TravelDirectionDropdown';

// i need to use memo not to execute the function again and again
// when i change only date or time or direction only want to render the necessary part
const Cars = () => {
  const [choseDate, setChoseDate] = React.useState('');
  const [chosenTime, setChosenTime] = React.useState('');
  const [chosenDirection, setChosenDirection] = React.useState('');
  const data = {
    choseDate,
    chosenTime,
    chosenDirection,
  };
  console.log(data);
  return (
    <div className='flex flex-col justify-center items-center m-10'>
      {/* Car img */}
      <DateDropdown setChoseDate={setChoseDate} />
      <TimeDropdown setChosenTime={setChosenTime} />
      <TravelDirectionDropdown setChosenDirection={setChosenDirection} />
      <CarInterface data={data} />
    </div>
  );
};

export default Cars;
