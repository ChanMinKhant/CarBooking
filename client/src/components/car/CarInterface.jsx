import React, { useEffect, useState } from "react";
import { checkSeatAvailability } from "../../service/bookingService";
import CarSeatIcon from "../../utils/CarSeatIcon";
import BookingForm from "../form/BookingForm";
import DateDropdown from "./DateDropDown";

const CarInterface = ({ travelDirection }) => {
  const [choseDate, setChoseDate] = useState("");
  const [seats, setSeats] = useState([1, 2, 3, 4]);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({
    userName: "",
    phoneNumber: "",
    pickupLocation: "",
    deliveryLocation: "",
    carTime: "9:00 AM",
    message: "",
  });
  const [chooseSeat, setChooseSeat] = useState(0);
  const dateParts = choseDate.split("/");
  const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

  console.log(book, chooseSeat);

  useEffect(() => {
    const tempFunc = async () => {
      if (choseDate) {
        const availableSeats = await checkSeatAvailability(isoDate, "6:00");
        setSeats(availableSeats);
      }
    };

    tempFunc();
  }, [choseDate]);

  const isSeatBooked = (seatNum) => seats.includes(seatNum);

  return (
    <div className="flex flex-col justify-center items-center m-5">
      <DateDropdown setChoseDate={setChoseDate} />
      <h1 className="m-4 text-xl font-bold">{travelDirection}</h1>
      <BookingForm
        chooseSeat={chooseSeat}
        travelDirection={travelDirection}
        choseDate={isoDate}
        book={book}
        setBook={setBook}
        open={open}
        setOpen={setOpen}
      />
      <div className="border border-red-600 p-2 rounded-xl shadow-lg flex flex-col items-start justify-center gap-2">
        <button
          onClick={() => {
            setChooseSeat(1);
            setOpen(true);
          }}
        >
          <p>1</p>
          <CarSeatIcon isAvailable={isSeatBooked(1)} />
        </button>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              setChooseSeat(2);
              setOpen(true);
            }}
          >
            <p>2</p>
            <CarSeatIcon isAvailable={isSeatBooked(2)} />
          </button>
          <button
            onClick={() => {
              setChooseSeat(3);
              setOpen(true);
            }}
          >
            <p>3</p>
            <CarSeatIcon isAvailable={isSeatBooked(3)} />
          </button>
          <button
            onClick={() => {
              setChooseSeat(4);
              setOpen(true);
            }}
          >
            <p>4</p>
            <CarSeatIcon isAvailable={isSeatBooked(4)} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarInterface;
