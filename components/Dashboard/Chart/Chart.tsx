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
import { Colors } from "../../../helpers/enums/colors";
import { DatePicker, Space } from "antd";
import { Box } from "../..";
import { useGetByMonth } from "../../../hooks/useFetchByMonth";
import moment from "moment";
import { UserPayments } from "../../../models/userModel";
import { useEffect } from "react";

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
} as const;

export default function Chart() {
  const { data, mutate } = useGetByMonth();

  const income: any = [];
  const expense: any[] = [];
  const handleMonth = (value: any) => {
    mutate(value && { month: Number(moment(value).format("MM")) });
  };

  useEffect(() => {
    mutate({ month: null });
  }, []);

  data?.map(({ amount, category }: UserPayments) => {
    if (amount.includes("-")) {
      return expense.push(amount);
    } else {
      return income.push(amount);
    }
  });

  const labels = data?.map(({ date }: UserPayments) => date.slice(0, 5));

  const category = data?.map(({ category }: UserPayments) => category);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Incomes",
        data: income,
        borderColor: `${Colors.BlueDiamond}`,
        backgroundColor: `${Colors.VeryLightBlue}`,
        yAxisID: "y",
        tension: 0.6,
        fill: true,
      },
      {
        label: "Expenses",
        data: expense,
        borderColor: "rgb(250, 46, 90)",
        backgroundColor: `${Colors.CoralPink}`,
        color: "red",
        yAxisID: "y",
        tension: 0.6,
      },
    ],
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
              <DatePicker picker="month" autoFocus onChange={handleMonth} />
            </Box>
          </Space>
        </Box>
      </Box>
      <Box background={Colors.White} borderRadius="10px">
        <Line options={options} data={chartData} />
      </Box>
    </Box>
  );
}
