import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 ZakiDev. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Zaki FB" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Zaki Insta" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Zaki TW" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Zaki YT" />
      </div>
    </div>
  );
}
export default Footer