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

import { Line } from "react-chartjs-2";
import { Colors } from "../../helpers/enums/colors";
import { Space } from "antd";
import { useState } from "react";
import { Box, Button } from "../../components";

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
  type: "line",
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  layout: {
    padding: 15,
  },

  stacked: false,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        font: {
          size: 12,
          weight: "bold",
        },
      },
    },
  },

  scales: {
    x: {
      ticks: {
        color: `${Colors.SilverSand}`,
      },
    },
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      grid: {
        display: false,
      },
      ticks: {
        color: `${Colors.SilverSand}`,
      },
    },
  },
  y1: {
    type: "linear" as const,
    display: true,
    position: "right" as const,
    grid: {
      drawOnChartArea: false,
    },
    ticks: {
      display: false,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November ",
  "December ",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: [200, 250, 400, 1500, 700, 900, 400, 800, 1200, 300, 800, 550],
      borderColor: `${Colors.BlueDiamond}`,
      backgroundColor: `${Colors.VeryLightBlue}`,
      yAxisID: "y",
      tension: 0.6,
      fill: true,
    },
    {
      label: "Expenses",
      data: [
        -200, -250, -400, -0, -700, -900, -400, -800, -1200, -300, -800, -550,
      ],
      borderColor: "rgb(250, 46, 90)",
      backgroundColor: `${Colors.CoralPink}`,
      color: "red",
      yAxisID: "y",
      tension: 0.6,
    },
  ],
};

export default function Chart() {
  const [period, setPeriod] = useState<string>("Monthly");

  const handleMonth = () => {
    setPeriod("Monthly");
  };
  const handleWeek = () => {
    setPeriod("Weekly");
  };
  const handleDay = () => {
    setPeriod("Daily");
  };

  return (
    <Box display="flex" flexDirection="column" width="70%">
      <Box display="flex" justifyContent="space-between" marginBottom={15}>
        <Box fontWeight={700} fontSize={18}>
          Summary
        </Box>
        <Box display="flex">
          <Space size={10}>
            <Box>
              <Button
                borderRadius={5}
                border={`1px solid ${Colors.SilverSand}`}
                color={period === "Monthly" ? Colors.Black : Colors.SilverSand}
                onClick={handleMonth}
              >
                Monthly
              </Button>
            </Box>
            <Box>
              <Button
                borderRadius={5}
                border={`1px solid ${Colors.SilverSand}`}
                color={period === "Weekly" ? Colors.Black : Colors.SilverSand}
                onClick={handleWeek}
              >
                Weekly
              </Button>
            </Box>
            <Box>
              <Button
                borderRadius={5}
                border={`1px solid ${Colors.SilverSand}`}
                color={period === "Daily" ? Colors.Black : Colors.SilverSand}
                onClick={handleDay}
              >
                Daily
              </Button>
            </Box>
          </Space>
        </Box>
      </Box>
      <Box background={Colors.White} borderRadius="10px">
        <Line options={options} data={data} />
      </Box>
    </Box>
  );
}
