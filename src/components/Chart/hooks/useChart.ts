import { useCallback, useEffect, useState } from "react";
import { createChart, type IChartApi } from "lightweight-charts";

import type { TTimeframe } from "../../../types/chart";

import { TIMEFRAME_CONFIG } from "../Chart.const";
import { generateMockData } from "../Chart.helpers";

interface IUseChartProps {
  chartRef: React.RefObject<IChartApi | null>;
  timeframe: TTimeframe;
  intervalRef: React.RefObject<number | null>;
  areaSeriesRef: React.RefObject<any>;
  chartContainerRef: React.RefObject<HTMLDivElement | null>;
}

const useChart = ({
  chartRef,
  timeframe,
  intervalRef,
  areaSeriesRef,
  chartContainerRef,
}: IUseChartProps) => {
  const [priceChangePercent, setPriceChangePercent] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  const updateChartData = useCallback(() => {
    const areaSeries: any = areaSeriesRef.current;
    if (!areaSeries) return;

    const config = TIMEFRAME_CONFIG[timeframe];
    const isDaily = timeframe === "1D";
    const newData = generateMockData(
      config.intervalMs,
      config.dataPoints,
      isDaily
    );
    areaSeries.setData(newData);

    const firstPrice = newData[0].value;
    const lastPrice = newData[newData.length - 1].value;
    setCurrentPrice(lastPrice);
    setPriceChangePercent(((lastPrice - firstPrice) / firstPrice) * 100);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const lastValue = newData[newData.length - 1].value;
      const newValue = lastValue * (1 + (Math.random() - 0.5) * 0.005);
      const newPoint = { time: now, value: newValue };

      areaSeries.update(newPoint);
      newData.push(newPoint);

      setCurrentPrice(newValue);
      setPriceChangePercent(((newValue - firstPrice) / firstPrice) * 100);
    }, 2000);
  }, [timeframe]);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "#1E1E1E" },
        textColor: "#ffffff8c",
      },
      grid: {
        vertLines: { color: "transparent" },
        horzLines: { color: "transparent" },
      },
      rightPriceScale: {
        ticksVisible: true,
        borderColor: "#222222",
      },
      timeScale: {
        ticksVisible: true,
        borderColor: "#222222",
      },
      crosshair: {
        vertLine: {
          visible: true,
          labelVisible: true,
          labelBackgroundColor: "#1E1E1E",
        },
        horzLine: {
          visible: true,
          labelVisible: true,
          labelBackgroundColor: "#1E1E1E",
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });

    const areaSeries = chart.addAreaSeries({
      lineColor: "#ECBD75",
      topColor: "#ecbc757e",
      bottomColor: "transparent",
      lineWidth: 2,
    });

    areaSeries.applyOptions({
      priceLineVisible: true,
      lastValueVisible: true,
      priceLineColor: "#97FCA6",
      priceLineWidth: 1,
    });

    chartRef.current = chart;
    areaSeriesRef.current = areaSeries;

    updateChartData();

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  useEffect(() => {
    updateChartData();
  }, [timeframe, updateChartData]);

  return { currentPrice, priceChangePercent };
};
export default useChart;
