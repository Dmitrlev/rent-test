import {configureStore} from "@reduxjs/toolkit";
import selectTest from "./slices/selectTest";

const rootReducers = {
  selectTest: selectTest,
};

const store = configureStore({
  reducer: rootReducers
});

window.store = store
export default store;
