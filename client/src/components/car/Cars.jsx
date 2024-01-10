import React from "react";
import CarInterface from "./CarInterface";

const Cars = () => {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      {/* Car img */}
      <CarInterface travelDirection={"Pyay → Yangon"} />
      <CarInterface travelDirection={"Yangon → Pyay"} />
      <CarInterface travelDirection={"Pyay → Yangon"} />
      <CarInterface travelDirection={"Yangon → Pyay"} />
    </div>
  );
};

export default Cars;
