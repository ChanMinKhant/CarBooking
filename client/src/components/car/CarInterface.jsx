import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarSeat from './../../assets/car-seat-icon.svg';
import { checkSeatAvailability } from './../../service/bookingService';
import DateDropdown from './DateDropDown';

const CarInterface = ({ direction }) => {
  const navigate = useNavigate();
  const [seatAvailability, setSeatAvailability] = useState(false);
  const [date, setDate] = useState('20-01-2004');
  const [time, setTime] = useState('12:00');
  useEffect(() => {
    async function checkSeatAvailability(date, time) {
      try {
        const availableSeats = await checkSeatAvailability(date, time);
        console.log(availableSeats);
      } catch (error) {
        console.log(error);
      }
    }
    checkSeatAvailability(date, time);
  }, []);
  return (
    <div className='flex flex-col justify-center items-center'>
      <DateDropdown />
      <h1 className='m-4 text-xl font-bold'>{direction}</h1>
      <div className='border border-red-600 p-2 rounded-xl shadow-lg flex flex-col items-start justify-center gap-2'>
        <button onClick={() => navigate('/booking/1')}>
          <div>1</div>
          <img className='w-16 h-16' src={CarSeat} alt='seat-1' />
        </button>
        <div className='flex justify-start items-center'>
          <button onClick={() => navigate('/booking/2')}>
            <div>2</div>
            <img className='w-16 h-16' src={CarSeat} alt='seat-2' />
          </button>
          <button onClick={() => navigate('/booking/3')}>
            <div>3</div>
            <img className='w-16 h-16' src={CarSeat} alt='seat-3' />
          </button>
          <button onClick={() => navigate('/booking/4')}>
            <div>4</div>
            <img className='w-16 h-16' src={CarSeat} alt='seat-4' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarInterface;
