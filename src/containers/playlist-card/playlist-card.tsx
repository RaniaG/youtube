import { Link } from "react-router-dom";
import { Card } from "../../components/card/card";
import { urls } from "../../constants/urls";
import { PlaylistModel } from "./playlist.model";

export function PlaylistCard() {
  const data: PlaylistModel = {
    title: "new ",
    publishedAt: new Date().toString(),
    channelId: "channelId",
    channelTitle: "channel",
    description: `abc description`,
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/s7ENe1plrbQ/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/s7ENe1plrbQ/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/s7ENe1plrbQ/hqdefault.jpg",
        width: 480,
        height: 360,
      },
    },
    numberOfVideos: 20,
    id: "20ab",
  };
  const card = {
    ...data,
    subTitleArray: [
      <Link to={`${urls.channel_url}/${data.channelId}`}>
        {data.channelTitle}
      </Link>,
    ],
    extraContent: <Link to="">VIEW FULL PLAYLIST</Link>,
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
      <Card card={card}></Card>
    </>
  );
}
