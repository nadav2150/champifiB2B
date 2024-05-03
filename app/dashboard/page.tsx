"use client";
import CalendarWidget from "@/components/CalendarWidget";
import PaymentsWidget from "@/components/PaymentsWidget";
import { HiMiniUserGroup } from "react-icons/hi2";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import TeamWidget from "@/components/TeamWidget";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-5">
      <div id='header' className="flex justify-end shrink">
      <Image
              src="https://i.pravatar.cc"
              width={40}
              height={40}
              className=" rounded-full"
              alt="Picture of the author"
            />
      </div>
      <div id='body' className="grid grid-rows-[500px] auto-rows-[500px]  grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))]  gap-4">
        <CalendarWidget />
        <PaymentsWidget />
        {/* <PaymentsWidget />
        <TeamWidget/>

        <div className=" bg-white h-72 rounded-3xl p-7">
          <h2 className="text-2xl text-slate-700">Settings</h2>
          <p>21</p>
        </div>

        <div className="bg-white h-72 rounded-3xl p-7">
          <h2 className="text-2xl text-slate-700">Settings</h2>
          <p>21</p>
        </div> */}
      </div>
    </div>
  );
}
