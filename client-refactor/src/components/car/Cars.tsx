import { useState } from "react";
import { CreateBookPayload, TravelDirectionType } from "../../types/book";
import CarInterface from "./CarInterface";

const Cars = () => {
  const [book, setBook] = useState<CreateBookPayload>({
    userName: "",
    phoneNumber: "",
    pickupLocation: "",
    deliveryLocation: "",
    seatNumber: 0,
    travelDirection: TravelDirectionType.YtoP,
    carTime: "",
    message: "",
    bookingDate: "",
  });

  console.log(book);

  return (
    <div>
      <CarInterface book={book} setBook={setBook} />
      <CarInterface book={book} setBook={setBook} />
      <CarInterface book={book} setBook={setBook} />
      <CarInterface book={book} setBook={setBook} />
    </div>
  );
};

export default Cars;
