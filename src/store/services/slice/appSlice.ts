import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Store = {
  catalogSelected: "Locations",
  configSelected: "Locations",
  transactions: "Due",
  assets: "All Assets"
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCatalogSelected: (state, action: PayloadAction<CatalogPoints>): void => {
      state.catalogSelected = action.payload;
    },
    setConfigSelected: (state, action: PayloadAction<ConfigPoints>): void => {
      state.configSelected = action.payload;
    },
    setTransactionSelected: (
      state,
      action: PayloadAction<Transactions>
    ): void => {
      state.transactions = action.payload;
    },
    setAssetsSelected: (state, action: PayloadAction<Assets>): void => {
      state.assets = action.payload;
    }
  }
});

export const { setCatalogSelected } = appSlice.actions;
export const { setConfigSelected } = appSlice.actions;
export const { setTransactionSelected } = appSlice.actions;
export const { setAssetsSelected } = appSlice.actions;

export default appSlice.reducer;
