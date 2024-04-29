import Link from 'next/link';
import type { FC } from 'react';

interface CalendarWidgetProps {}

const CalendarWidget: FC<CalendarWidgetProps> = () => {
    return <>
            <div className="bg-white flex gap-4  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] h-56 rounded-3xl p-4">
          <div className="bg-[#b1a697] justify-between flex flex-col rounded-3xl p-4 mt-6 w-40 h-40">
            <div>
            <p className="text-2xl  text-white">Jan 7</p>
            <Link
              href={"/calendar"}
              className=" text-xs font-bold  hover:underline text-orange-600"
            >
            Show More
            </Link>
            </div>
            <div>
              <div className="text-xl text-[#646261]">Wednesday</div>
              <div className="text-xl text-white ">4 events</div>
            </div>
          </div>
          <div>
            <p className="text-gray-500  font-bold">UPCOMING</p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-1">
                <hr className="my-1 h-10 rounded  w-1.5  border-t-0 bg-[#8ABABE]" />
                <div className="pt-1">
                  <p className=" text-l">Training</p>
                  <p className="text-sm text-[#646261]">12:00-13:30</p>
                </div>
              </div>

              <div className="flex gap-1">
                <hr className="my-1 h-10 rounded  w-1.5  border-t-0 bg-[#D4BD94]" />
                <div className="pt-1">
                  <p className=" text-l">Workout</p>
                  <p className="text-sm text-[#646261]">12:00-13:30</p>
                </div>
              </div>

              <div className="flex gap-1">
                <hr className="my-1 h-10 rounded  w-1.5  border-t-0 bg-[#D4BD94]" />
                <div className="pt-1">
                  <p className=" text-l">Video</p>
                  <p className="text-sm text-[#646261]">12:00-13:30</p>
                </div>
              </div>

            </div>
          </div>
        </div>
    </>;
}

export default CalendarWidget;
