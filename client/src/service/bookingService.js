import apiService from "./apiService";

export const checkSeatAvailability = async (date, time) => {
  try {
    const response = await apiService.get(
      `/checkseat/?date=${date}&time=${time}`
    );
    return await response.data.availableSeats;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createBook = async (
  book,
  travelDirection,
  bookingDate,
  chooseSeat
) => {
  const {
    userName,
    phoneNumber,
    pickupLocation,
    deliveryLocation,
    carTime,
    message,
  } = book;
  try {
    const response = await apiService.post(
      `/book/?date=${bookingDate}&time=${carTime}`,
      {
        userName,
        phoneNumber,
        pickupLocation,
        deliveryLocation,
        seatNumber: chooseSeat,
        carTime,
        message,
        travelDirection,
        bookingDate,
      }
    );
    console.log(response.data.booking);
    return await response.data.booking;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
