import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { name: "", email: "", message: "" },
  reducers: {
    setFormData(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.message = action.payload.message;
    },
    clearFormData(state) {
      state.name = "";
      state.email = "";
      state.message = "";
    },
  },
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
