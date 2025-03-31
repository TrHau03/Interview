import { createSlice } from "@reduxjs/toolkit";

interface ProdCommandState {
  filter: string[];
}

const initialState: ProdCommandState = {
  filter: [],
};

const prodCommandSlice = createSlice({
  name: "prodCommand",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      return {
        ...state,
        filter:
          state.filter.findIndex((item) => item === action.payload) === -1
            ? [...state.filter, action.payload]
            : state.filter.filter((item) => item !== action.payload),
      };
    },
  },
});

export const prodCommandActions = prodCommandSlice.actions;

export default prodCommandSlice.reducer;
