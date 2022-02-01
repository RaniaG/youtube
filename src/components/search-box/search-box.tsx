import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./search-box.module.css";

export function SearchBox({
  value,
  onSearch,
  onChange,
}: {
  value: string;
  onSearch: () => void;
  onChange: (value: string) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  function onSearchClick() {
    if (isMobile && !isVisible) setIsVisible(true);
    else if ((isMobile && isVisible) || !isMobile) {
      setIsVisible(false);
      onSearch();
    }
  }

  function onKeyPress({ key }: { key: string }) {
    if (key === "Enter") onSearch();
  }

  return (
    <div className={styles.searchContainer}>
      {isMobile && isVisible && (
        <button
          className={`${styles.button}`}
          onClick={() => setIsVisible(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z"></path>
          </svg>
        </button>
      )}
      {((isMobile && isVisible) || !isMobile) && (
        <input
          type="text"
          placeholder="Search"
          className={`${styles.searchBox}`}
          value={value}
          onKeyPress={(e) => onKeyPress(e)}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      <button className={styles.button} onClick={() => onSearchClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
        </svg>
      </button>
    </div>
  );
}
