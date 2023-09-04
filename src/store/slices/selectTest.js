import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  currentBannerState: 'CarRental',
};

const selectTest = createSlice({
  name: 'selectTest',
  initialState,
  reducers: {
    setCurrentBannerState (state, action) {
      const {currentBannerState} = action.payload;
      state.currentBannerState = currentBannerState;
    }
  }
});

export const {
  setCurrentBannerState
} = selectTest.actions;

export default selectTest.reducer;




