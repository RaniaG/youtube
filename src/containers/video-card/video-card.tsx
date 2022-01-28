// import styles from "./video-card.module.css";
import { Card } from "../../components/card/card";
import { VideoModel } from "./video.model";
import { Link } from "react-router-dom";
import { urls } from "../../constants/urls";
import moment from "moment";

export function VideoCard() {
  //get views
  const data: VideoModel = {
    title: "new ",
    publishedAt: new Date().toString(),
    channelId: "channelId",
    channelTitle: "channel",
    description: "abc description",
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
    viewsCount: 20,
    id: "20ab",
  };
  const card = {
    ...data,
    subTitleArray: [
      <Link to={`${urls.channel_url}/${data.channelId}`}>
        {data.channelTitle}
      </Link>,
      `${data.viewsCount} views`,
      moment(data.publishedAt).fromNow(),
    ],
  };
  return (
    <>
      <Card card={card}></Card>
    </>
  );
}
