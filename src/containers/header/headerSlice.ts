import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PublishedBefore } from "../../enums/published-before";
import { SearchResultType } from "../../enums/search-result-type";

export interface HeaderState {
  searchText: string;
  type: SearchResultType;
  publishedBefore: PublishedBefore;
  isLoading: boolean;
}

const initialState: HeaderState = {
  searchText: "",
  type: SearchResultType.All,
  publishedBefore: PublishedBefore.AnyTime,
  isLoading: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setType: (state, action: PayloadAction<SearchResultType>) => {
      state.type = action.payload;
    },
    setPublishedBefore: (state, action: PayloadAction<PublishedBefore>) => {
      state.publishedBefore = action.payload;
    },
    toggleIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchText, setType, setPublishedBefore, toggleIsLoading } =
  headerSlice.actions;

export default headerSlice.reducer;
