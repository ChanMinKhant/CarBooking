import React, { useEffect, useState } from 'react';
import { checkSeatAvailability } from '../../service/bookingService';
import CarSeatIcon from '../../utils/CarSeatIcon';
import BookingForm from '../form/BookingForm';
import { createBook } from '../../service/bookingService';

const CarInterface = ({ data: { chosenDirection, choseDate, chosenTime } }) => {
  const [availableSeats, setAvailableSeats] = useState([1, 2, 3, 4]);
  const [pendingSeats, setPendingSeats] = useState([]); // [1, 2, 3, 4
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({
    userName: '',
    phoneNumber: '',
    pickupLocation: '',
    deliveryLocation: '',
    seatNumber: 0,
    message: '',
  });
  console.log(chosenDirection);
  const dateParts = choseDate.split('/');
  const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

  useEffect(() => {
    const tempFunc = async () => {
      if (choseDate) {
        const { pendingSeats, availableSeats } = await checkSeatAvailability(
          choseDate,
          chosenTime,
          chosenDirection
        );
        setAvailableSeats(availableSeats);
        setPendingSeats(pendingSeats);
      }
    };
    tempFunc();
    console.log(choseDate);
    setBook({
      ...book,
      travelDirection: chosenDirection,
      carTime: chosenTime,
      bookingDate: choseDate,
    });
  }, [choseDate, chosenDirection, chosenTime]);

  const isSeatBooked = (seatNum) => availableSeats.includes(seatNum);

  const isSeatPending = (seatNum) => pendingSeats.includes(seatNum);

  const addDataToBook = (data) => {
    setBook({ ...book, ...data });
  };

  const postToServer = async () => {
    try {
      console.log('booking');
      const res = await createBook(book);
      console.log('booked', res);
    } catch (error) {
      console.log('err');
      console.log(error.response.data);
    }
  };

  const handleSeat = (seatNum) => {
    setBook({ ...book, seatNumber: seatNum });
    setOpen(true);
  };

  return (
    <div className='flex flex-col justify-center items-center m-5'>
      <h1 className='m-4 text-xl font-bold'>{chosenDirection}</h1>
      <BookingForm
        addDataToBook={addDataToBook}
        postToServer={postToServer}
        open={open}
        setOpen={setOpen}
      />
      <div className='border border-red-600 p-2 rounded-xl shadow-lg flex flex-col items-start justify-center gap-2'>
        <button
          onClick={() => {
            handleSeat(1);
          }}
        >
          <p>1</p>
          <CarSeatIcon
            isAvailable={isSeatBooked(1)}
            isPending={isSeatPending(1)}
          />
        </button>
        <div className='flex justify-center items-center'>
          <button
            onClick={() => {
              handleSeat(2);
            }}
          >
            <p>2</p>
            <CarSeatIcon
              isAvailable={isSeatBooked(2)}
              isPending={isSeatPending(2)}
            />
          </button>
          <button
            onClick={() => {
              handleSeat(3);
            }}
          >
            <p>3</p>
            <CarSeatIcon
              isAvailable={isSeatBooked(3)}
              isPending={isSeatPending(3)}
            />
          </button>
          <button
            onClick={() => {
              handleSeat(4);
            }}
          >
            <p>4</p>
            <CarSeatIcon
              isAvailable={isSeatBooked(4)}
              isPending={isSeatPending(4)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarInterface;
