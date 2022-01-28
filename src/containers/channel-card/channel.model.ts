import { SearchResultItemData } from "../../models/search-result-item";

export interface ChannelModel extends SearchResultItemData {
  subscribersCount: number;
  id: string;
}
