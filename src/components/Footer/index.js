import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_glass}`}></div>

      <div className={`${styles.card_trailer} btn`}>
        <div
          className={styles.card_trailer_image}
          onClick={(e) => {
            if (props.onClickTrailer) {
              props.onClickTrailer();
            }
          }}
        >
          <Image priority src={"/assets/img/video.svg"} layout="fill" />
          <div className={styles.play_icon}>
            <Image
              priority
              src={"/assets/img/play.svg"}
              width="32px"
              height="32px"
            />
          </div>
        </div>
        <div className={styles.card_content}>
          <p className={styles.card_title}>Assista ao novo episódios</p>
          <small>13 de novembro, 2021</small>
        </div>
      </div>
    </footer>
  );
}
