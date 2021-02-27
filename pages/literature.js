import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

const literature = () => {
  return (
    <div>
      <Head>
        <title>Literature</title>
        <link rel="icon" href="/favicon.png" />
        <meta type="keywords" content="Barbara Kijowska, Labirynt" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Literature</h1>
      </main>
    </div>
  );
};

export default literature;
