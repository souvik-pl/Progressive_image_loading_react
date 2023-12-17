import { useEffect, useState } from "react";
import styles from "./App.module.css";
import babyHighResolution from "./assets/baby-high-res.jpg";
import babyLowResolution from "./assets/baby-low-res.jpg";

function App() {
  const [imgSrc, setImgSrc] = useState(babyLowResolution);

  useEffect(() => {
    setImgSrc(babyHighResolution);
  }, []);

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={imgSrc}
        alt="Mother helping a baby to walk"
      />
    </div>
  )
}

export default App;