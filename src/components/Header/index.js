import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Image
              priority
              onClick={(e) => openUrl("https://www.riotgames.com/pt-br")}
              src={"/assets/img/riot games.svg"}
              layout="fill"
            />
          </li>

          <li className={styles.container_separation}>
            <div className={styles.separation}></div>
          </li>

          <li>
            <Image
              priority
              onClick={(e) =>
                openUrl(
                  "https://www.leagueoflegends.com/pt-br/news/riot-games/"
                )
              }
              src={"/assets/img/league of legends.svg"}
              layout="fill"
            />
          </li>
        </ul>
      </nav>

      <div className={styles.header_logo}>
        <Image
          priority
          onClick={(e) => openUrl("https://www.netflix.com/br/title/81435684")}
          src={"/assets/img/netflix.svg"}
          layout="fill"
        />
      </div>
    </header>
  );
  function openUrl(url) {
    window.open(url, "_blank");
  }
}
