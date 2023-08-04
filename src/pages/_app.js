import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        {/* <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link> */}
      </Head>
      <Component {...pageProps}/>
      <Analytics />
    </>
  );
}

export default MyApp;



