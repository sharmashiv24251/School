import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { setFormData, clearFormData } from "./slices/formSlice";
const store = configureStore({
  reducer: rootReducer,
});

export default store;
export { setFormData, clearFormData };
