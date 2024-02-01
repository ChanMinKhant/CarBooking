import { useEffect, useState } from 'react';
import { approveBooking, getPendingSeats } from '../../service/bookingService';

const BookingForm = ({
  addDataToBook,
  postToServer,
  open,
  setOpen,
  isAdmin,
  book,
}) => {
  console.log('BookingForm rendered');
  const [pendingSeats, setPendingSeats] = useState([]);
  const relevantBookingData = pendingSeats.find(
    (item) => item.seatNumber === book.seatNumber
  );

  const handleName = (evt) => {
    addDataToBook({ userName: evt.target.value });
  };

  const handlePhoneNumber = (evt) => {
    addDataToBook({ phoneNumber: evt.target.value });
  };

  const handlePickupLocation = (evt) => {
    addDataToBook({ pickupLocation: evt.target.value });
  };

  const handleDeliveryLocation = (evt) => {
    addDataToBook({ deliveryLocation: evt.target.value });
  };

  const handleMessage = (evt) => {
    addDataToBook({ message: evt.target.value });
  };

  const handleApproveBooking = () => {
    const relevantBooking = pendingSeats.find(
      (item) => item.seatNumber === book.seatNumber
    );
    if (!relevantBooking) return alert('No booking pending on that seat!'); // we can improve this later for ux
    const res = approveBooking(relevantBooking._id).then(() => setOpen(false));
  };

  useEffect(() => {
    const tempFunc = async () => {
      const res = await getPendingSeats();
      setPendingSeats(res);
    };
    if (isAdmin) tempFunc();
  }, [book.seatNumber]);

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
            defaultValue={relevantBookingData ? relevantBookingData.name : ''}
            onChange={handleName}
            type='text'
            className='w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
          />
        </div>
        <div className='m-2'>
          <h1>Phone number:</h1>
          <input
            defaultValue={
              relevantBookingData ? relevantBookingData.phoneNumber : ''
            }
            onChange={handlePhoneNumber}
            type='text'
            className='w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
          />
        </div>
        <div className='m-2'>
          <h1>Location to pick you up:</h1>
          <input
            defaultValue={
              relevantBookingData ? relevantBookingData.pickupLocation : ''
            }
            onChange={handlePickupLocation}
            type='text'
            className='w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
          />
        </div>
        <div className='m-2'>
          <h1>Your destination:</h1>
          <input
            defaultValue={
              relevantBookingData ? relevantBookingData.deliveryLocation : ''
            }
            onChange={handleDeliveryLocation}
            type='text'
            className='w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
          />
        </div>
        <div className='m-2'>
          <h1>Leave us a message:</h1>
          <input
            defaultValue={
              relevantBookingData ? relevantBookingData.message : ''
            }
            onChange={handleMessage}
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
        {isAdmin && (
          <button
            onClick={handleApproveBooking}
            className='m-2 bg-orange-500 hover:bg-orange-300 text-white w-auto rounded-full p-2'
          >
            Approve
          </button>
        )}
      </div>
    );
};

export default BookingForm;
