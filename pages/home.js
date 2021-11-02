import withAuth from "../auth/prodectedroutes";
import Home from "../components/Home";
import Layout from "../components/Layout";

function home() {
  return (
    <>
      <Layout />
      <Home />
    </>
  );
}

export default withAuth(home);
