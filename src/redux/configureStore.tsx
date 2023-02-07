import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { users, newUsers, auth, authorized } from "./modules";

export const store = configureStore({
  reducer: {
    users,
    newUsers,
    auth,
    authorized
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
