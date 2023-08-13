import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        {/* <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link> */}
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-784144131" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'AW-784144131');
        `}
      </Script>
      {/* <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-TM98X96286"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-TM98X96286');
      </script> */}
      <Component {...pageProps}/>
      <Analytics />
    </>
  );
}

export default MyApp;



