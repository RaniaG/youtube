import { useAppSelector } from "../../store";
import loadingGif from "../../assets/spinning-loading.gif";
import styles from "./loading.module.css";

export function Loading() {
  const isLoading = useAppSelector((state) => state.header.isLoading);
  return isLoading ? (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}>
        <img src={loadingGif} alt="" />
        Loading
      </div>
    </div>
  ) : null;
}
