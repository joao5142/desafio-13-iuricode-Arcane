import Image from "next/image";
import styles from "./Main.module.css";

export default function Main(props) {
  return (
    <main className={styles.main}>
      <section className={styles.section_main}>
        <div className={styles.container_image}>
          <Image priority layout="fill" src={"/assets/img/arcane.svg"} />
        </div>
        <button
          onClick={(e) => {
            if (props.onClickTrailer) {
              props.onClickTrailer();
            }
          }}
          className={`btn ${styles.btn_main}`}
        >
          ASSISTA AO TRAILER
        </button>
      </section>
    </main>
  );
}
