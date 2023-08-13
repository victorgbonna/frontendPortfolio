import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' href='/favicon/favicon.ico'/>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm':i,'id': '5MHGKBZV', 'anonymizeIp': true});var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(d.getElementById(i)){return;}js=d.createElement(s);js.id=i;js.src=p+'://www.googletagmanager.com/gtm.js?id='+i+'';fjs.parentNode.insertBefore(js,fjs);})(window,document,'script','dataLayer','GTM-5MHGKBZV');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}