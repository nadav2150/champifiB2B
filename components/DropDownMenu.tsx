"use client";
import { useEffect, useRef, useState, type FC } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropDownMenuProps {
  label: string;
  options: string[];
}

const DropDownMenu: FC<DropDownMenuProps> = ({ label, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="w-44" ref={menuRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-l w-full cursor-pointer justify-between border-2 flex items-center border-[#DDDDDD] dark:border dark:text-white dark:hover:border-[#fff] dark:border-[#b3acac] p-2 hover:border-[#1C274C] rounded-lg"
      >
        {selectedOption}
        <RiArrowDropDownLine className="hover:bg-white-500" />
      </div>
      <div
        className={` ${
          !isOpen && "hidden"
        } border-2 border-[#DDDDDD] bg-slate-100 p-2 flex flex-col gap-2 rounded-xl absolute w-44  dark:text-slate-500  dark:bg-slate-700`}
      >
        {options.map((option) => (
          <div
            key={option}
            onClick={() => {
              setSelectedOption(option);
              setIsOpen(false);
            }}
            className={`${
              option !== selectedOption &&
              "hover:bg-slate-400 dark:hover:bg-slate-600"
            } rounded-xl w-full p-2 cursor-pointer ${
              option === selectedOption &&
              "bg-[#1C274C] text-white dark:bg-gradient-to-r from-[#F2612C] to-[#FCCC0B]"
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDownMenu;
