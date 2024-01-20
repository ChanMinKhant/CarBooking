import { ChangeEvent, useEffect, useState } from "react";
import { CreateBookPayload } from "../../types/book";

interface Props {
  book: CreateBookPayload;
  setBook: (val: CreateBookPayload) => void;
}

const DateDropdown = ({ book, setBook }: Props) => {
  const [dates, setDates] = useState<string[]>([]);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const handleChooseDate = (event: ChangeEvent<HTMLSelectElement>) => {
    setBook({ ...book, bookingDate: event.target.value });
  };

  useEffect(() => {
    const today = new Date();
    const nextDates = [];
    for (let i = 0; i < 15; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const formattedDate = nextDay.toLocaleDateString("en-GB", options);
      nextDates.push(formattedDate);
    }
    setDates(nextDates);
  }, []);

  useEffect(() => {
    setBook({ ...book, bookingDate: dates[0] });
  }, [dates]);

  return (
    <div className="mt-5">
      <label>Select a date:</label>
      <select onChange={handleChooseDate}>
        {dates.map((date, index) => (
          <option key={index} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateDropdown;
