import { Thumbnail } from "../../models/thumbnails";
import { CardModel } from "./card.model";
import styles from "./card.module.css";

export function Card({ card }: { card: CardModel }) {
  let srcSet = "";
  if (card?.thumbnails) {
    srcSet =
      addSrcSetImage(card?.thumbnails.default) +
      "," +
      addSrcSetImage(card?.thumbnails.medium) +
      "," +
      addSrcSetImage(card?.thumbnails.high);
  }
  let thumbnailClass = styles.thumbnail;
  thumbnailClass += card.rounded ? ` ${styles.round}` : "";
  return (
    <div className={styles.card}>
      <div className={thumbnailClass}>
        <img
          src={card?.thumbnails?.default?.url}
          alt={card?.title}
          srcSet={srcSet}
        />
        {card.overlay && <div className={styles.overlay}>{card.overlay}</div>}
      </div>
      <div className={`${styles.content}`}>
        <h3 className="m-0">{card?.title}</h3>
        <div className={styles["sub-title"]}>
          {card?.subTitleArray.map((e) => (
            <span className={styles["sub-title-item"]}>{e}</span>
          ))}
        </div>
        <div className={styles.description}>
          {card?.description}
          {card?.extraContent && (
            <div className="m-t-10">{card?.extraContent}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function addSrcSetImage(image: Thumbnail | undefined) {
  return image ? `${image.url} ${image.width}w ` : "";
}
