
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

     <h1>Hoc:</h1>
     <p>Higher-order components (HOCs) are a powerful feature of the React library. They allow you to reuse component logic across multiple components. In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.</p>
     
     <h1>PureComponent:</h1>
     <p>PureComponent is similar to Component but it skips re-renders for same props and state. Class components are still supported by React, but we don’t recommend using them in new code.</p>
     

     <h4><span style={{color:"red"}}>Explaination :</span>IN above example In HOC the text in text area changes to upper case by clicking on button and later by HOC we can change color of one component by using single HOC component we can change these multiple time.<br/>
     and in Pure Componemt I have change vlue from 1 to 2 by ending that variable at 2 console stops rerendering i.e console render only once.and it stops re rendering cod at specific interval</h4>
    </div>
  );
}

export default App;
