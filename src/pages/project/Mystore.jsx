import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Main() {
  return (
    <div className="main">
      <Head>
        <title>Ogbonna Victor: Project 3</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className='bg-gray-700 py-10 px-20 tablet:px-6' id="project2">
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
            <Link href={'/project/Portfolio'} className="text-gray-600">
            <a className='flex gap-x-3 bg-blue-300 hover:bg-blue-500  
            rounded-sm p-2 border-slate-200 cursor-pointer text-gray-600
            tablet:p-2
            ' style={{zIndex:99}} >
                <p className='text-md tablet:text-md'>Next Project</p>
                <FaArrowRight size={20}/>
            </a>
            </Link>

        </section>
        <h3 className="text-3xl pt-10 underAnim text-left mb-10 font-bold tablet:text-2xl tablet:mb-4">MYSTORE</h3>
        <section className="text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-full mb-2 tablet:w-full'>
            <p>MyStore is an e-commerce platform built by me. It is a full-stack local project I made using NodeJs, Ejs, VanillaJs, MongoDb and TailwindCss. The project is live at <Link href="https://enigmatic-lowlands-83724.herokuapp.com"><a className="text-blue-500">https://enigmatic-lowlands-83724.herokuapp.com</a></Link>.</p>
          </div>
        </section>
        <section className="mt-20 tablet:mt-8">
          <img src="/images/mystore.png" alt="mystorehome" className="tablet:h-80"/>
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-10/12 mb-2 tablet:w-full'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10 tablet:pt-4">Scope of the Project</h3>
            <p>
            Users can create products and change the prices of products, while guests&#40;non-users&#41; can add products to the cart and buy a set of the product&#40;s&#41;. 
            <br />
            There is a payment integration for buying products online  
            </p>
          </div>
          <div className='w-10/12 mb-2 tablet:w-full'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Other Features or Libraries Used</h3>
            <ul>
              <li>
              <Link href={'https://www.npmjs.com/package/express'}><a className="text-blue-500">Expressjs</a></Link> - Node.js web application framework.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/mongoose'}>
                <a className="text-blue-500">Mongoose</a></Link>
              - ORM library for MongoDB.
              </li>
              <li>
              <Link href={'https://www.npmjs.com/package/axios'}>
                <a className="text-blue-500">Axios</a></Link>
                  - alternative to fetch: for making API calls.
              </li>
            </ul>
            
          </div>
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 grid grid-cols-2 tablet:grid-cols-1 justify-center 
        ">
            {[0,1,2,3].map((index)=>
              <div key={index}>
                <img src={`/images/mystorepic${index}.png`} className="shadow-lg" alt={`projectpic${index}`} />
              </div>
            )}
        </section>
        <section className="pt-20 tablet:pt-8 text-gray-300 gap-y-4 gap-x-6 text-md tracking-widest grid grid-cols-2 tablet:grid-cols-1 leading-2 justify-center 
          tablet:text-sm tablet:gap-y-2 tablet:leading-2 tablet:tracking:wider
        ">
          <div className='w-10/12 mb-2 tablet:w-full mt-20 tablet:mt-8'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Problems and Thought Process</h3>
            <p>
            This was my first hosted project so I had some difficulties in the Heroku deployment, especially in cases where it was working on my development environment but failed on production. 
            <br />
            Code structuring was an issue; I had to learn how to structure my backend codebase from resources I have read and watched.
            </p>
          </div>
          <div className='w-10/12 mb-2 tablet:w-full mt-20 tablet:mt-8'>
            <h3 className="text-3xl text-left pt-10 mb-10 font-bold tablet:text-2xl tablet:mb-10">Lesson Learned</h3>
            <p>
            Deploying my first project gave me the confidence that I needed. After doing this, I started applying for jobs and taking part in tasks, knowing fully well that I could deliver.
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