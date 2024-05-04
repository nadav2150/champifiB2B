"use client";

import type { FC } from "react";
import Image from "next/image";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";

interface TeamWidgetProps {}

const TeamWidget: FC<TeamWidgetProps> = () => {
  return (
    <div className=" w-[1000px] flex-1 xs:max-sm:w-[350px]">
      <div className="text-xl dark:text-white">Teams</div>
      <div className="flex overflow-scroll mt-4 gap-4 no-scrollbar">
        {Array.from({ length: 20 }).map((team) => {
          return (
            <div
              id="team-card"
              className="min-w-[330px]  text-lg p-6 h-[344px]  flex flex-col gap-4  dark:bg-[#232429] bg-[#FFFFFF]  rounded-3xl "
            >
              <div className="flex justify-between items-center ">
                <p className="text-[#909090] dark:text-[#CCCCCC]">Football</p>
                <BsThreeDotsVertical color="#1C274C" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[#1C274C] dark:text-white">
                  Real madrid Young Ⅱ
                </p>
                <div className="flex flex-col gap-4">
                  <p className="text-[#909090]">Members</p>

                  <div className="flex items-center overflow-scroll no-scrollbar">
                    {Array.from({ length: 5 }).map((player, index) => (
                      <div
                        key={index}
                        className=" mr-[-15px] items-center w-fit"
                      >
                        <Image
                          src={`https://i.pravatar.cc/?img=${index}`}
                          width={40}
                          height={40}
                          className=" rounded-full"
                          alt="Picture of the author"
                        />
                      </div>
                    ))}
                    <div className="ml-6 text-[#909090]">+5</div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-[#909090]">Coaches</p>

                  <div className="flex items-center overflow-scroll no-scrollbar">
                    {Array.from({ length: 2 }).map((player, index) => (
                      <div
                        key={index}
                        className=" mr-[-15px] items-center w-fit"
                      >
                        <Image
                          src={`https://i.pravatar.cc/?img=${index}`}
                          width={40}
                          height={40}
                          className=" rounded-full"
                          alt="Picture of the author"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div
          id="team-card"
          className="w-[330px]  text-lg p-6 h-[344px]  flex flex-col gap-4  dark:bg-[#232429] bg-[#FFFFFF]  rounded-3xl "
        >
          <div className="flex justify-between items-center">
            <p className="text-[#909090]">Football</p>
            <BsThreeDotsVertical color="#1C274C" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#1C274C]">Real madrid Young Ⅱ</p>
            <div className="flex flex-col gap-4">
              <p className="text-[#909090]">Members</p>

              <div className="flex items-center overflow-scroll no-scrollbar">
                {Array.from({ length: 4 }).map((player, index) => (
                  <div key={index} className=" mr-[-15px] items-center w-fit">
                    <Image
                      src={`https://i.pravatar.cc/?img=${index}`}
                      width={40}
                      height={40}
                      className=" rounded-full"
                      alt="Picture of the author"
                    />
                  </div>
                ))}
                <div className="ml-6 text-[#909090]">+5</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[#909090]">Coaches</p>

              <div className="flex items-center overflow-scroll no-scrollbar">
                {Array.from({ length: 2 }).map((player, index) => (
                  <div key={index} className=" mr-[-15px] items-center w-fit">
                    <Image
                      src={`https://i.pravatar.cc/?img=${index}`}
                      width={40}
                      height={40}
                      className=" rounded-full"
                      alt="Picture of the author"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWidget;
