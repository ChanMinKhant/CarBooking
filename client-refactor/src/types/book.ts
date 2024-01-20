import { BaseOptions } from "./app";

export interface CreateBookPayload {
  userName: string;
  phoneNumber: string;
  pickupLocation: string;
  deliveryLocation: string;
  seatNumber: number;
  travelDirection: TravelDirectionType;
  carTime: string;
  bookingDate: string;
  message: string;
}

export enum TravelDirectionType {
  YtoP = "Yangon → Pyay",
  PtoY = "Pyay → Yangon",
}

export interface BookSlice {
  doneBooking: boolean;
  isLoading: boolean;
  error: Error | null;
}

export interface CreateBookOptions extends BaseOptions {
  bookData: CreateBookPayload;
}
