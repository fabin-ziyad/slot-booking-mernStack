import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DateFromatter, formatTimeToAMPM } from "../../utils/common";
import { useNavigate } from "react-router-dom";

const ShowDates = ({ slots, type, fees }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(slots[0]);
  const [selectedTime, setSelectedTime] = useState({});
  const handleScrollLeft = () => {
    setCurrentIndex(Math.max(currentIndex - 3, 0));
  };
  console.log(slots)
  const handleScrollRight = () => {
    setCurrentIndex(Math.min(currentIndex + 3, slots.length - 3));
  };
  const handleSelectedSlot = () => {
    const newData = {
      date: selectedDate.date,
      time: selectedTime.time,
      type: type,
      fees:fees
    };
    navigate("/confirm-appointment", {
      state: { data: newData },
    });
  };

  return (
    <div>
      <div className="flex w-full justify-between my-6 px-2 lg:px-8 md:px-6 border-b border-slate">
        <IoIosArrowBack
          className="text-4xl font-bold text-green hover:cursor-pointer"
          onClick={handleScrollLeft}
        />
        {slots.slice(currentIndex, currentIndex + 3).map((date, index) => (
          <div
            key={index}
            className="date w-[140px] hover:cursor-pointer"
            onClick={() => setSelectedDate(date)}
          >
            <h2 className="text-md lg:text-lg md:text-lg font-semibold text-center">
              {DateFromatter(date?.date)}
            </h2>
            <h5
              className={`text-green lg:text-lg text-md py-2 ${
                selectedDate.date === date.date ? "border-b-4" : ""
              } text-center`}
            >
              {date.timings.filter((slot) => !slot.booked).length || "No"} Slots
              Available
            </h5>
          </div>
        ))}
        <IoIosArrowForward
          className="text-4xl font-bold text-green hover:cursor-pointer"
          onClick={handleScrollRight}
        />
      </div>
      {selectedDate && (
        <div className="selected-details mt-4 px-4 lg:px-16 md:px-12 lg:pb-16">
          <div className="grid grid-cols-3 gap-3 lg:gap-x-8">
            {selectedDate.timings.map((date) => (
              <button
                className={`border border-slate px-1 py-2 my-2 rounded font-semibold hover:cursor-pointer ${
                  date.booked ? "bg-slate border-slate" : ""
                } ${
                  selectedTime.time === date.time
                    ? "bg-green text-white border-green"
                    : ""
                }`}
                disabled={date.booked}
                onClick={() => setSelectedTime(date)}
              >
                {formatTimeToAMPM(date.time)}
              </button>
            ))}
          </div>
          <div className="flex justify-end pt-2 lg:pt-6">
            <button
              className="hidden lg:block border border-primary px-5 py-2 my-2 rounded font-semibold text-white bg-primary"
              onClick={handleSelectedSlot}
            >
              CONTINUE
            </button>
          </div>
        </div>
      )}
      <button
        className="block lg:hidden fixed bottom-0 border border-primary px-5 py-2 w-full font-semibold text-white bg-primary"
        onClick={handleSelectedSlot}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default ShowDates;
