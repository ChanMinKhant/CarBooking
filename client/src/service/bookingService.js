import apiService from './apiService';

export const checkSeatAvailability = async (date, time) => {
  try {
    const response = await apiService.get(`/?date=${date}&time=${time}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
