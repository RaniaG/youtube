import { Thumbnails } from "./thumbnails";

export interface SearchResultItem {
  id: {
    kind: "youtube#channel" | "youtube#playlist" | "youtube#video";
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  };
}

export interface SearchResultItemData {
  publishedAt: string;
  channelId: string; //publisher
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
}
