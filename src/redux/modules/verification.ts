import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { get } from "superagent";

interface IUser {
  name: string;
  email: string;
  password: string;
  token: string;
}
export const fetchVerified = createAsyncThunk(
  "authorized/fetchVerified",
  async () => {
    const response: any = await get("http://localhost:3000/authorized");
    return response.body;
  }
);
export const addVerified = createAsyncThunk(
  "addAuth/addVerified",
  async (data : IUser) => {
    const {name, email, password, token} = data
    const response = await axios.post("http://localhost:3000/authorized", {name, email, password, token});
    return response.data;
  }
);
export interface CounterState {
  user: IUser | null;
  authorized: any[];
  loading: boolean;
  isLoggedIn: boolean
}

const initialState: CounterState = {
  user: null,
  authorized: [],
  loading: false,
  isLoggedIn: false
};
export const verificationSlice = createSlice({
  name: "authorized",
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVerified.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchVerified.fulfilled, (state, action) => {
      state.loading = false;
      state.authorized = action.payload;
    });
    builder.addCase(fetchVerified.rejected, (state, action) => {
      state.loading = false;
      console.log("error 999!!!");
    });
  },
});
export const { setIsLoggedIn } = verificationSlice.actions;
export default verificationSlice.reducer;
