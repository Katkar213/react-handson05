import {useState} from "react"

function HOC(){
    const[data,setData]=useState("")

    const new2=data;

    const UpperCase=(e)=>{
        e.preventDefault()
            setData(new2.toUpperCase())
        
    }
return(
    <>
  
    <textarea rows="8" column="70" value={data} onChange={(e)=>{setData(e.target.value)}}></textarea>
<button onClick={UpperCase}>To Upper Case</button>


    </>
)


}
export default HOC