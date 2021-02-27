import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

const theatre = () => {
  return (
    <div>
      <Head>
        <title>Theatre</title>
        <link rel="icon" href="/favicon.png" />
        <meta type="keywords" content="Barbara Kijowska, Labirynt" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Theatre</h1>
      </main>
    </div>
  );
};

export default theatre;
