import apiService from "./apiService";

export const checkSeatAvailability = async (date, time, from) => {
  try {
    if (from === "Yangon → Pyay") {
      from = "yangon";
    } else if (from === "Pyay → Yangon") {
      from = "pyay";
    }
    const response = await apiService.get(
      `/checkseat/?date=${date}&time=${time}&from=${from}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createBook = async (data) => {
  try {
    const response = await apiService.post(`/book`, data);
    return await response.data;
  } catch (error) {
    throw error;
  }
};

export const getPendingSeats = async () => {
  try {
    const response = await apiService.get("/pendingseats");
    return response.data.pendingBookings;
  } catch (error) {
    throw error;
  }
};

export const getApprovedSeats = async () => {
  try {
    const response = await apiService.get("/approvedseats");
    return response.data.approvedBookings;
  } catch (error) {
    throw error;
  }
};

export const approveBooking = async (id) => {
  try {
    const response = await apiService.put(`/approve/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const cancelBooking = async (id) => {
  try {
    const response = await apiService.put(`/cancel/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
