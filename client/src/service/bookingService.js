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
