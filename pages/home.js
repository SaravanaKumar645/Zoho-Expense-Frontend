import withAuth from "../auth/prodectedroutes";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Head from "next/head";
function home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout />
      <Home />
    </>
  );
}

export default withAuth(home);
