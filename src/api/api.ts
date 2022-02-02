import axios from "axios";
import { from, map, Observable, of } from "rxjs";
import { urls } from "../constants";
import { ChannelStatistics } from "../models/channel-statistics";
import { PlaylistDetails } from "../models/playlist-details";
import { SearchResult } from "../models/search-result";
import { VideoDetails } from "../models/video-details";

export const API_KEY = "AIzaSyCY4-uRYPHnu27w-ZmSEYXp1oP4GncUIgg";

export function getChannelStatistics(
  channelId: string
): Observable<ChannelStatistics> {
  return from(
    axios.get(`${urls.channel}?part=statistics&id=${channelId}&key=${API_KEY}`)
  ).pipe(map((res) => res.data?.items[0].statistics));
}

export function getVideoDetails(videoId: string): Observable<VideoDetails> {
  return from(
    axios.get(
      `${urls.video}?part=statistics,contentDetails&id=${videoId}&key=${API_KEY}`
    )
  ).pipe(
    map((res) => ({
      statistics: res.data?.items[0]?.statistics,
      duration: res.data?.items[0]?.contentDetails?.duration,
    }))
  );
}

export function getPlaylistDetails(
  playlistId: string
): Observable<PlaylistDetails> {
  return from(
    axios.get(
      `${urls.playlist}?part=contentDetails&id=${playlistId}&key=${API_KEY}`
    )
  ).pipe(
    map((res) => ({
      itemCount: res.data?.items[0]?.contentDetails?.itemCount,
    }))
  );
}

export function getSearchResults(
  queryString: string
): Observable<SearchResult> {
  if (!queryString) return of();
  return from(
    axios.get(
      `${urls.search}?part=snippet,id&${queryString}&maxResults=25&key=${API_KEY}`
    )
  ).pipe(map((res) => res.data));
}
