import { Card } from "../../components/card/card";
import { ChannelModel } from "./channel.model";

export function ChannelCard() {
  const data: ChannelModel = {
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
    subscribersCount: 20,
    id: "20ab",
  };
  const card = {
    ...data,
    subTitleArray: [`${data.subscribersCount} subscribers`],
    rounded: true,
  };
  return (
    <>
      <Card card={card}></Card>
    </>
  );
}
