import { useRef, useState } from "react";

import type { IChartApi } from "lightweight-charts";
import type { TTimeframe } from "../../types/chart";

import HeartIcon from "../../assets/icons/heart.svg?react";
import GearIcon from "../../assets/icons/gear.svg?react";

import useChart from "./hooks/useChart";

const Chart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const areaSeriesRef = useRef<any>(null);
  const intervalRef = useRef<number>(null);
  const [timeframe, setTimeframe] = useState<TTimeframe>("1M");

  const { currentPrice, priceChangePercent } = useChart({
    chartContainerRef,
    chartRef,
    areaSeriesRef,
    intervalRef,
    timeframe,
  });

  return (
    <div className="bg-[#1E1E1E] p-3 rounded-lg">
      <div className="flex items-center justify-between py-[4px]">
        <div className="text-white text-3xl font-regular">
          {currentPrice.toFixed(2)}{" "}
          <span
            className={`text-lg ${
              priceChangePercent >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {priceChangePercent >= 0 ? "+" : ""}
            {priceChangePercent.toFixed(1)}%
          </span>
        </div>
        <div className="flex gap-1">
          <button className="px-[10px] py-[8.4px] bg-[#222222] rounded-[8px]">
            <HeartIcon />
          </button>
          <button className="px-[10px] py-[8.4px] bg-[#222222] rounded-[8px]">
            <GearIcon />
          </button>
        </div>
      </div>

      <div ref={chartContainerRef} className="w-full mt-[8px]" />

      <div className="flex gap-2 mt-4">
        {(["15S", "1M", "1H", "1D"] as const).map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-3 py-[5.5px] rounded grow text-xs ${
              tf === timeframe
                ? "bg-[rgba(244,164,44,0.05)] border border-[#623824] text-[#F4A42C] font-medium"
                : "bg-[#222222] text-white"
            }`}
          >
            {tf}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chart;
