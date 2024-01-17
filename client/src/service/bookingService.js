import apiService from './apiService';

export const checkSeatAvailability = async (date, time, from) => {
  try {
    if (from === 'Yangon → Pyay') {
      from = 'yangon';
    } else if (from === 'Pyay → Yangon') {
      from = 'pyay';
    }
    const response = await apiService.get(
      `/checkseat/?date=${date}&time=${time}&from=${from}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createBook = async (data) => {
  try {
    const response = await apiService.post(`/book`, data);
    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
