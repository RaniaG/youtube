import { Card } from "../../components/card/card";
import { urls } from "../../constants";
import { PlaylistModel } from "./playlist.model";

export function PlaylistCard({ data }: { data: PlaylistModel }) {
  const card = {
    ...data,
    subTitleArray: [
      <a
        href={`${urls.channel_redirect_url}/${data.channelId}`}
        target="_blank"
      >
        {data.channelTitle}
      </a>,
    ],
    extraContent: (
      <a href={`${urls.playlist_redirect_url}/${data.id}`} target="_blank">
        VIEW FULL PLAYLIST
      </a>
    ),
    overlay: (
      <span>
        {data.numberOfVideos}
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z"></path>
          </g>
        </svg>
      </span>
    ),
  };
  return (
    <>
      <Card card={card} url={urls.playlist_redirect_url}></Card>
    </>
  );
}
