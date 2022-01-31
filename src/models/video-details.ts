export interface VideoStatistics {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}

export interface VideoDetails {
  statistics: VideoStatistics;
  duration: string;
}
