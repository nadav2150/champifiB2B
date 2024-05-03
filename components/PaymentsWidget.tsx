

import type { FC } from "react";
import AvatarListItem from "./AvatarListItem";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';


interface PaymentsWidgetProps {}

const PaymentsWidget: FC<PaymentsWidgetProps> = () => {
  return (
    <div className="">
      <div className=" overflow-scroll no-scrollbar bg-white  h-72 rounded-3xl p-3">
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
      </div>
    </div>
  );
};

export default PaymentsWidget;
