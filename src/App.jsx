import BookingForm from "./components/booking-form/bookingForm";
import Cars from "./components/car/Cars";

function App() {
  return (
    <div className="w-auto h-auto flex flex-col justify-center items-center p-5">
      <Cars />
      <BookingForm />
    </div>
  );
}

export default App;
