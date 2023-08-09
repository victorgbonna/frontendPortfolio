import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SchemaMarkupHolder from "../../components/schemaMarkupHolder";

export default function Project1() {
  const schema = {
    "@context": "http://schema.org",
    "@type": "Article",
    "headline": "Edu-tech Platform",
    "description": "This project provides a way to connect and meet one-on-one with mentors from trusted organizations.",
    "author": {
      "@type": "Person",
      "name": "Victor Ogbonna"
    },

    "datePublished": "2022-10-06",
    "image": "https://www.greyhaired.dev/images/mymently.png"
  };
  return (
    <div className="main">
      <Head>
        <title>Victor Ogbonna Works | EduTech Platform</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This project provides a way to connect and meet one-on-one with mentors from trusted organizations."/>
      </Head>
      <SchemaMarkupHolder page={'project-1'} schema={schema}/>
      <main className=' bg-gray-700  py-10 px-20 tablet:px-6' id="project1">
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
            <Link href={'/project/Nftiket'} className="text-gray-600">
            <a className='flex gap-x-3 bg-blue-300 hover:bg-blue-500  
            rounded-sm p-2 border-slate-200 cursor-pointer text-gray-600
            tablet:p-2
            ' style={{zIndex:99}} >
                <p className='text-md tablet:text-md'>Next Project</p>
                <FaArrowRight size={20}/>
            </a>
            </Link>

        </section>
        <h3 className="text-3xl pt-10  underAnim text-left mb-10 font-bold tablet:text-2xl tablet:mb-4">MENTLY</h3>
        <section className="text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-full mb-2 tablet:w-full'>
            <p>Mently is an ed-tech platform built by my team. I handled about 95% of this project&#39;s client-side aspect, using ReactJs and NextJs. It is currently live at <Link href="https://mymently.com/"><a className="text-blue-500">https://mymently.com/</a></Link>.</p>
          </div>
        </section>
        <section className="mt-20 tablet:mt-8">
          <img src="/images/mentlyhome.png" alt="mentlyhome" className="tablet:h-80"/>
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-10/12 mb-2 tablet:w-full'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10 tablet:pt-4">Scope of the Project</h3>
            <p>
            There are 3 kinds of users for this project - Organizations, Mentors and Mentees.<br/>
            Mentees can apply for Bootcamp; Mentors can schedule calls for a Bootcamp; Organizations can create Bootcamps, create curriculums, add mentors, invite mentors to a Bootcamp, accept/reject a mentee's application to a Bootcamp and schedule calls for a Bootcamp.
            <br/>The Mently product is a way to connect organizations with mentees through their mentors. For a Bootcamp, there is a forum section through which members of that particular Bootcamp can interact with themselves in real time.  
            </p>
          </div>
          <div className='w-10/12 mb-2 tablet:w-full'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Other Features or Libraries Used</h3>
            <ul>
              <li>
              <Link href={'https://www.npmjs.com/package/socket.io-client'}><a className="text-blue-500">Socket io client</a></Link> - Real time functionality Library.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/draft-js'}>
                <a className="text-blue-500">DraftJs &amp; DraftJs mentions</a></Link>
              - Text Editor Library.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/xlsx'}>
                <a className="text-blue-500">XLSX</a></Link>
                  - For generating reports - converting JSON data to Excel sheets.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/react-csv'}>
                <a className="text-blue-500">React-Csv</a></Link>
                 - For generating reports - converting JSON data to CSV.
              </li>
            </ul>
            
          </div>
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 grid grid-cols-2 tablet:grid-cols-1 justify-center 
        ">
            {[0,1,2,3].map((index)=>
              <div key={index}>
                <img src={`/images/mentlypic${index}.png`} className="shadow-lg" alt={`projectpic${index}`} />
              </div>
            )}
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-10/12 mb-2 tablet:w-full mt-20 tablet:mt-8'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Problems and Thought Process</h3>
            <p>
            While executing this project, I and my co-workers in different departments had disagreements on the method of execution of features of this project, but we eventually resolved our differences. I also had to restructure my codebase thrice as the codes got bigger and I tried making more reusable components when needed, instead of adding more components.
            </p>
          </div>
          <div className='w-10/12 mb-2 tablet:w-full mt-20 tablet:mt-8'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Lesson Learned</h3>
            <p>
            A lot of lessons were learnt, but the major one was that I realised that one's knowledge of tools is not enough in a work environment; however, teamwork, communication skills and the ability to learn more are crucial traits too.   
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