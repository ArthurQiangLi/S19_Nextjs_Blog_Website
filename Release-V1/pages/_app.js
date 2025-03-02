import Head from "next/head";
import "../styles/globals.css"; // Import global styles if needed
import "../styles/Header.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>A.Q.L</title> ;;ll
      </Head>
      <Component {...pageProps} />
    </>
  );

  
}
