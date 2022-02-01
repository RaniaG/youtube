import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./containers/header/headerSlice";
import searchReducer from "./pages/search/searchSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
