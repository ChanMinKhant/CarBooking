import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookSlice, CreateBookOptions } from "../../types/book";
import apiService from "../../utils/apiService";

const initialState: BookSlice = {
  doneBooking: false,
  isLoading: false,
  error: null,
};

export const createBook = createAsyncThunk(
  "book/createBook",
  async (options: CreateBookOptions, thunkApi) => {
    const { bookData, onSuccess, onError } = options;

    try {
      const response = await apiService.post("/book", bookData);
      const data = await response.data;
      console.log("responded data: ", data);
      thunkApi.dispatch(setBooked(true));
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooked: (state, action) => {
      state.doneBooking = action.payload;
    },
  },
});

export const { setBooked } = bookSlice.actions;
export default bookSlice.reducer;
