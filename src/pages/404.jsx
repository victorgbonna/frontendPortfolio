import Head from 'next/head'

// import Custom404 from "../components/error/404";

export default function Error404() {

  return (
    <>
    <Head>
    <title>Page not found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <Custom404/> */}

    </>

  )
}
// Because this is just like any other page component in Next.js, you can add whatever styling, links, data, or copy you'd like.

// For other errors, you can do the exact same thing with an _error.js file in the pages/ directory! The 404 error is special because it is always statically generated, but the others rely on the server. If you'd like to use the server-rendering aspects of Next.js on Netlify, check out our one-click install build plugin.

// Wanna a custom Next.js 404 page in action? Take a look at the 404 page on Jamstack Explorers! You can also check out the co