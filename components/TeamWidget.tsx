'use client'

import type { FC } from 'react';
import Image from "next/image";
import { HiMiniUserGroup } from 'react-icons/hi2';

interface TeamWidgetProps {}

const TeamWidget: FC<TeamWidgetProps> = () => {
    return         <div className="bg-white h-72 rounded-3xl p-4 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
    <div className="flex justify-between items-center">
      <h2 className="text-xl text-slate-700">Teams</h2>
      <div className="flex gap-1 items-center">
        <p className="font-semibold text-sm">21</p>
        <HiMiniUserGroup className=" text-orange-700" />
      </div>
    </div>
    <div className="p-2">
      <div>
        <p>Coach</p>
        <div className="flex flex-col items-center w-fit p-2">
          <Image
            src="https://i.pravatar.cc"
            className=" rounded-full"
            alt="Picture of the author"
            width={40}
            height={40}
          />
          <p className="text-xs font-bold">John Doe</p>
        </div>
      </div>
      <div>
        <p>Players</p>
        <div className="flex gap-4 p-2 overflow-scroll no-scrollbar">
        {Array.from({ length: 8 }).map((player,index) => (
          <div key={index} className="flex flex-col items-center w-fit">
            <Image
              src="https://i.pravatar.cc"
              width={40}
              height={40}
              className=" rounded-full"
              alt="Picture of the author"
            />
            <p className="text-xs font-bold">John Doe</p>
          </div>
        ))}
        </div>

      </div>
    </div>
  </div>
}

export default TeamWidget;
