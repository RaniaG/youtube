import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filter, from, map, mergeMap, Observable, of, toArray } from "rxjs";
import {
  getChannelStatistics,
  getPlaylistDetails,
  getSearchResults,
  getVideoDetails,
} from "../../api/api";
import { ResultKind } from "../../enums/result-kind";
import { SearchResultType } from "../../enums/search-result-type";
import { PageInfo } from "../../models/search-result";
import { SearchResultItem } from "../../models/search-result-item";
import { RootState } from "../../store";
import {
  HeaderState,
  toggleIsLoading,
} from "../../containers/header/headerSlice";
import { Dispatch } from "react";
import {
  publishDateMapping,
  PublishedBefore,
} from "../../enums/published-before";
import moment from "moment";
import { resetError, setError } from "../../errorSlice";

interface MainSearchResult {
  pageInfo: PageInfo | null;
  nextPageToken: string | null;
  prevPageToken: string | null;
}

interface SearchState {
  mainSearchResult: MainSearchResult | null;
  items: SearchResultItem[];
}

const initialState: SearchState = {
  mainSearchResult: null,
  items: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<SearchResultItem[]>) => {
      state.items = action.payload;
    },
    setMain: (state, action: PayloadAction<MainSearchResult>) => {
      state.mainSearchResult = action.payload;
    },
    resetMain: (state) => {
      state.mainSearchResult = {
        pageInfo: null,
        nextPageToken: null,
        prevPageToken: null,
      };
    },
  },
});

export const searchThunk = (
  dispatch: Dispatch<any>,
  getState: () => RootState
) => {
  const state: RootState = getState();
  dispatch(toggleIsLoading(true));
  dispatch(setItems([]));
  dispatch(resetMain());
  dispatch(resetError());

  getSearchResults(buildQueryString(state.header))
    .pipe(
      mergeMap((result) =>
        from(result.items).pipe(
          mergeMap((item) => {
            switch (item.id?.kind) {
              case ResultKind.channel:
                return getExtraDetails(
                  item.id?.channelId,
                  item,
                  getChannelStatistics
                );
              case ResultKind.playlist:
                return getExtraDetails(
                  item.id?.playlistId,
                  item,
                  getPlaylistDetails
                );
              case ResultKind.video:
                return getExtraDetails(item.id?.videoId, item, getVideoDetails);
            }
          }),
          filter((item) => item && true),
          toArray(),
          map((items) => ({ ...result, items }))
        )
      )
    )
    .subscribe(
      (result) => {
        const { pageInfo, nextPageToken, prevPageToken } = result;
        dispatch(
          setMain({
            pageInfo,
            nextPageToken,
            prevPageToken,
          })
        );
        dispatch(setItems(result.items));
        dispatch(toggleIsLoading(false));
      },
      (error) => {
        dispatch(toggleIsLoading(false));
        dispatch(
          setError("Failed to retrieve search results. try again later")
        );
        console.log(error);
      }
    );
};

function getExtraDetails(
  id: string | undefined,
  item: SearchResultItem,
  detailsGetter: (id: string) => Observable<any>
): Observable<SearchResultItem> {
  return id
    ? detailsGetter(id).pipe(map((extra) => ({ ...item, extra, key: id })))
    : of();
}

function buildQueryString({
  searchText,
  type,
  publishedBefore,
}: HeaderState): string {
  if (!searchText) return "";

  let query = `q=${searchText.split(" ").join("|")}`;
  if (type && type & (SearchResultType.Channel | SearchResultType.Playlist)) {
    query += `&type=${SearchResultType[type]}`;
  }
  if (
    publishedBefore &&
    publishedBefore.valueOf() !== PublishedBefore.AnyTime.valueOf()
  ) {
    query += `&publishedAfter=${moment().toISOString()}&publishedBefore=${publishDateMapping[
      publishedBefore
    ].toISOString()}`;
  }
  return query;
}

export const { setItems, setMain, resetMain } = searchSlice.actions;

export default searchSlice.reducer;
