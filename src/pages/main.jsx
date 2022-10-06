// import Nav from "../components/Nav";
import ProjectContextProvider from "../contexts/projectContext";
import Head from "next/head";
import Hero from "../components/hero/index";
import Parent from "../components/parent";

export default function Main() {
  
  return (
    <ProjectContextProvider>
    <div className="main relative">
      <Head>
        <title>Yours Truly: Ogbonna Victor Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='bg-gray' id="home">
        <Hero/>
      </div>
      <Parent/>
    </div>
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