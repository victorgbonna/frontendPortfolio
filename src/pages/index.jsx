import ProjectContextProvider from "../contexts/projectContext";
import Head from "next/head";
import Hero from "../components/hero/index";
import Parent from "../components/parent";
import SchemaMarkupHolder from "../components/schemaMarkupHolder";


export default function Main() {
  const home_schema = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "Victor Ogbonna's Portfolio",
    "description": "Check out Victor Ogbonna's excellent web projects and skills. Discover a collection of creative works, including interactive and responsive websites.",
    "publisher": {
      "@type": "Person",
      "name": "Victor Ogbonna"
    },
    "author": {
      "@type": "Person",
      "name": "Victor Ogbonna"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://www.greyhaired.dev/images/mypic.jpg",
      "width": 966,
      "height": 992
    },
    "url": "https://www.greyhaired.dev/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.greyhaired.dev/"
    },
    "sameAs": [
      "https://www.kaggle.com/ogbonnachiedo",
      "https://www.linkedin.com/in/victor-ogbonna-5a3113230",
      "https://github.com/victorgbonna",
      "https://hashnode.com/@greyhaired"
    ]
    // Add additional properties as needed for individual projects, images, etc.
  };

  return (
    <ProjectContextProvider>
    <Head>
      <title>Victor Ogbonna | Website Developer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Creating websites that are useful to you. Get a site you love with my web services."/>
    </Head>
    <main className="main relative">
      <SchemaMarkupHolder page={'home'} schema={home_schema}/>
      <div className='bg-gray' id="home">
        <Hero/>
      </div>
      <Parent/>
    </main>
    </ProjectContextProvider>
    
  );
}
export async function getServerSideProps({ req }) {
  const { cookies } = req;
  const jwt = cookies.UserJWT;
  if (!jwt) {
    return { props: { loggedUser: {} } };
  }
  const secret = process.env.SECRET || "no hacking here";
//   let user = verify(jwt, secret);
  let user={}
  return { props: { loggedUser: user } };
}