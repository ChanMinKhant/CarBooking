import apiService from './apiService';

export const login = async (email, password) => {
  try {
    const response = await apiService.post(`/admin/login`, { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
