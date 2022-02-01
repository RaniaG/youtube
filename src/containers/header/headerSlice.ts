import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PublishedBefore } from "../../enums/published-before";
import { SearchResultType } from "../../enums/search-result-type";

export interface HeaderState {
  searchText: string;
  type: SearchResultType;
  publishedBefore: PublishedBefore;
}

const initialState: HeaderState = {
  searchText: "",
  type: SearchResultType.All,
  publishedBefore: PublishedBefore.AnyTime,
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
  },
});

export const { setSearchText, setType, setPublishedBefore } =
  headerSlice.actions;

export default headerSlice.reducer;
