import React from "react";
import CarSeat from "./../../assets/car-seat-icon.svg";

const CarInterface = ({ direction }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-xl font-bold">{direction}</h1>
      <div className="border border-red-600 p-2 rounded-xl shadow-lg flex flex-col items-start justify-center gap-2">
        <button>
          <img className="w-16 h-16" src={CarSeat} alt="seat-1" />
        </button>
        <div className="flex justify-start items-center">
          <button>
            <img className="w-16 h-16" src={CarSeat} alt="seat-2" />
          </button>
          <button>
            <img className="w-16 h-16" src={CarSeat} alt="seat-3" />
          </button>
          <button>
            <img className="w-16 h-16" src={CarSeat} alt="seat-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarInterface;
