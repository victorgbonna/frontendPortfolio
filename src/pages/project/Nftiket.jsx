import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SchemaMarkupHolder from "../../components/schemaMarkupHolder";

export default function Project2() {
  const schema = {
    "@context": "http://schema.org",
    "@type": "Article",
    "headline": "Online Web3 Ticket Sale Platform",
    "description": "This project provides a way to connect and meet one-on-one with mentors from trusted organizations.",
    "author": {
      "@type": "Person",
      "name": "Victor Ogbonna"
    },

    "datePublished": "2022-10-07",
    "image": "https://www.greyhaired.dev/images/nfticket.png"
  };
  return (
    <div className="main">
      <Head>
        <title>Victor Ogbonna Works | Online Web3 Ticket Sale</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This project provides a way to connect and meet one-on-one with mentors from trusted organizations."/>
        <SchemaMarkupHolder page={'project-2'} schema={schema}/>

      </Head>
      <main className='bg-gray-700 py-10 px-20 tablet:px-6' id="project2">
        <section className="fixed top-10 right-20 tablet:right-4 rounded-md flex justify-end gap-x-4 p-2 w-full">
          <Link href={'/'}>
          <a className='flex gap-x-3 hover:bg-blue-500
            rounded-sm p-2 bg-blue-300 border-slate-200 cursor-pointer
            tablet:p-2
            ' style={{zIndex:99}} >
                <FaArrowLeft size={20} className="text-gray-600"/>
                <p className='text-gray-600 text-md tablet:text-md'>Go Home</p>
            </a>
          </Link>
            <Link href={'/project/Mystore'} className="text-gray-600">
            <a className='flex gap-x-3 bg-blue-300 hover:bg-blue-500  
            rounded-sm p-2 border-slate-200 cursor-pointer text-gray-600
            tablet:p-2
            ' style={{zIndex:99}} >
                <p className='text-md tablet:text-md'>Next Project</p>
                <FaArrowRight size={20}/>
            </a>
            </Link>

        </section>
        <h3 className="text-3xl pt-10 underAnim text-left mb-10 font-bold tablet:text-2xl tablet:mb-4">NFTIKET</h3>
        <section className="text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-full mb-2 tablet:w-full'>
            <p>Nftiket is a web3 platform built by my team. I was not the major contributor to this project's client-side aspect, but I started the project and I always came through when there were bugs. It is currently live at <Link href="https://nftikets.io/."><a className="text-blue-500">https://nftikets.io</a></Link>.</p>
          </div>
        </section>
        <section className="mt-20 tablet:mt-8">
          <img src="/images/nfticket.png" alt="nftikethome" className="tablet:h-80"/>
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-10/12 mb-2 tablet:w-full'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10 tablet:pt-4">Scope of the Project</h3>
            <p>
            Users can also create events, create tickets for events, mint tickets&#40;store them in the blockchain&#41; and sell the tickets.
            <br/>At the start of this project, it was a web 3 authentication using Metamask but after a user behaviour review, we found out that most users were not feeling safe connecting their wallet to a new platform, so we opted for MagicLinks web2 authentication instead.  
            </p>
          </div>
          {/* https://www.npmjs.com/package/magic-sdk */}
          {/* https://www.npmjs.com/package/web3-js */}
          {/* https://www.npmjs.com/package/axios */}
          <div className='w-10/12 mb-2 tablet:w-full'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Other Features or Libraries Used</h3>
            <ul>
              <li>
              <Link href={'https://www.npmjs.com/package/web3-js'}><a className="text-blue-500">Web3js</a></Link> - Metamask Library used for the initial choice of authentication. it got replaced with magic SDK.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/magic-sdk'}>
                <a className="text-blue-500">Magic SDK</a></Link>
              - Library for magic link authentication.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/magic-sdk'}>
                <a className="text-blue-500">Moralis Js</a></Link>
              - Alternate library to web3js that provides more simplicity.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/magic-sdk'}>
                <a className="text-blue-500">Flow Technology</a></Link>
              - The blockchain tool to enable potential buyers make NFT copies of a ticket.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/magic-sdk'}>
                <a className="text-blue-500">Vella finance</a></Link>
              - The payment platform that enables payment of tickets both locally and globally.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/axios'}>
                <a className="text-blue-500">Axios</a></Link>
                  - alternative to fetch: for making API calls.
              </li>
              <li>
                Other libraries have not been used yet as the project is still in the BETA stage
              </li>
            </ul>
            
          </div>
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 grid grid-cols-2 tablet:grid-cols-1 justify-center 
        ">
            {[0,1,2,3].map((index)=>
              <div key={index}>
                <img src={`/images/nfticketpic${index}.png`} className="shadow-lg" alt={`projectpic${index}`} />
              </div>
            )}
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-10/12 mb-2 tablet:w-full mt-20 tablet:mt-8'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Problems and Thought Process</h3>
            <p>
            I took time on this project to do a lot of research on Web3. I had enough time to learn and grasp the authentication process.
            </p>
          </div>
          <div className='w-10/12 mb-2 tablet:w-full mt-20 tablet:mt-8'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Lesson Learned</h3>
            <p>
            You can learn anything if you put your mind towards it. I thought that learning Web3 would take me much more time than it did, but it did not turn out that way.
            </p>
          </div>
        </section>
      </main>
    </div>
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