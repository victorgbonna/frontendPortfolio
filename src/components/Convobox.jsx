export default function Convobox({content, isAdmin, index}){
    return(
        <div className={`chatcont ${isAdmin?'':'right'}`} style={{animationDelay:index*4+'s'}}>
            
            <p className="avatar">{isAdmin?"Me":"HR"}</p>
            <div className="content">
                <div className="typewriter">
                    <p style={{animationDelay:index*4+'.5s'}}>{content}</p>
                </div>
            </div>

        </div>
    )
}
