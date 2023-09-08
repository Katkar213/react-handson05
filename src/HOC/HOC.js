
function HOC(props){

    return(
        <>
         <div style={{backgroundColor:"yellow"}}>{props.value}</div>

        </>
    )
}

export default HOC


function HOC2(props){

    return(
        <>
         <div style={{backgroundColor:"lightGrey",margin:"20px"}}>{props.value}</div>

        </>
    )
}

export  {HOC2}