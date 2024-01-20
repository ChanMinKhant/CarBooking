import React, { useState } from 'react';
import { createBook } from '../../service/bookingService';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = ({ open, setOpen, book }) => {
  const [books, setBooks] = useState(book);
  const [formDate, setFormDate] = useState({});
  useEffect(() => {
    setBooks(book);
  }, [book]);
  const handleName = (evt) => {
    setFormDate({ ...formDate, userName: evt.target.value });
  };

  const handlePhoneNumber = (evt) => {
    setFormDate({ ...formDate, phoneNumber: evt.target.value });
  };

  const handlePickupLocation = (evt) => {
    setFormDate({ ...formDate, pickupLocation: evt.target.value });
  };

  const handleDeliveryLocation = (evt) => {
    setFormDate({ ...formDate, deliveryLocation: evt.target.value });
  };

  const handleMessage = (evt) => {
    setFormDate({ ...formDate, message: evt.target.value });
  };

  const postToServer = async () => {
    try {
      console.log('booking');
      // console.log(books);
      const res = await createBook({ ...books, ...formDate });
      console.log('booked', res);
      toast.success('Booked successfully!');
    } catch (error) {
      console.log('err');
      console.log(error.response?.data);
      toast.error(error.response?.data?.message);
    }
  };

  if (open)
    return (
      <div
        className={`absolute z-50 w-[80vw] h-auto border border-gray-100 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-5 m-5 ${
          open ? '' : 'hidden'
        }`}
      >
        <button onClick={() => setOpen(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 hover:bg-red-100 rounded-full p-1 absolute right-2 top-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
        </button>
        <h1 className='m-2 text-orange-500 font-bold'>Your Information</h1>
        <div className='m-2'>
          <h1>Name:</h1>
          <input
            onChange={handleName}
            value={formDate.userName}
            type='text'
            className='w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
          />
        </div>
        <div className='m-2'>
          <h1>Phone number:</h1>
          <input
            onChange={handlePhoneNumber}
            value={formDate.phoneNumber}
            type='text'
            className='w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
          />
        </div>
        <div className='m-2'>
          <h1>Location to pick you up:</h1>
          <input
            onChange={handlePickupLocation}
            value={formDate.pickupLocation}
            type='text'
            className='w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
          />
        </div>
        <div className='m-2'>
          <h1>Your destination:</h1>
          <input
            onChange={handleDeliveryLocation}
            value={formDate.deliveryLocation}
            type='text'
            className='w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
          />
        </div>
        <div className='m-2'>
          <h1>Leave us a message:</h1>
          <input
            onChange={handleMessage}
            value={formDate.message}
            type='text'
            className='w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
          />
        </div>
        <button
          onClick={postToServer}
          className='m-2 bg-orange-500 hover:bg-orange-300 text-white w-[24vw] rounded-full p-2'
        >
          Book
        </button>
        <ToastContainer position='top-center' />
      </div>
    );
};

export default BookingForm;
