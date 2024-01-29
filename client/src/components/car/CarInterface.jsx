import React, { useEffect, useState } from 'react';
import {
  checkSeatAvailability,
  createBook,
  getApprovedSeats,
} from '../../service/bookingService';
import CarSeatIcon from '../../utils/CarSeatIcon';
import BookingForm from './BookingForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CarInterface = ({
  data: { chosenDirection, choseDate, chosenTime },
  isAdmin,
}) => {
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
  console.log(isAdmin);
  const dateParts = choseDate.split('/');
  const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  const [isApproved, setIsApproved] = useState(false);

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
    setBook({
      ...book,
      travelDirection: chosenDirection,
      carTime: chosenTime,
      bookingDate: choseDate,
    });
  }, [choseDate, chosenDirection, chosenTime]);

  const isSeatBooked = (seatNum) => availableSeats.includes(seatNum);

  const isSeatPending = (seatNum) => pendingSeats.includes(seatNum);

  const [approvedBookings, setApprovedBookings] = useState([]);

  console.log('approvedSeats: ', approvedBookings);

  useEffect(() => {
    getApprovedSeats().then((data) => setApprovedBookings(data));
  }, []);

  const isSeatApproved = (seatNum) => {
    const approvedSeats = approvedBookings.map((item) => item.seatNumber);
    console.log('approved seats: ', approvedSeats);
    return approvedSeats.includes(seatNum);
  };
  console.log('isSeatApproved: ', isSeatApproved(4));

  const addDataToBook = (data) => {
    setBook({ ...book, ...data });
  };

  const postToServer = async () => {
    try {
      console.log('booking');
      const res = await createBook(book);
      toast.success('Booking successful', {
        position: 'top-center',
      });
      setOpen(false);
    } catch (error) {
      toast.error(error.response.data.message || 'Booking failed', {
        position: 'top-center',
      });
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
        isAdmin={isAdmin}
        seatNum={book.seatNumber}
        book={book}
      />
      <div className='border border-red-600 p-2 rounded-xl shadow-lg flex flex-col items-start justify-center gap-2'>
        <button
          onClick={() => {
            handleSeat(1);
          }}
        >
          <p>1</p>
          <CarSeatIcon
            isApproved={isSeatApproved(1)}
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
              isApproved={isSeatApproved(2)}
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
              isApproved={isSeatApproved(3)}
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
              isApproved={isSeatApproved(4)}
              isAvailable={isSeatBooked(4)}
              isPending={isSeatPending(4)}
            />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CarInterface;
