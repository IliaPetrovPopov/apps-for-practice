import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface User {
  id: string;
  name: string;
}

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(USERS_URL);
  const data = await response.json();

  return data;
});

const initialState: User[] = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      
      return action.payload;
    })
  },
});

export const selectAllUsers = (state: RootState) => state.users;

export default userSlice.reducer;
