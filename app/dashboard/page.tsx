"use client";
import AvatarListItem from "@/components/AvatarListItem";
import CalendarWidget from "@/components/CalendarWidget";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-5">
      <h1 className="text-3xl sm:text-3xl font-bold mb-5">Dashboard</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-5 border-2 border-gray-300 bg-white rounded-lg text-sm focus:outline-none"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className=" overflow-scroll no-scrollbar shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-white  h-72 rounded-3xl p-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-slate-700">Recent Payments</h2>
            <Link
              href={"/payments"}
              className=" text-sm  hover:underline text-orange-600"
            >
              View All
            </Link>
          </div>
          <div className="flex-col">
            <AvatarListItem />
            <AvatarListItem />
            <AvatarListItem />
            <AvatarListItem />
            <AvatarListItem />
            <AvatarListItem />
            <AvatarListItem />
          </div>
        </div>

        <CalendarWidget />

        <div className="bg-white h-72 rounded-3xl p-7 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
          <h2 className="text-2xl text-slate-700">Settings</h2>
          <p>21</p>
        </div>

        <div className=" shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-white h-72 rounded-3xl p-7">
          <h2 className="text-2xl text-slate-700">Settings</h2>
          <p>21</p>
        </div>

        <div className="bg-white h-72 rounded-3xl p-7">
          <h2 className="text-2xl text-slate-700">Settings</h2>
          <p>21</p>
        </div>
      </div>
    </div>
  );
}
