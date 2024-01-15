import Head from "next/head";
import styles from "../styles/Home.module.css";
export const getServerSideProps = () => {
  return {
    props: {
      serverTime: new Date().toTimeString(),
      serverTimeMs: new Date().getTime(),
    },
  };
};
const dummyData = [
  {
    user: {
      name: "John Doe",
      age: 20,
      address: {
        city: "Jakarta",
        country: "Indonesia",
      },
    },
    items: [
      {
        name: "Phone",
        price: 1000,
      },
      {
        name: "Laptop",
        price: 2000,
      },
    ],
  },
  {
    user: {
      name: "Jane Doe",
      age: 21,
      address: {
        city: "Bandung",
        country: "Indonesia",
      },
    },
    items: [
      {
        name: "Mouse",
        price: 10,
      },
      {
        name: "Keyboard",
        price: 20,
      },
    ],
  },
  {
    user: {
      name: "Budi",
      age: 22,
      address: {
        city: "Jakarta",
        country: "Indonesia",
      },
    },
    items: [
      {
        name: "Monitor",
        price: 100,
      },
      {
        name: "PC",
        price: 200,
      },
    ],
  },
  {
    user: {
      name: "Susi",
      age: 23,
      address: {
        city: "Bandung",
        country: "Indonesia",
      },
    },
    items: [
      {
        name: "Table",
        price: 1,
      },
      {
        name: "Chair",
        price: 2,
      },
    ],
  },
];
export default function Home(props) {
  const data = dummyData
    .map((item) => {
      const user = item.user;
      user.items = item.items;
      return item.user.name;
    })
    .join(", ");
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      {props.serverTime}
      {props.serverTimeMs}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {data}

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
