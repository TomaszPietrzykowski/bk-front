import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.png" />
        <meta type="keywords" content="Barbara Kijowska, Labirynt" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
      </main>
    </div>
  );
};

export default about;
