import type { Props } from "../../types/common";
import styles from "./Home.module.css";

export default function Home({ onRandom, onCook, onTakeaway, onDelivery }: Props) {
  return (
    <div className={styles.page}>

      <div className={styles.container}>
        <h1 className={styles.title}>Hôm nay ăn gì?</h1>

        <div className={styles.list}>
          <button onClick={onRandom}>Random ngay!</button>
          <button onClick={onCook}>Nấu</button>
          <button onClick={onTakeaway}>Mua mang về</button>
          <button onClick={onDelivery}>Đặt Grab/Shopee food</button>
        </div>
      </div>
    </div>
  );
}
