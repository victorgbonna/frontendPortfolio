import Convobox from "./Convobox"

export default function Convo({targetVal}){
    const chats=[{
        isAdmin:true,
        content:`How do I get to work for you: ${targetVal}?`
    },
    {
        isAdmin:false,
        content:`Let me see your portfolio`
    },{
        isAdmin:true,
        content:`Okay, here it is`
    }]
    return(
        <div className="chatbox">
            {chats.map(({isAdmin, content}, index)=>
                <Convobox key={index} isAdmin={isAdmin} content={content} index={index}/>
            )}
        </div>
    )
}
