import apiService from './apiService';

export const checkSeatAvailability = async (date, time) => {
  try {
    const response = await apiService.get(
      `/checkseat/?date=${date}&time=${time}`
    );
    return response.data.availableSeats;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const bookSeat = async (data) => {
  try {
    const response = await apiService.post('/book', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
