import type { FC } from "react";
import Image from "next/image";
import { FaLongArrowAltUp } from "react-icons/fa";

interface PaymentsWidgetProps {}

const PaymentsWidget: FC<PaymentsWidgetProps> = () => {
  return (
    <div className=" w-[450px]">
      <div className="flex justify-between items-center">
        <div className="text-xl dark:text-white">Recent Payments</div>
        <div className="text-xs text-[#999999] dark:text-white">View More</div>
      </div>

      <div className=" p-4  mt-2 dark:bg-[#232429] bg-[#FFFFFF] h-[397px] rounded-3xl">
        <div className="flex h-full flex-col gap-4 overflow-scroll no-scrollbar">
          {Array.from({ length: 30 }).map((item) => {
            return (
              <div className="flex justify-between">
                <div className="flex w-fit items-center gap-2">
                  <div className="bg-gradient-to-r from-[#F2612C] to-[#FCCC0B] rounded-full p-[0.8px]">
                  <Image
                    src="https://i.pravatar.cc"
                    width={40}
                    height={40}
                    className=" rounded-full  h-[40px]  border-orange-900 border-2"
                    alt="Picture of the author"
                  />
                  </div>

                  <div>
                    <p className=" text-lg dark:text-white">John Doe</p>
                    <p className="text-xs pl-1 text-[#999999] dark:text-white">
                      Real madrid Young Ⅱ
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaLongArrowAltUp color="#08D869" />
                  <p className="text-[#08D869]">$300</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className=" overflow-scroll no-scrollbar bg-white  h-72 rounded-3xl p-3">
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
          {Array.from({ length: 5 }).map((_, index) => (
            <AvatarListItem key={index} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default PaymentsWidget;
