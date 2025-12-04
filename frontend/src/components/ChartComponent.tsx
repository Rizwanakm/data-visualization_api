import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import io from "socket.io-client";
import { fetchData, IData } from "../api/dataApi";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// Connect to backend WebSocket
const socket = io("http://localhost:5000");

const ChartComponent = () => {
  const [items, setItems] = useState<IData[]>([]);

  useEffect(() => {
    // Load initial data
    fetchData().then((data) => setItems(data));

    // Listen for real-time updates
    socket.on("newData", (newItem: IData) => {
      setItems((prev) => [...prev, newItem]);
    });

    return () => {
      socket.off("newData");
    };
  }, []);

  const chartData = {
    labels: items.map((i) => new Date(i.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: "Real-Time Values",
        data: items.map((i) => i.value),
        borderColor: "blue",
        borderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  };

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Real-Time Data Visualization</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
export {};
