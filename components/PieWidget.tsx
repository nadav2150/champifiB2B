"use client";

import type { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        usePointStyle: true,
        generateLabels: (chart) => {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);

              return {
                text: `${data.datasets[0].data[i]} ${label}`,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: !chart.getDataVisibility(i),
                index: i,
              };
            });
          } else {
            return [];
          }
        },
      },
    },
  },
};

const data = {
  labels: ["Win", "Loss", "Draw"],
  datasets: [
    {
      label: "# of Votes",
      data: [100, 100, 100],
      backgroundColor: ["#FF8E26", "#FDD484", "#1C274C"],
      borderWidth: 1,
    },
  ],
};

interface PieWidgetProps {}

const PieWidget: FC<PieWidgetProps> = () => {
  return (
    <div className="">
      <div className="max-h-[300px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default PieWidget;
