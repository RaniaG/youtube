import { SearchResultItem } from "./search-result-item";

export interface SearchResult {
  pageInfo: PageInfo;
  nextPageToken: string;
  prevPageToken: string;
  items: SearchResultItem[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
