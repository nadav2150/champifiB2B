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
      <div className="">
        <div className=" p-4 flex flex-col mt-2 dark:bg-[#232429] bg-[#FFFFFF] h-[397px] rounded-3xl">
          <div
            id="calendar-header"
            className="h-20 max-h-20 flex-1 rounded-xl flex text-white bg-[#1C274C] dark:bg-[#2A494E] shrink"
          >
            <div className="flex text-[#A4A9B7] w-full">
              {dates.map((date, index) => {
                const dayOfWeek = format(date, "EEE");
                const day = format(date, "d");

                return (
                  <div
                    key={index}
                    className={`flex-1 p-1 w-2 text-xs gap-4 flex flex-col text-center items-center justify-center ${
                      index === activeItemIndex &&
                      "bg-white font-bold text-[#1C274C] dark:bg-[#45C4A2] dark:text-white  m-2 rounded-xl"
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
              <div className="p-4 dark:text-white rounded-md flex flex-col gap-2 bg-[#FDD484] dark:bg-[#39393E]">
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
          <div className="h-0">
          <div className="flex justify-end">
          <div className="rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 left-5 justify-end relative bottom-[70px] bg-white dark:bg-[#232429] p-2 w-fit">
          <button className="bg-gradient-to-r from-[#F2612C] to-[#FCCC0B] w-fit rounded-full p-2"><FaPlus color="white" size={28}/></button>
          </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
