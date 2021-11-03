import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      {/* <Signin value={children}/> */}
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {}
      <Navbar />
      <div>{children}</div>
    </>
  );
}
