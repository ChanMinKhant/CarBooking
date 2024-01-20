import { useState } from "react";
import { CreateBookPayload } from "../../types/book";
import DateDropdown from "../date/DateDropdown";
import TimeDropdown from "../date/TimeDropdown";
import BookingForm from "../forms/BookingForm";
import CarSeatIcon from "./CarSeatIcon";

interface Props {
  book: CreateBookPayload;
  setBook: (val: CreateBookPayload) => void;
}

const CarInterface = ({ book, setBook }: Props) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <DateDropdown book={book} setBook={setBook} />
      <TimeDropdown book={book} setBook={setBook} />
      <div className="w-auto h-auto p-2 border border-red-600 rounded-xl flex flex-col items-start justify-center gap-1 m-2">
        <button
          onClick={() => {
            setBook({ ...book, seatNumber: 1 });
            setOpen(true);
          }}
        >
          <CarSeatIcon isAvailable={isAvailable} isPending={isPending} />
        </button>
        <div className="flex flex-row justify-start items-center">
          <button
            onClick={() => {
              setBook({ ...book, seatNumber: 2 });
              setOpen(true);
            }}
          >
            <CarSeatIcon isAvailable={isAvailable} isPending={isPending} />
          </button>
          <button
            onClick={() => {
              setBook({ ...book, seatNumber: 3 });
              setOpen(true);
            }}
          >
            <CarSeatIcon isAvailable={isAvailable} isPending={isPending} />
          </button>
          <button
            onClick={() => {
              setBook({ ...book, seatNumber: 4 });
              setOpen(true);
            }}
          >
            <CarSeatIcon isAvailable={isAvailable} isPending={isPending} />
          </button>
        </div>
        <BookingForm
          book={book}
          setBook={setBook}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
};

export default CarInterface;
