import { configureStore } from "@reduxjs/toolkit";
import { staffApi } from "./staff/staff.api";
import filtersReducer from "../store/features/filterSlice"

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [staffApi.reducerPath]: staffApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(staffApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch