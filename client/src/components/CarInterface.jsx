import React from "react";
import CarSeat from "./../assets/car-seat-icon.svg";

const CarInterface = ({ direction }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-xl font-bold">{direction}</h1>
      <div className="border border-red-600 p-2 rounded-xl shadow-lg flex flex-col items-start justify-center gap-2">
        <img className="w-16 h-16" src={CarSeat} alt="car-seat" />
        <div className="flex justify-start items-center">
          <img className="w-16 h-16" src={CarSeat} alt="car-seat" />
          <img className="w-16 h-16" src={CarSeat} alt="car-seat" />
          <img className="w-16 h-16" src={CarSeat} alt="car-seat" />
        </div>
      </div>
    </div>
  );
};

export default CarInterface;
