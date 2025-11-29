import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";
import BitcoinIcon from "../../../assets/icons/btc.svg?react";

const Currency = () => {
  return (
    <div className="flex items-center gap-2 px-2 py-[6px] bg-[#222222] rounded-[12px] cursor-pointer hover:bg-gray-700 transition-colors">
      <BitcoinIcon />
      <div className="text-white text-xs font-medium">
        {"BTCDEGEN/USDC"} <span className="text-gray-400 text-[]">{"100x"}</span>
      </div>
      <ArrowIcon />
    </div>
  );
};

export default Currency;
