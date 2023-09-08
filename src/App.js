
import './App.css';
import HOCData from "./HOC/HOCData"
import HOC from "./HOC/HOC"
import {HOC2} from "./HOC/HOC"
import PureCompo from "./PureComponent/PureCompo"
function App() {
  return (
    <div className="App">
        <h1> Colouring By HOC component</h1>
     <HOC value={<HOCData/>}/>
     
     <HOC2 value={<HOCData/>}/>

     <h1>Changing By Pure Component</h1>
     
     <PureCompo/>

     <br/>
     <h4><span style={{color:"red"}}>Explaination :</span>  In HOC the text in text area changes to upper case by clicking on button and later by HOC we can change color of one component<br/>
     and in Pure Componemt I have change vlue from 1 to 2 by ending that variable at 2 console stops rerendering i.e console render only once.</h4>
    </div>
  );
}

export default App;
