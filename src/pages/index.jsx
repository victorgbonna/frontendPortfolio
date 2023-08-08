import ProjectContextProvider from "../contexts/projectContext";
import Head from "next/head";
import Hero from "../components/hero/index";
import Parent from "../components/parent";

export default function Main() {
  
  return (
    <ProjectContextProvider>
    <Head>
      <title>Victor Ogbonna: Web Developer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Creating websites that are useful to you. Get a site you love with my web services."/>
    </Head>
    <main className="main relative">
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
  console.log("where are you");
  const jwt = cookies.UserJWT;
  if (!jwt) {
    return { props: { loggedUser: {} } };
  }
  const secret = process.env.SECRET || "no hacking here";
//   let user = verify(jwt, secret);
  let user={}
  return { props: { loggedUser: user } };
}