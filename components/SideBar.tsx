"use client";
import { usePathname } from "next/navigation";
import { useState, type FC } from "react";
import { MdDashboard } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCalendarWeek } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import Link from "next/link";
import { redirect } from 'next/navigation';

interface SideBarProps {}

const List = [
  { name: "Dashboard", icon: <MdDashboard size={24} />, route: "/dashboard" },
  { name: "Teams", icon: <GrGroup size={24} />, route: "/teams" },
  { name: "Payments", icon: <FaMoneyBillWave size={24} />, route: "/payments" },
  { name: "Calendar", icon: <FaCalendarWeek size={24} />, route: "/calendar" },
  { name: "Settings", icon: <IoSettings size={24} />, route: "/settings" },
];

const SideBar: FC<SideBarProps> = () => {
  const currentRoute = usePathname();
  const selectedIndex = List.findIndex((item) => item.route === currentRoute);
  const initialSelectedIndex = selectedIndex === -1 ? 0 : selectedIndex;
  const [isOpen, setOpen] = useState(true);
  const [isSelect, setSelect] = useState(initialSelectedIndex);
  return (
    <div>
      <div
        className={`h-screen duration-300 text-white w-72 bg-slate-800 p-5 relative ${
          isOpen ? "w-72" : "w-20"
        }`}
      >
        <div className="flex items-center gap-1 text-2xl">
          <img
            onClick={() => setOpen(!isOpen)}
            className={`text-xl  text-orange-500 cursor-pointer duration-700 ${
              isOpen && "rotate-[360deg]"
            }`}
            width={40}
            src="/logo_1.png"
          />
          <p className={`${!isOpen && "scale-0"}`}>CHAMPIFI</p>
        </div>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-500" />
        <div className="flex flex-col gap-2 mt-5">
          {List.map((item, index) => {
            return (
              <Link href={item.route} key={index}>
                <div
                  className={`flex items-center gap-2 cursor-pointer p-2 rounded-md ${
                    isSelect === index ? "bg-orange-700" : "hover:bg-slate-700"
                  }`}
                  onClick={() => setSelect(index)}
                >
                  <div>{item.icon}</div>

                  <div className={`${!isOpen && "scale-0"}`}>{item.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
