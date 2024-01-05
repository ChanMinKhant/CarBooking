import React from "react";
import CarInterface from "./CarInterface";

const Cars = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Car img */}
      <CarInterface direction={"Pyay → Yangon"} />
      <CarInterface direction={"Yangon → Pyay"} />
      <CarInterface direction={"Pyay → Yangon"} />
      <CarInterface direction={"Yangon → Pyay"} />
    </div>
  );
};

export default Cars;
