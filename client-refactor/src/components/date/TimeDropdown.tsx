import { ChangeEvent, useEffect, useState } from "react";
import { CreateBookPayload } from "../../types/book";

interface Props {
  book: CreateBookPayload;
  setBook: (val: CreateBookPayload) => void;
}

const TimeDropdown = ({ book, setBook }: Props) => {
  const [times] = useState(["6:00", "6:05", "6:10", "6:15", "6:20"]);

  const handleChooseTime = (evt: ChangeEvent<HTMLSelectElement>) => {
    // setChosenTime(event.target.value);
    setBook({ ...book, carTime: evt.target.value });
  };
  useEffect(() => {
    setBook({ ...book, carTime: times[0] }); // Assuming set the first date
  }, []);

  return (
    <div className="mt-5">
      <label>Select a time:</label>
      <select onLoad={handleChooseTime} onChange={handleChooseTime}>
        {times.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeDropdown;
