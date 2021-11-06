import React from "react";
import Layout from "../components/Layout";
import withAuth from "../auth/prodectedroutes";
import Head from "next/head";
import Reports from "../components/Reports";
const UserReports = () => {
  return (
    <>
      <Layout />
      <Reports />
      <Head>
        <title>Reports-User </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};

export default withAuth(UserReports);
