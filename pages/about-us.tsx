import React from "react";
import Head from "next/head";
import AboutUsPage from "../components/about-us";
import MainLayout from "../layouts/MainLayout";

const AboutUs = () => {
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
      <MainLayout>
        <AboutUsPage />
      </MainLayout>
    </>
  );
};

export default AboutUs;
