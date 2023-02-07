import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "superagent";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (data, thunkAPI) => {
    const response: any = await get("http://localhost:3000/users");
    return response.body;
  }
);
export const addUsers = createAsyncThunk(
  "newUsers/addUsers",
  async (data: object) => {
    const response = await axios.post("http://localhost:3000/users", data);
    return response.data;
  }
);
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (data: any) => {
    const response = await axios.put(
      `http://localhost:3000/users/${data.id}`,
      data.values
    );
    console.log(response.data, "user daata");
    return response.data;
  }
);
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: any) => {
    const response = await axios.delete(
      `http://localhost:3000/users/${id}`,
      id
    );
  }
);
export interface CounterState {
  users: any[];
  newUsers: any;
  hobbies: [] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  users: [],
  newUsers: {},
  hobbies: null,
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setHobbies: (state, action) => {
      state.hobbies = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      console.log("error");
      state.error = "something went Wrong!";
    });
    builder.addCase(addUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.newUsers = action.payload;
    });
    builder.addCase(addUsers.rejected, (state, action) => {
      state.loading = false;
      console.log("error");
      state.error = "something went Wrong!";
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      console.log("error");
      state.error = "something went Wrong!";
    });
  },
});

// Action creators are generated for each case reducer function
export const {setHobbies} = usersSlice.actions; 
export default usersSlice.reducer;
