import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'
import Convo from "../components/Convo";

export default function Home({ loggedUser }) {
    const router= useRouter()
    const [targetVal, setTargetVal]= useState('')
    
    useEffect(() => {
        let {target}= router.query
        if(!target){
            const storageTarget=window.localStorage.getItem('target')
            if(!storageTarget) return setTargetVal('0mate') 
            return setTargetVal(JSON.parse(storageTarget))         
        }
        window.localStorage.setItem('target', JSON.stringify(target))
        setTargetVal(target)
    }, []);
    // const [stopTimeout, setStopTimeout]= useState(false)
    useEffect(() => {
      
      setTimeout(() => {
        router.push('/main')
      }, 1100);
      // if(stopTimeout){
      //   clearTimeout(timeout);
      //   router.push('/main')
      // }

    }, []);

  return (
    <>
      <Head>
        <title>Yours Truly: GreyHaired</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='bg-gray-300 chatcontainer'>
        {/* <button className="text-center mb-4 bg-blue-600 p-3 text-gray-200 rounded" onClick={()=>{
          setStopTimeout(true)
        }}>Skip</button> */}
        {targetVal?
            <Convo targetVal={targetVal && targetVal.slice(1,targetVal.length)}/>:null
        }
      </div>
    </>
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