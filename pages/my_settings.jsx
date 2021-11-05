import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes";
import Settings from "../components/MySettings/Settings";
const MySettings = () => {
  return (
    <>
      <Layout backgroundTab='settings' />
      <Settings />
      <Head>
        <title>My Settings </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};

export default withAuth(MySettings);
