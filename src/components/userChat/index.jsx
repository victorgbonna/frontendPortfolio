import styles from "./userChat.module.css";
import { useState, useEffect, useRef, useContext } from "react";
// import axios from "axios";
import { ProjectContext } from "../../contexts/projectContext";
import Checkifprops from "../checkifprops";

function ListUsers({users, checkMessages}) {
    // console.log({users})
    if (!users) return (
        <div style={{height:"200px", visibility:"hidden"}} >
            &nbsp;
        </div>
    )

    return (
        <Checkifprops propsVarlength={users.length} propsVar={'User'}>
            <div className={styles.userschatcont} style={{display:"flex", flexDirection:"column", paddingBottom:0}}>
                {users.map(({username, content:lastContent}
                ,index)=>
                    // <>
                        <div style={index==0?{background: '#8692a64b'}:null} className={styles.userschatdiv} key={index} onClick={()=> checkMessages(username)}>
                            <div className={styles.userschatprof}>
                                <h5 style={{fontSize:"14px", fontWeight:"bold", marginBottom:0}} className={styles.chatperson}>{username}</h5>
                                <p>{index<1?"Guest":"Org"}</p>
                            </div>
                            <p className={styles.chat} style={{padding:0}}>
                                {lastContent && lastContent.slice(0,30)+'...'}</p>
                        </div>
                    // </>
                )}
            </div>
        </Checkifprops>
    )
}

function ChatBox({messages, setFilterChats, loggedUser={}}) {
    const [inputMsg, setInputMsg]= useState('')
    const chatRef= useRef(null)
    // console.log({messages})
    const sendMsg=()=>{
        setFilterChats(ex_chats=>[
            ...ex_chats,{
                username:loggedUser.username, 
                content:inputMsg
            }
        ])
        // const a= document.getElementById('chat43')
        // a.focus()
        setInputMsg('')
    }

    useEffect(() => {
        chatRef.current?.scrollIntoView();
    }, [messages]);

    if (!messages) return (
        <div style={{height:"200px", visibility:"hidden"}} >
            &nbsp;
        </div>
    )
    return (
        <>
        
        <div className={styles.chatbox}>
            <Checkifprops propsVar={'Chat'} propsVarlength={messages.length}>
                {messages.map(({username,content,
                    profileImg, creatorEntity}
                ,index)=>
                    <div key={index} style={
                        (index%3)>1?
                        {alignSelf:"flex-end", 
                        width:"fit-content", marginBottom:"10px"}
                    :{width:"fit-content", marginBottom:"10px"}}>
                    <div style={{display:"flex", columnGap:"5px"}}>
                        <p className={styles.chatperson}>{(index%3)>1?'Mently Team':username}</p>
                        <p style={{
                            fontSize:"11px", fontFamily:"Barlow", marginBottom:"5px"
                        }}>11:02pm</p> 
                    </div>

                    {(index%3)>1?
                    
                        <div id={'chat'+index}
                        style={{maxWidth:300,background:'rgba(9,30,66)', borderRadius:"6px"}}>
                            <p className={styles.chat} style={{color:"#FFFFFF"}}>
                                {content}</p>
                            {/* <p className={styles.chat}>{username}</p> */}
                        </div>
                        :
                        <div id={'chat'+index} 
                        style={{maxWidth:300,background:'#FFFFFF', borderRadius:"6px", background:"whitesmoke"}}>
                            <p className={styles.chat}>{content}</p>
                        </div>}
                    </div>
                )}
                <div ref={chatRef} style={{visibility:"hidden", height:"40px"}}>

                </div>
            </Checkifprops>
                {/* chat input */}
                <div style={{position:"absolute", bottom:-6, 
                left:0, right:0}}>
                    <textarea type="text" 
                
                    className={styles.inpchat}
                    onChange={(e)=> {
                        setInputMsg(e.target.value)
                    }}
                    value={inputMsg}
                    onKeyDown={(e)=>{
                        // console.log(e.key)
                        if(e.key=="Enter"){
                            sendMsg()

                        }
                    }}
                    placeholder="Ask me here"/>
                </div>
        </div>
        </>
    )
}

