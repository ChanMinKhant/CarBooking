import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkSeatAvailability } from '../../service/bookingService';
import CarSeatIcon from '../../utils/CarSeatIcon';
import DateDropdown from './DateDropDown';

const CarInterface = ({ direction }) => {
  const [choseDate, setChoseDate] = useState('');
  const [seats, setSeats] = useState([1, 2, 3, 4]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempFunc = async () => {
      if (choseDate) {
        const mutateChoseDate = choseDate.split('/').join('-');
        const availableSeats = await checkSeatAvailability(
          mutateChoseDate,
          '6:00'
        );
        setSeats(availableSeats);
      }
    };

    tempFunc();
  }, [choseDate]);

  const isSeatBooked = (seatNum) => seats.includes(seatNum);

  return (
    <div className='flex flex-col justify-center items-center'>
      <DateDropdown setChoseDate={setChoseDate} />
      <h1 className='m-4 text-xl font-bold'>{direction}</h1>
      <div className='border border-red-600 p-2 rounded-xl shadow-lg flex flex-col items-start justify-center gap-2'>
        <button>
          <p>1</p>
          <CarSeatIcon isAvailable={isSeatBooked(1)} />
        </button>
        <div className='flex justify-center items-center'>
          <button>
            <p>2</p>
            <CarSeatIcon isAvailable={isSeatBooked(2)} />
          </button>
          <button>
            <p>3</p>
            <CarSeatIcon isAvailable={isSeatBooked(3)} />
          </button>
          <button>
            <p>4</p>
            <CarSeatIcon isAvailable={isSeatBooked(4)} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarInterface;
