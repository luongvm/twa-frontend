import Head from "next/head";
import ProjectPage from "../components/projects";

export default function Projects() {
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
        <ProjectPage />
      </div>
    </>
  );
}
