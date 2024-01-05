const BookingForm = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[80dvw] h-[80dvh] border border-gray-100 shadow-lg rounded-lg flex flex-col justify-center items-center p-5">
        <h1 className="m-5 text-orange-500 font-bold">Your Information</h1>
        <div className="m-2">
          <h1>Name:</h1>
          <input
            type="text"
            className="w-[64dvw] h-[5dvh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
          />
        </div>
        <div className="m-2">
          <h1>Phone number:</h1>
          <input
            type="text"
            className="w-[64dvw] h-[5dvh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
          />
        </div>
        <div className="m-2">
          <h1>Location to pick you up:</h1>
          <input
            type="text"
            className="w-[64dvw] h-[5dvh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
          />
        </div>
        <div className="m-2">
          <h1>Your destination:</h1>
          <input
            type="text"
            className="w-[64dvw] h-[5dvh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300"
          />
        </div>
        <button className="m-2 bg-orange-500 hover:bg-orange-300 text-white w-[24dvw] rounded-full p-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
