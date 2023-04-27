import Head from "next/head";
import Home from "../components/home/index.v1";

export default function Main() {
  return (
    <>
      <Head>
        <title>The Webmasters Agency</title>
        <meta
          name="description"
          content="Software Engineering and Consulation Service"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Home />
      </div>
    </>
  );
}
