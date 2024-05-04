import type { FC } from "react";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Financial Overview",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#DDDDDD",
      },
    },
  },
  elements: {
    line: {
      tension: 0.4, // This value makes the line more curved. Range is from 0 (straight line) to 1 (max curve)
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#78FFAE",
      backgroundColor: "#78FFAE",
    },
    {
      label: "Expense",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#FF8D8D",
      backgroundColor: "#FF8D8D",
    },
  ],
};

interface FinancialWidgetProps {}

const FinancialWidget: FC<FinancialWidgetProps> = () => {
  return (
    <div className=" w-[600px] xs:max-sm:w-[450px]">
      <div className="flex justify-between items-center">
        <div className="text-xl dark:text-white">Financial Overview</div>

        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            autoFocus={true}
            className="px-4  py-2 text-xs font-medium text-gray-900 bg-white rounded-s-lg hover:bg-gray-100   hover:text-blue-700 focus:z-10  focus:bg-[#1C274C] focus:text-white dark:bg-[#232429]  dark:text-[#999999] dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white dark:focus:bg-[#1C274C]"
          >
           Last 30 Days
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs font-medium text-gray-900 bg-white  rounded-e-lg  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:bg-[#1C274C] focus:text-white    dark:bg-[#232429] dark:text-[#999999] dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-[#1C274C] dark:focus:text-white"
          >
             Last 7 Days
          </button>
        </div>
      </div>

      <div className=" p-4 flex flex-col mt-2 dark:bg-[#232429] bg-[#FFFFFF] h-[397px] min rounded-3xl">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default FinancialWidget;
