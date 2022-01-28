import { SearchResultItemData } from "../../models/search-result-item";

export interface VideoModel extends SearchResultItemData {
  viewsCount: number;
  id: string;
}
