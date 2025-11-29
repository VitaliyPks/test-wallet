import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { walletActions } from "../store/wallet/walletSlice";

const allAction = {
  ...walletActions,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allAction, dispatch);
};

export default useActions;
