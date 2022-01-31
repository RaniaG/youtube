import { ResultKind } from "../enums/result-kind";
import { ChannelStatistics } from "./channel-statistics";
import { PlaylistDetails } from "./playlist-details";
import { Thumbnails } from "./thumbnails";
import { VideoDetails } from "./video-details";

export interface SearchResultItem {
  id: {
    kind: ResultKind;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  };
  snippet: SearchResultItemData;
  extra: ChannelStatistics | PlaylistDetails | VideoDetails;
}

export interface SearchResultItemData {
  publishedAt: string;
  channelId: string; //publisher
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
}
