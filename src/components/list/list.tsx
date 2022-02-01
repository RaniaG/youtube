import styles from "./list.module.css";

export function List(props: { listData: any[]; render: any }) {
  return (
    <div className={styles.list}>
      {props.listData.map((e) => (
        <div className={styles.listItem}>{props.render(e)}</div>
      ))}
    </div>
  );
}