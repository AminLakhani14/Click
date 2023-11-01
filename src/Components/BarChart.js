import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../Css/dashboard.css";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = React.memo(({ options, data }) => {
  ///////////////////////////////

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Bar
        height={
          windowWidth <= 500
            ? 410
            : windowWidth >= 768 && windowWidth <= 991
            ? 310
            : windowWidth >= 992 && windowWidth <= 1199
            ? 300
            : windowWidth >= 1200 && windowWidth <= 1399
            ? 380
            : windowWidth >= 1400 && windowWidth < 1600
            ? 380
            : windowWidth >= 1600 && windowWidth < 1800
            ? 400
            : windowWidth >= 1800
            ? 600
            : 350
        }
        width={
          windowWidth <= 500
            ? 390
            : windowWidth >= 768 && windowWidth <= 991
            ? 350
            : windowWidth >= 992 && windowWidth <= 1199
            ? 510
            : windowWidth >= 1200 && windowWidth <= 1399
            ? 600
            : windowWidth >= 1400 && windowWidth < 1600
            ? 600
            : windowWidth >= 1600 && windowWidth < 1800
            ? 700
            : windowWidth >= 1800
            ? 1200
            : 350
        }
        options={options}
        data={data}
      />
    </>
  );
});

export default BarChart;
