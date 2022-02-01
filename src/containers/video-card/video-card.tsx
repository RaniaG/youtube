// import styles from "./video-card.module.css";
import { Card } from "../../components/card/card";
import { VideoModel } from "./video.model";
import { Link } from "react-router-dom";
import { formatter, urls } from "../../constants";
import moment from "moment";

export function VideoCard({ data }: { data: VideoModel }) {
  const card = {
    ...data,
    subTitleArray: [
      <Link to={`${urls.channel_url}/${data.channelId}`}>
        {data.channelTitle}
      </Link>,
      `${formatter.format(data.viewsCount)} views`,
      moment(data.publishedAt).fromNow(),
    ],
  };
  return (
    <>
      <Card card={card}></Card>
    </>
  );
}
