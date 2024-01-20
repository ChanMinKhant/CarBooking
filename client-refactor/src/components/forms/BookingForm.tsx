import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAppDispatch } from "../../store/hooks";
import { createBook } from "../../store/slices/bookSlice";
import { CreateBookPayload } from "../../types/book";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
  book: CreateBookPayload;
  setBook: (val: CreateBookPayload) => void;
}

const BookingForm = ({ open, setOpen, book, setBook }: Props) => {
  const [alert, setAlert] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onSuccess = () => {
    setAlert(true);
    setOpen(false);
  };

  const handleCreateBook = () => {
    dispatch(createBook({ bookData: book, onSuccess }));
  };

  return (
    <div
      className={`absolute z-50 top-0 right-0 bottom-0 left-0 w-[80vw] h-auto border border-gray-100 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-5 m-5 ${
        open ? "" : "hidden"
      }`}
    >
      <button onClick={() => setOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:bg-red-100 rounded-full p-1 absolute right-2 top-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h1 className="m-2 text-orange-500 font-bold">Your Information</h1>
      <div className="m-2">
        <h1>Name:</h1>
        <input
          onChange={(evt) => setBook({ ...book, userName: evt.target.value })}
          type="text"
          className="w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
        />
      </div>
      <div className="m-2">
        <h1>Phone number:</h1>
        <input
          onChange={(evt) =>
            setBook({ ...book, phoneNumber: evt.target.value })
          }
          type="text"
          className="w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
        />
      </div>
      <div className="m-2">
        <h1>Location to pick you up:</h1>
        <input
          onChange={(evt) =>
            setBook({ ...book, pickupLocation: evt.target.value })
          }
          type="text"
          className="w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
        />
      </div>
      <div className="m-2">
        <h1>Your destination:</h1>
        <input
          onChange={(evt) =>
            setBook({ ...book, deliveryLocation: evt.target.value })
          }
          type="text"
          className="w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
        />
      </div>
      <div className="m-2">
        <h1>Leave us a message:</h1>
        <input
          onChange={(evt) => setBook({ ...book, message: evt.target.value })}
          type="text"
          className="w-[64vw] h-[5vh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
        />
      </div>
      <button
        onClick={handleCreateBook}
        className="m-2 bg-orange-500 hover:bg-orange-300 text-white w-[24vw] rounded-full p-2"
      >
        Book
      </button>
      {alert && <ToastContainer position="top-center" />}
    </div>
  );
};

export default BookingForm;