function Chat({isAdmin, username, loggedUser={}, onClose}) {
    // console.log({isAdmin, username})
    const [chats, setChats]= useState(null)
    const [filterChats, setFilterChats]= useState(null)
    // const [total, setTotal]= useState(0)
    const [step, setStep]= useState(0)
    const [mounted, setMounted]= useState(false)
    const [chatUsers, setChatusers]= useState([])

    const getChats=()=>{
        const chatsData= {
            posts:[]
        }

        const uniqueUsersList = [];

        const uniqueUsers = chatsData.posts.filter(element => {
        const isDuplicate = uniqueUsersList.includes(element.username);

            if (!isDuplicate) {
                uniqueUsersList.push(element.username);

                return true;
            }
            return false;
        });
        // const usersInDuplicate= chatsData.posts.map((message)=>
        //     message.username
        // )
        // const users= [...new Set(usersInDuplicate)]
        let filterchats=[]
        if(username){
            filterchats= chatsData.posts
            // console.log({filterChats})
            // filterchats= chatsData.posts.filter(
            //     (msg)=>msg.username=='giftelenwo2@gmail.com'
            // )
        }
        else{
            const localStorageUsername= window.localStorage.getItem('aliasUsername')
            if(localStorageUsername!==null){
                filterchats= chatsData.posts.filter(
                    (msg)=>msg.username==JSON.parse(localStorageUsername)
                )
            }
        

        }
        // console.log({filterChats})
        setChats(chatsData.posts)
        setFilterChats(filterchats)
        setChatusers(uniqueUsers)
    }
    const filterMessagesByUser=(username)=>{
        const newChats= chats.filter(chat=>
            chat.username==username    
        )
        setFilterChats(newChats)
        setStep(1)
    }

    useEffect(() => {
        if(mounted) return
        getChats()
        setMounted(true)
    }, [mounted]);

    if(!isAdmin){
        return (
        <div 
            style={{position:"relative",
            background:"#FFFFFF",borderRadius: '20px',
            
        }} className={styles.chatcontainer}>
            <img
                src="/svg/Close.svg"
                alt="close"
                className={styles.close}
                onClick={onClose}
            />
            <div id="chatheader" className={styles.headerchat}>
                {/* <img src="/images/mently3.png" alt="mently logo" style={{width:"40px", height:"30px"}}/> */}
                <p className={styles.toph}>Tell Me Anything</p>
            </div>
            {/* <Dataloading propsVar={chats}> */}
                {filterChats && <ChatBox messages={filterChats} loggedUser={loggedUser}
                setFilterChats={setFilterChats} 
                goBack={null}/>}
            {/* </Dataloading> */}
        </div>
        )
    }
    return (
        <div 
            style={{
            background:"#FFFFFF",borderRadius: '20px',
            
        }} className={styles.chatcontainer}>
            {step==0?<img
                src="/svg/Close.svg"
                alt="close"
                className={styles.close}
                onClick={onClose}
            />:
                <button onClick={()=>setStep(0)} className={styles.seemore}>
                    Back
                </button>
            }
            <div className={styles.headerchat}>
                {/* <img src="/images/mently3.png" alt="mently logo" style={{width:"40px", height:"30px"}}/> */}
                <p className={styles.toph}>Kindly reply as soon as you can</p>
            </div>
            {/* <Dataloading propsVar={chats}> */}
                {step==0 && filterChats?
                <ListUsers users={chatUsers} 
                checkMessages={(username)=>filterMessagesByUser(username)}/>
                :step==1 && filterChats? 
                <ChatBox loggedUser={loggedUser} messages={filterChats}
                    setFilterChats={setFilterChats}
                goBack={()=>setStep(0)}/>:null}

            {/* </Dataloading> */}
        </div>
    );
}

export default function UserChat() {
    const [loggedUser, setLoggedUser]= useState(null)
    const [mounted, setMounted]= useState(false)
    // const [showBox, setShowBox]=useState(false)
    const {showChat, setShowChat}= useContext(ProjectContext)
    const getUser=async()=>{
        // const user=await axios.get("/api/getUser");
        // console.log(user.data)
        setLoggedUser({})
        // setLoggedUser(user.data)
    }

    useEffect(() => {
        if(mounted) return
        getUser()
        setMounted(true)
    }, [mounted]);

  if(!mounted) return null
  return (     
    <div className={styles.fixedchatdiv}>
        <button className={showChat?(styles.disappears+' '+styles.messagebox):styles.messagebox}
         onClick={()=>setShowChat(true)}>
            <img src="/svg/chatic.svg" alt="chatbox" />
        </button>
        {showChat && loggedUser &&
            <Chat
            onClose={()=>setShowChat(false)}
            loggedUser={loggedUser}
            username={loggedUser.username}
            isAdmin={loggedUser.email=="mymentlyhq@gmail.com"} />
        }
    </div>
  );
}