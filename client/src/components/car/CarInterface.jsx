import React from "react";
import { useNavigate } from "react-router-dom";
import CarSeat from "./../../assets/car-seat-icon.svg";

const CarInterface = ({ direction }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-xl font-bold">{direction}</h1>
      <div className="border border-red-600 p-2 rounded-xl shadow-lg flex flex-col items-start justify-center gap-2">
        <button onClick={() => navigate("/booking/1")}>
          <div>1</div>
          <img className="w-16 h-16" src={CarSeat} alt="seat-1" />
        </button>
        <div className="flex justify-start items-center">
          <button onClick={() => navigate("/booking/2")}>
            <div>2</div>
            <img className="w-16 h-16" src={CarSeat} alt="seat-2" />
          </button>
          <button onClick={() => navigate("/booking/3")}>
            <div>3</div>
            <img className="w-16 h-16" src={CarSeat} alt="seat-3" />
          </button>
          <button onClick={() => navigate("/booking/4")}>
            <div>4</div>
            <img className="w-16 h-16" src={CarSeat} alt="seat-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarInterface;
