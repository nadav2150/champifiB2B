import Image from "next/image";
import Header from "./Header";
import CalendarWidget from "@/components/CalendarWidget";
import PieWidget from "@/components/PieWidget";

export default function Dashboard() {
  return (
    <div className="overflow-auto no-scrollbar ">
      <Header />
      <div id="container" className="max-h-[85vh]  flex p-4 gap-4">
        <div id="leftSide" className=" overflow-x-hidden no-scrollbar flex-[1]">
          <div className="flex flex-col gap-4">
            <div className="mt-4">
              <p className="text-[#1C274C] font-l font-bold">
                Arizona Football Team
              </p>
              <div
                id="coachCard"
                className="bg-white border border-[#EEEEEE] rounded-xl h-[331px] p-4 mt-2"
              >
                <div
                  id="coachHeader"
                  className="flex justify-between items-center p-2"
                >
                  <div>
                    <p className="text-[#1C274C] font-semibold">Bob Johnson</p>
                    <p className="text-[#1C274C] text-sm flex">
                      <Image
                        src={`https://flagcdn.com/24x18/es.png`}
                        width={20}
                        height={20}
                        alt="Picture of  author"
                        className="p-1"
                      />
                      | ⚽ Titans Football team
                    </p>
                  </div>

                  <button className=" flex text-l hover:opacity-90 shrink-0 dark:bg-gradient-to-r from-[#F2612C] to-[#FCCC0B] text-xs  items-center justify-center gap-2 w-fit px-4 p-2  rounded-xl font-bold text-white  bg-[#1C274C]">
                    Assign Coach
                  </button>
                </div>
                <div id="coachBody" className="mt-8 p-2">
                  <div className="flex gap-4 overflow-scroll no-scrollbar max-w-full">
                    {Array.from({ length: 100 }).map((item, index) => (
                      <div className="flex flex-col items-center">
                        <Image
                          src={`https://i.pravatar.cc/?img=${index}`}
                          width={60}
                          height={60}
                          className=" rounded-full"
                          alt="Picture of  author"
                        />
                        <div className=" text-center w-[70px]">
                          <p className="text-[#1C274C] text-l font-semibold">
                            Jon Doe
                          </p>
                          <p className=" text-sm">coach</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#1C274C] font-l font-bold">
                Arizona Football Team
              </p>
              <div
                id="playerCard"
                className="bg-white border border-[#EEEEEE] rounded-xl h-[331px] p-4"
              >
                <div
                  id="playerHeader"
                  className="flex justify-between items-center p-2"
                >
                  <div>
                    <p className="text-[#1C274C] font-semibold">Predatores</p>
                    <p className="text-[#1C274C] text-sm flex">
                      <Image
                        src={`https://flagcdn.com/24x18/es.png`}
                        width={20}
                        height={20}
                        alt="Picture of  author"
                        className="p-1"
                      />
                      | ⚽ 12 Players
                    </p>
                  </div>

                  <button className=" flex text-l hover:opacity-90 shrink-0 dark:bg-gradient-to-r from-[#F2612C] to-[#FCCC0B] text-xs  items-center justify-center gap-2 w-fit px-4 p-2  rounded-xl font-bold text-white  bg-[#1C274C]">
                    Assign Player
                  </button>
                </div>
                <div id="playerBody" className="mt-8 p-2">
                  <div className="flex gap-4 overflow-scroll no-scrollbar max-w-full">
                    {Array.from({ length: 100 }).map((item, index) => (
                      <div className="flex flex-col items-center">
                        <Image
                          src={`https://i.pravatar.cc/?img=${index}`}
                          width={60}
                          height={60}
                          className=" rounded-full"
                          alt="Picture of  author"
                        />
                        <div className=" text-center w-[70px]">
                          <p className="text-[#1C274C] text-l font-semibold">
                            Jon Doe
                          </p>
                          <p className=" text-sm">coach</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="rightSide" className="flex-[1]">
          <CalendarWidget />
          <div className="flex justify-center  rounded-xl">
            <PieWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
