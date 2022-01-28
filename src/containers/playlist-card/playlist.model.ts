import { SearchResultItemData } from "../../models/search-result-item";

export interface PlaylistModel extends SearchResultItemData {
  id: string;
  numberOfVideos: number;
}
