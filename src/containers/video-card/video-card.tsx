import { Card } from "../../components/card/card";
import { VideoModel } from "./video.model";
import { formatter, urls } from "../../constants";
import moment from "moment";

export function VideoCard({ data }: { data: VideoModel }) {
  const card = {
    ...data,
    subTitleArray: [
      <a
        href={`${urls.channel_redirect_url}/${data.channelId}`}
        target="_blank"
      >
        {data.channelTitle}
      </a>,
      `${formatter.format(data.viewsCount)} views`,
      moment(data.publishedAt).fromNow(),
    ],
  };
  return (
    <>
      <Card card={card} url={urls.video_redirect_url}></Card>
    </>
  );
}
