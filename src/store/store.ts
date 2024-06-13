import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../services/tasks/slice";
import { useDispatch } from "react-redux";
import { usersReducer } from "../services/users/slice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>
export const useAppDispatch: () => AppDispatch = useDispatch;
