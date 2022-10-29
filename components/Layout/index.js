import Head from "next/head";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>AHM Corporation</title>
        <meta name="description" content="ahm corporation" />
        <meta name="keywords" content="ahm corporation" />
      </Head>

      <div className="overflow-x-hidden">
        <Header />
        {children}
      </div>
    </>
  );
}

export default Layout;
