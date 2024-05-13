import DropDownMenu from "@/components/DropDownMenu";
import type { FC } from "react";
import Image from "next/image";

interface HeaderProps {}

const coachNames = [
  "John Doe",
  "Jane Smith",
  "Bob Johnson",
  "Alice Williams",
  "Charlie Brown",
  "Emily Davis",
];

const teamNames = [
  " Predators",
  " Warriors",
  " Invincibles",
  " Titans",
  " Dragons",
  " Challengers",
];

const Header: FC<HeaderProps> = () => {
  return (
    <div className="">
      <div className="p-5 overflow-scroll no-scrollbar xs:max-sm:hidden">
        <div className=" px-2 dark:bg-[#2E2E2E] rounded-lg bg-[#ffffff] min-h-24 flex items-center gap-2 justify-between flex-wrap">
          <div className="flex gap-8">
            <div className=" pl-4  shrink-0">
              <p className="text-[#1C274C] text-lg font-bold dark:text-[#CCCCCC]">
                Total Number of Teams
              </p>
              <p className="text-xl  font-bold dark:text-white">28 Teams</p>
            </div>

            <div className="flex items-center overflow-scroll no-scrollbar">
              {Array.from({ length: 5 }).map((player, index) => (
                <div key={index} className=" mr-[-15px] items-center w-fit">
                  <Image
                    src={`https://i.pravatar.cc/?img=${index}`}
                    width={40}
                    height={40}
                    className=" rounded-full"
                    alt="Picture of  author"
                  />
                </div>
              ))}
              <div className="ml-6 text-[#000000] font-semibold">+2</div>
            </div>
          </div>

          <div className="flex gap-2">
            <DropDownMenu label={"By Coach"} options={coachNames} />
            <DropDownMenu label={"By Coach"} options={teamNames} />
            <button className=" flex text-l hover:opacity-90 shrink-0 dark:bg-gradient-to-r from-[#F2612C] to-[#FCCC0B]  items-center justify-center gap-2 w-fit p-2 px-5 rounded-xl font-bold text-white  bg-[#1C274C]">
              Add New Team
            </button>
          </div>
        </div>
      </div>

      <div id="mobile" className="sm:hidden">
        <div className="text-xs  mt-16 p-6 bg-white border rounded-lg sm:hidden">
          <div className="flex justify-between">
            <div className=" pl-4">
              <p className="text-[#1C274C]  font-bold">Total Number of Teams</p>
              <p className="font-bold text-sm">28 Teams</p>
            </div>
            <button className=" flex text-l hover:opacity-90 shrink-0  items-center justify-center gap-2 w-fit p-2 px-5 rounded-xl font-bold text-white  bg-[#1C274C]">
              Add New Team
            </button>
          </div>
          <div className="flex items-center overflow-scroll no-scrollbar p-4">
            {Array.from({ length: 5 }).map((player, index) => (
              <div key={index} className=" mr-[-15px] items-center w-fit">
                <Image
                  src={`https://i.pravatar.cc/?img=${index}`}
                  width={40}
                  height={40}
                  className=" rounded-full"
                  alt="Picture of  author"
                />
              </div>
            ))}
            <div className="ml-6 text-[#000000] font-semibold">+2</div>
          </div>
        </div>
        <div className="flex justify-between m-2 sm:hidden">
          <DropDownMenu label={"By Coach"} options={coachNames} />
          <DropDownMenu label={"By Coach"} options={teamNames} />
        </div>
      </div>
    </div>
  );
};

export default Header;
