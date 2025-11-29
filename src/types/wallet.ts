export interface IWalletState {
  isWalletConnected: boolean;
  balance: number;
  selectedTimeframe: "15S" | "1M" | "1H" | "1D";
  isLoading: boolean;
  error: string | null;
  rewards: number;
}
