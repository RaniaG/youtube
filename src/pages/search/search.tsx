import { List } from "../../components/list/list";
import { ChannelCard } from "../../containers/channel-card/channel-card";
import { ChannelModel } from "../../containers/channel-card/channel.model";
import { PlaylistCard } from "../../containers/playlist-card/playlist-card";
import { PlaylistModel } from "../../containers/playlist-card/playlist.model";
import { VideoCard } from "../../containers/video-card/video-card";
import { VideoModel } from "../../containers/video-card/video.model";
import { ResultKind } from "../../enums/result-kind";
import { ChannelStatistics } from "../../models/channel-statistics";
import { PlaylistDetails } from "../../models/playlist-details";
import { SearchResultItem } from "../../models/search-result-item";
import { VideoDetails } from "../../models/video-details";
import { useAppSelector } from "../../store";

export function Search() {
  const list = useAppSelector((state) => state.search.items);
  return <List listData={list} render={renderListItem}></List>;
}

function renderListItem(item: SearchResultItem) {
  switch (item.id?.kind) {
    case ResultKind.channel:
      return createChannel(item);
    case ResultKind.playlist:
      return createPlaylist(item);
    case ResultKind.video:
      return createVideo(item);
  }
}

function createChannel(item: SearchResultItem) {
  const data: ChannelModel = {
    ...item?.snippet,
    subscribersCount: (item.extra as ChannelStatistics).subscriberCount,
    id: item?.id?.channelId,
  };
  return <ChannelCard data={data} />;
}

function createPlaylist(item: SearchResultItem) {
  const data: PlaylistModel = {
    ...item?.snippet,
    numberOfVideos: (item.extra as PlaylistDetails).itemCount,
    id: item?.id?.playlistId,
  };
  return <PlaylistCard data={data} />;
}

function createVideo(item: SearchResultItem) {
  const data: VideoModel = {
    ...item?.snippet,
    duration: (item.extra as VideoDetails).duration,
    viewsCount: (item.extra as VideoDetails).statistics.viewCount,
    id: item?.id?.playlistId,
  };
  return <VideoCard data={data} />;
}
