import { Card } from "../../components/card/card";
import { ChannelModel } from "./channel.model";

export function ChannelCard({ data }: { data: ChannelModel }) {
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
