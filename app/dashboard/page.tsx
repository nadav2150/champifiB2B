"use client";

import CalendarWidget from "@/components/CalendarWidget";
import PaymentsWidget from "@/components/PaymentsWidget";
import Image from "next/image";
import TeamWidget from "@/components/TeamWidget";
import FinancialWidget from "@/components/FinancialWidget";
import DocumentsWidget from "@/components/DocumentsWidget";

export default function Dashboard() {
  return (
    <div className="p-5  h-screen overflow-scroll no-scrollbar">
      <div id="header" className="flex justify-end shrink">
        <Image
          src="https://i.pravatar.cc"
          width={40}
          height={40}
          className=" rounded-full"
          alt="Picture of the author"
        />
      </div>
      <div id="body" className="flex flex-wrap gap-8">
        <CalendarWidget />
        <FinancialWidget />
        <div className="flex-1">
          <PaymentsWidget />
          <button className="w-full xs:max-sm:hidden bottom-0 mt-8 flex text-xl hover:opacity-90  items-center justify-center gap-2 rounded-2xl font-bold text-white  h-20 bg-[#1C274C]">
            Send Notifications
            <Image
              src="/bell.png"
              width={40}
              height={40}
              className=" rounded-full"
              alt="Picture of the author"
            />
          </button>
        </div>

        <TeamWidget />
        <DocumentsWidget />
        <button className="w-full sm:hidden bottom-0 mt-8 flex text-xl hover:opacity-90  items-center justify-center gap-2 rounded-2xl font-bold text-white  h-20 bg-[#1C274C]">
          Send Notifications
          <Image
            src="/bell.png"
            width={40}
            height={40}
            className=" rounded-full"
            alt="Picture of the author"
          />
        </button>
      </div>
    </div>
  );
}
