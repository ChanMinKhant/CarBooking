import React from "react";
const BookingForm = () => {
  return (
    <div>
      <div className=" border-gray-900/10 pb-12 border-2 px-5 py-1 border-red-300 rounded shadow-md">
        <h2 className="font-extrabold leading-7 text-gray-900 text-center text-lg">
          Personal Information
        </h2>

        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="number"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Number
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="number"
                id="number"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Street address where you live.
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Street address where you want to go.
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full rounded-md px-3 py-2 font-bold border-solid border-2 border-red-400 outline-red-600 outline-2 hover:bg-red-300 focus:outline-none focus:ring active:bg-red-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
