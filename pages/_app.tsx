import Head from "next/head";
import "../styles/globals.css";
import "../styles/styles.css";
import Layout from "./Components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>CrochetMx</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;