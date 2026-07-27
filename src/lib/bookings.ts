export interface Booking {
  id: string;
  name: string;
  mobile: string;
  checkIn: string;
  message: string;
  guests: number;
  createdAt: string;
}

const STORAGE_KEY = "dandeli_bookings";

export const getBookings = (): Booking[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveBooking = (booking: Omit<Booking, "id" | "createdAt">): Booking => {
  const newBooking: Booking = {
    ...booking,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const bookings = getBookings();
  bookings.unshift(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  return newBooking;
};
