import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [margin, setMargin] = useState("0px");
  const click = () =>{
    setMargin(`${parseInt(margin) + 100}px`);
    console.log(`margin: ${margin}`);
  }

  return (
    <div onClick={click} style={{width:'100px', height:'100px', backgroundColor:"blue", marginTop:"50px" ,marginLeft:margin }}>
    </div>
  );
}

export default App;
