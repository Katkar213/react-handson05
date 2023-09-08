import { PureComponent } from "react"


class PureCompo extends PureComponent{
    constructor(){
        super();
        this.state={
            num:1
        }

    }
   render(){
    console.log("multiply once...")
    return(
        <>
        <br/>
       <h1> Check console :{this.state.num}</h1>
        <button onClick={()=>{this.setState({num:2})}}>Pure component</button>
        </>
    )
   } 

    
}

export default PureCompo 