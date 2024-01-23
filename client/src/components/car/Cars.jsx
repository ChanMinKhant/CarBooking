import React, { useEffect } from 'react';
import CarInterface from './CarInterface';
import DateDropdown from '../../utils/DateDropdown';
import TimeDropdown from '../../utils/TimeDropdown';
import TravelDirectionDropdown from '../../utils/TravelDirectionDropdown';
import { checkAdmin } from '../../service/adminService';

// i need to use memo not to execute the function again and again
// when i change only date or time or direction only want to render the necessary part
const Cars = () => {
  const [choseDate, setChoseDate] = React.useState('');
  const [chosenTime, setChosenTime] = React.useState('');
  const [chosenDirection, setChosenDirection] = React.useState('');
  const [isAdmin, setIsAdmin] = React.useState(false);
  const data = {
    choseDate,
    chosenTime,
    chosenDirection,
  };

  useEffect(() => {
    const checkAdm = async () => {
      try {
        const response = await checkAdmin();
        setIsAdmin(Boolean(response.isAdmin));
      } catch (error) {
        setIsAdmin(false);
      }
    };
    checkAdm();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center m-10'>
      {/* Car img */}
      <DateDropdown setChoseDate={setChoseDate} />
      <TimeDropdown setChosenTime={setChosenTime} />
      <TravelDirectionDropdown setChosenDirection={setChosenDirection} />
      <CarInterface data={data} isAdmin={isAdmin} />
    </div>
  );
};

export default Cars;
