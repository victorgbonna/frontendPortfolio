import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Main() {
  return (
    <div className="main">
      <Head>
      <title>Victor Ogbonna Projects: Project 4</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className='bg-gray-700 py-10 px-20 tablet:px-6' id="project3">
        <section className="fixed top-10 right-20 tablet:right-4 rounded-md flex justify-end gap-x-4 p-2 w-full">
          <Link href={'/main'}>
          <a className='flex gap-x-3 hover:bg-blue-500
            rounded-sm p-2 bg-blue-300 border-slate-200 cursor-pointer
            tablet:p-2
            ' style={{zIndex:99}} >
                <FaArrowLeft size={20} className="text-gray-600"/>
                <p className='text-gray-600 text-md tablet:text-md'>Go Home</p>
            </a>
          </Link>
            <Link href={'/project/Mently'} className="text-gray-600">
            <a className='flex gap-x-3 bg-blue-300 hover:bg-blue-500  
            rounded-sm p-2 border-slate-200 cursor-pointer text-gray-600
            tablet:p-2
            ' style={{zIndex:99}} >
                <p className='text-md tablet:text-md'>Next Project</p>
                <FaArrowRight size={20}/>
            </a>
            </Link>

        </section>
        <h3 className="text-3xl pt-10 underAnim text-left mb-10 font-bold tablet:text-2xl tablet:mb-4">PORTFOLIO</h3>
        <section className="text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-full mb-2 tablet:w-full'>
            <p>My portfolio is a web platform about my work as a developer. I chose to put this among my portfolio projects because of the efforts that I put in. My former portfolio -
                <Link href={'https://portfolio-victors.vercel.app/'}> 
                <a className="text-blue-200">portfolio-victors.vercel.app</a>
            </Link> - failed to give me a call-up when applying for jobs, so I decided to modify the project. I made it using Tailwind and NextJs.</p>
          </div>
        </section>
        <section className="mt-20 tablet:mt-8">
          <img src="/images/portfolio.png" alt="portfoliohome" className="tablet:h-80"/>
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-10/12 mb-2 tablet:w-full'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10 tablet:pt-4">Scope of the Project</h3>
            <p>
            This project is my portfolio. It consists of 3 pages, a chat animation page, the main page and the project page.<br/>
            The chat animation displays right before the site switches to the main page.<br/>
            The main page is my main portfolio page. It talks about my tech journey, projects, blogs and how you can contact me.<br/>
            The project page talks more about each project I listed on the main page.<br/> 
            </p>
          </div>
          <div className='w-10/12 mb-2 tablet:w-full'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Other Features or Libraries Used</h3>
            <ul>
              <li>
              <Link href={'https://www.npmjs.com/package/wowjs'}><a className="text-blue-500">Wowjs</a></Link> - Library for handling animations when you scroll to a component.
              </li>
            </ul>
            
          </div>
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 grid grid-cols-2 tablet:grid-cols-1 justify-center 
        ">
            {[0,1,2,3].map((index)=>
              <div key={index}>
                <img src={`/images/portpic${index}.png`} className="shadow-lg" alt={`projectpic${index}`} />
              </div>
            )}
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-1 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-full mb-2 tablet:w-full mt-20 tablet:mt-8'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Problems and Thought Process</h3>
            I had to figure out why I was not receiving a callback after numerous job applications. I did a lot of research and found a video&#40;<Link href={'https://www.youtube.com/watch?v=DUN1AYQyI3c&#41'}>
                <a className="text-blue-200">
                https://www.youtube.com/watch?v=DUN1AYQyI3c
                </a>
                </Link>&#41; from a guy - Pixel Dahn - in a Youtube channel named AdoraHack. He talked about how he was having the same issue; Then he worked on his portfolio, which worked out for him. <br/>
            I did some research on how to have an attractive portfolio; I came across a Youtube channel - Delba - where she talked about how she came up with her portfolio in one of her videos&#40;<Link href={'https://www.youtube.com/watch?v=zl9iXZrw_dw'}><a className="text-blue-200">https://www.youtube.com/watch?v=zl9iXZrw_dw</a></Link>&#41;. She referenced a pdf through the link -
            <Link href={'https://www.joshwcomeau.com/effective-portfolio/'}> 
            <a className="text-blue-200">
            https://www.joshwcomeau.com/effective-portfolio/
            </a>
            </Link> .<br/>
            Long story short, I turned this -<Link href="https://portfolio-victors.vercel.app/">
            <a className="text-blue-200">
            https://portfolio-victors.vercel.app/
            </a> 
            </Link>- into this -<Link href="https://portfolio-victors.vercel.app/">
            <a className="text-blue-200">
            https://portfolio-victors.vercel.app/
            </a>
            </Link>.
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