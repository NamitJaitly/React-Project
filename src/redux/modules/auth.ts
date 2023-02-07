import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  email: string;
  password: string
}

export interface CounterState {
  user: IUser | null,
  loading: boolean,
}

const initialState: CounterState = {
  user: null,
  loading: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  }
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
