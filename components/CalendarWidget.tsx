"use client";
import { Fab } from "@mui/material";
import { add, eachDayOfInterval, format } from "date-fns";
import { useState, type FC } from "react";
import { FaRegClock } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
interface CalendarWidgetProps {}

const today = new Date();

// Get the date one week from today
const oneWeekFromToday = add(today, { weeks: 1 });

// Get all dates between today and one week from today
const dates = eachDayOfInterval({ start: today, end: oneWeekFromToday });

const CalendarWidget: FC<CalendarWidgetProps> = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <div className=" w-[450px]">
      <div className="text-xl">Upcoming Events</div>
      <div>
        <div className="flex flex-col mt-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] h-[397px] rounded-3xl">
          <div
            id="calendar-header"
            className="h-20 max-h-20 flex-1 rounded-xl flex text-white bg-[#1C274C] shrink"
          >
            <div className="flex text-[#A4A9B7] w-full">
              {dates.map((date, index) => {
                const dayOfWeek = format(date, "EEE");
                const day = format(date, "d");

                return (
                  <div
                    key={index}
                    className={`flex-1   text-xs gap-1 flex flex-col text-center items-center justify-center ${
                      index === activeItemIndex &&
                      "bg-white font-bold text-[#1C274C] m-2 rounded-xl"
                    }`}
                  >
                    <p>{dayOfWeek.toUpperCase()}</p>
                    <p
                      onClick={() => setActiveItemIndex(index)}
                      className={` w-6 flex justify-center items-center h-6 p-1 cursor-pointer text-sm `}
                    >
                      {day}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="m-2 mt-6 flex flex-col gap-2 overflow-auto no-scrollbar">
            {Array.from({ length: 10 }).map((item) => (
              <div className="p-4 rounded-md flex flex-col gap-2 bg-[#FDD484]">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-sm">Training</p>
                  <div className="flex items-center gap-1 text-xs text-[#82928B]">
                    <FaRegClock />
                    <p>12:00- 14:00</p>
                  </div>
                </div>
                <p className="text-[12px]">Real madrid Young Ⅱ</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
          <div className=" rounded-full right-2 justify-end relative bottom-10 bg-white p-2 w-fit">
          <button className="bg-gradient-to-r from-[#F2612C] to-[#FCCC0B] w-fit rounded-full p-2"><FaPlus color="white" size={28}/></button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
