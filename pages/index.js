import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <Header />
        <Main onClickTrailer={() => openTrailer()} />
        <Footer onClickTrailer={() => openTrailer()} />
      </div>
    </>
  );
  function openTrailer() {
    window.open("https://www.youtube.com/watch?v=RAKWlGS-0UY", "_blank");
  }
}
