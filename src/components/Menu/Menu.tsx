import { Link, useLocation } from "react-router-dom";

import useAppSelector from "../../hooks/useAppSelector";

import PositionPanel from "../PosotionPanel/PositionPanel";

import { menuItems } from "./Menu.const";

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { isWalletConnected, rewards } = useAppSelector(
    (state) => state.wallet
  );
  const location = useLocation();
  const isTradePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen relative w-full pb-[80px]">
      <div className="h-full">{children}</div>

      <div className="flex flex-col absolute bottom-[0px] w-full">
        {isTradePage && <PositionPanel />}

        <div className="flex justify-around py-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isRewards = item.label === "Rewards";

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                } ${isRewards ? "relative" : ""}`}
              >
                <div
                  className={`mb-1 ${
                    isActive
                      ? "bg-gradient-to-b from-[#2e3225] to-[#332f1c] p-[8px] rounded-[12px] flex items-center justify-center"
                      : "p-[8px]"
                  }`}
                >
                  <span>{item.icon}</span>
                </div>
                <span
                  className={`text-xs ${
                    isActive ? "text-white" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
                {isRewards && isWalletConnected && (
                  <div className="absolute top-[-12px] left-[16px] bg-[#ECBD7533] px-[6px] py-[2px] rounded-[12px] text-[10px] text-[#ECBD75]">
                    {Math.floor(rewards / 1000).toLocaleString()}k
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
