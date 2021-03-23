import "../css/index.css";
import "node_modules/@iconscout/unicons/css/line.css"
import "node_modules/@iconscout/unicons/css/solid.css"
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({Component, pageProps}) {
  return (
      <Layout>
        <Head>
          <title>React demo</title>
          <meta
              name="Description"
              content="MyApp"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
