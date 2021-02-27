import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tomasz rocks next js</title>
        <link rel="icon" href="/favicon.png" />
        <meta type="keywords" content="Barbara Kijowska, Labirynt" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tomasz rocks <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
