import { useState } from "react";
import { PublishedBefore } from "../../enums/published-before";
import { SearchResultType } from "../../enums/search-result-type";
import styles from "./filters.module.css";
import { useMediaQuery } from "react-responsive";

export function Filters({
  value,
  totalResultCount,
  onChange,
}: {
  value: { type: SearchResultType; publishedBefore: PublishedBefore };
  totalResultCount: number;
  onChange: (value: string, key: string) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.filtersContainer}>
      {!isMobile && (
        <div className={styles.resultsContainer}>
          <div>About {totalResultCount.toLocaleString()} results</div>
          <button
            className={styles.filtersIcon}
            onClick={() => setIsVisible(!isVisible)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z"></path>
            </svg>
            Filters
          </button>
        </div>
      )}
      {(isVisible || isMobile) && (
        <div>
          <select
            value={value?.type}
            onChange={(e) => onChange(e.target.value, "type")}
          >
            <option value={SearchResultType.All}>All</option>
            <option value={SearchResultType.Channel}>Channel</option>
            <option value={SearchResultType.Playlist}>Playlist</option>
          </select>
          <select
            value={value?.publishedBefore}
            onChange={(e) => onChange(e.target.value, "publishedBefore")}
          >
            <option value={PublishedBefore.AnyTime}>Any Time</option>
            <option value={PublishedBefore.Today}>Today</option>
            <option value={PublishedBefore.ThisWeek}>This Week</option>
            <option value={PublishedBefore.ThisMonth}>This Month</option>
            <option value={PublishedBefore.ThisYear}>This Year</option>
          </select>
        </div>
      )}
    </div>
  );
}
