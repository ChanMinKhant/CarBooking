import React from 'react';
import CarInterface from './CarInterface';
import DateDropdown from '../../utils/DateDropdown';
import TimeDropdown from '../../utils/TimeDropdown';
import TravelDirectionDropdown from '../../utils/TravelDirectionDropdown';

const Cars = () => {
  return (
    <div className='flex flex-col justify-center items-center m-10'>
      {/* Car img */}
      <CarInterface travelDirection={'Pyay → Yangon'} />
      <CarInterface travelDirection={'Yangon → Pyay'} />
      <CarInterface travelDirection={'Pyay → Yangon'} />
      <CarInterface travelDirection={'Yangon → Pyay'} />
    </div>
  );
};

export default Cars;
