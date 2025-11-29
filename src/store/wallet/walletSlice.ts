import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IWalletState } from "../../types/wallet";
import { fetchWalletBalance } from "./walletActions";

const initialState: IWalletState = {
  isWalletConnected: false,
  balance: 0,
  selectedTimeframe: "1M",
  isLoading: false,
  error: null,
  rewards: 0,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    toggleWalletConnection: (state) => {
      state.isWalletConnected = !state.isWalletConnected;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setSelectedTimeframe: (
      state,
      action: PayloadAction<IWalletState["selectedTimeframe"]>
    ) => {
      state.selectedTimeframe = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletBalance.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWalletBalance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.balance = action.payload.balance;
        state.isWalletConnected = action.payload.connected;
        state.rewards = action.payload.rewards;
      })
      .addCase(fetchWalletBalance.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const walletActions = walletSlice.actions;

export default walletSlice.reducer;
