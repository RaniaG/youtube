import { Card } from "../../components/card/card";
import { formatter, urls } from "../../constants";
import { ChannelModel } from "./channel.model";

export function ChannelCard({ data }: { data: ChannelModel }) {
  const card = {
    ...data,
    subTitleArray: [`${formatter.format(data.subscribersCount)} subscribers`],
    rounded: true,
  };
  return (
    <>
      <Card card={card} url={urls.channel_redirect_url}></Card>
    </>
  );
}
