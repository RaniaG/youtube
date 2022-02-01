import { Thumbnail } from "../../models/thumbnails";
import { CardModel } from "./card.model";
import styles from "./card.module.css";

export function Card({ card, url }: { card: CardModel; url: string }) {
  let srcSet = "";
  if (card?.thumbnails) {
    srcSet =
      addSrcSetImage(card?.thumbnails.default, 1) +
      "," +
      addSrcSetImage(card?.thumbnails.medium, 2) +
      "," +
      addSrcSetImage(card?.thumbnails.high, 3);
  }
  let thumbnailClass = styles.thumbnail;
  thumbnailClass += card.rounded ? ` ${styles.round}` : "";
  return (
    <div className={styles.card}>
      <div className={thumbnailClass}>
        <a href={`${url}${card.id}`} target="_blank">
          <img
            src={card?.thumbnails?.default?.url}
            alt={card?.title}
            srcSet={srcSet}
          />
          {card.overlay && <div className={styles.overlay}>{card.overlay}</div>}
        </a>
      </div>
      <div className={`${styles.content}`}>
        <h3 className="m-0">
          <a href={`${url}${card.id}`} target="_blank">
            {card?.title}
          </a>
        </h3>
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

function addSrcSetImage(image: Thumbnail | undefined, fallbackWidth: number) {
  const width = image && image?.width ? `${image.width}w` : `${fallbackWidth}x`;
  return image ? `${image.url} ${width} ` : "";
}
