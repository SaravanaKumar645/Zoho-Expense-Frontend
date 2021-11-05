import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { asPath } = useRouter();
  console.log(asPath);
  // console.log(JSON.stringify(props));
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
      <Navbar tabPath={asPath} />
      <div>{children}</div>
    </>
  );
};
export default Layout;
