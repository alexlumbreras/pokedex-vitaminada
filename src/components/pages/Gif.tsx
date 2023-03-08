import { useState } from "react";
import styles from "./Gif.module.css";

export const Gif = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const randomNumber = Math.floor(Math.random() * 300);

  const handleLoad = () => {
    console.log("ready!");
    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      {loading && <div className={styles.skeleton} />}
      <img
        className={styles.image}
        src={`https://picsum.photos/id/${randomNumber}/1200/1000`}
        alt="Random Gif"
        onLoad={handleLoad}
      />
    </div>
  );
};
