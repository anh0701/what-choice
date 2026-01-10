import Random from "../Random/Random";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      <div className={styles.container}>
        <Random></Random>
      </div>
    </div>
  );
}
