import ConnectWallet from "./ConnectWallet/ConnectWallet";
import Currency from "./Currency/Currency";

const WalletHeader = () => {
  return (
    <div className="flex justify-between gap-[12px] p-3">
      <Currency />
      <ConnectWallet />
    </div>
  );
};
export default WalletHeader;
