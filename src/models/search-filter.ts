export interface SearchFilter {
  text: string;
  publishedAfter: Date;
  type: "channel" | "playlist" | "video";
}
