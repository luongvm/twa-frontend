import React from "react";
import Head from "next/head";
import AboutUsPage from "../components/contact";
import MainLayout from "../layouts/MainLayout";

const ContactUs = () => {
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

export default ContactUs;
