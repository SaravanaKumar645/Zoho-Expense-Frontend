import Layout from "../../components/Layout";
import Head from "next/head";
import withAuth from "../../auth/prodectedroutes";
import Newcardmain from "../../components/Cards/Newcardmain";

function home() {
  return (
    <>
      <Layout />
      <Newcardmain />
      <Head>
        <title>Add Cards | Cards | Zoho Expense</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
    </>
  );
}

export default withAuth(home);
