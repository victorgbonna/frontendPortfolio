export default function Checkifprops({children, propsVar, propsVarlength, customPropsVar=null}) {
    if(propsVarlength){
        return (
            <div>
                {children}
            </div>
        )
    }
    return (
        <h6 style={{fontSize:"15px",marginTop:"20px", textAlign:"center", fontFamily:"Manrope", color:"#809FB8"}}>
            {customPropsVar? 
             <>
                {customPropsVar}
             </>
             :
             <>
                No {propsVar} available
             </>}
        </h6>
    )
}