import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
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
        <ArticleList articles={articles} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
