import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes";
const AdminReport = () => {
  return (
    <>
      <Layout />
      <Head>
        <title>Reports </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
};
export default withAuth(AdminReport);
