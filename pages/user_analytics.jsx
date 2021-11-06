import React from "react";
import Layout from "../components/Layout";
import withAuth from "../auth/prodectedroutes";
import Analytics from "../components/Analytics";
import Head from "next/head";
const UserAnalytics = () => {
  return (
    <>
      <Layout />
      <Analytics />
      <Head>
        <title>Analytics-User</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};

export default withAuth(UserAnalytics);
