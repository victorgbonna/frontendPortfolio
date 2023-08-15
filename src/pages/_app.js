import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";
import Script from 'next/script'

// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-5MHGKBZV');</script>
// <!-- End Google Tag Manager -->

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
      <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm':i,'id': '5MHGKBZV', 'anonymizeIp': true});var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(d.getElementById(i)){return;}js=d.createElement(s);js.id=i;js.src=p+'://www.googletagmanager.com/gtm.js?id='+i+'';fjs.parentNode.insertBefore(js,fjs);})(window,document,'script','dataLayer','GTM-5MHGKBZV');
            `,
          }}
        />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-TM98X96286" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-TM98X96286');
        `}
      </Script>
      <Script id="convertful-api" src="https://app.convertful.com/Convertful.js?owner=73625" async/>

      
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



