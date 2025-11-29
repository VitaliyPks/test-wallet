import useAppSelector, { useAppDispatch } from "../../../hooks/useAppSelector";

import USDCIcon from "../../../assets/icons/usdc.svg?react";
import WalletIcon from "../../../assets/icons/wallet.svg?react";
import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";

import { fetchWalletBalance } from "../../../store/wallet/walletActions";

const ConnectWallet = () => {
  const { balance, isLoading, isWalletConnected } = useAppSelector(
    (state) => state.wallet
  );
  const dispatch = useAppDispatch();

  const handleConnect = () => {
    if (balance === 0 || !isWalletConnected) {
      dispatch(fetchWalletBalance());
    }
  };

  if (balance === 0 && !isLoading) {
    return (
      <button
        onClick={handleConnect}
        className="px-4 py-2 bg-gradient-to-b from-green-800 to-yellow-800 rounded-[12px] text-yellow-300 text-xs font-medium hover:opacity-90 transition-opacity"
      >
        Connect Wallet
      </button>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-4 py-[10px] bg-[#222222] rounded-[12px]">
        <div className="animate-spin w-4 h-4 border-2 border-yellow-400 rounded-[12px]"></div>
        <span className="text-white text-xs">Loading...</span>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-between px-3 py-[9px] pr-[44px] bg-[#222222] rounded-[12px] border border-gray-700 cursor-pointer relative"
      onClick={handleConnect}
    >
      <div className="flex items-center gap-[4px]">
        <USDCIcon />
        <span className="text-white text-xs">{balance.toFixed(2)}</span>
        <ArrowIcon />
      </div>
      <div className="w-8 h-[36px] bg-gradient-to-b from-green-300 to-yellow-400 rounded-r-[12px] flex items-center justify-center absolute right-[-1px]">
        <WalletIcon />
      </div>
    </div>
  );
};

export default ConnectWallet;
