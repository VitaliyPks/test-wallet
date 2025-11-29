import ArrowIcon from "../../assets/icons/arrow-right.svg?react";

const PositionPanel = () => {
  return (
    <div className="p-2 rounded-t-[16px] border-t border-gray-800">
      <div className="flex items-center justify-between mb-2">
        <span className="pl-[5px] text-gray-500 text-xs">Position details</span>
        <div className="flex items-center gap-2">
          <span className="bg-[#222222] px-4 py-[5.5px] rounded-[8px] text-white text-xs">
            Margin $10
          </span>
          <span className="bg-[#222222] px-4 py-[5.5px] rounded-[8px] text-white text-xs">
            Leverage 10x
          </span>
          <span className="p-2">
            <ArrowIcon />
          </span>
        </div>
      </div>

      <div className="flex gap-2 px-1 pt-2">
        <button className="flex-1 py-2 bg-green-700/10 text-sm text-[#97FCA6] rounded-[10px]">
          Long
        </button>
        <button className="flex-1 py-2 bg-red-700/10 text-sm text-[#FF583A] rounded-[10px]">
          Short
        </button>
      </div>
    </div>
  );
};

export default PositionPanel;
