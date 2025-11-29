import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWalletBalance = createAsyncThunk(
  "wallet/fetchBalance",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return {
        balance: 15000.42,
        rewards: 345290,
        connected: true,
      };
    } catch (error) {
      return rejectWithValue("Failed to load wallet data");
    }
  }
);
