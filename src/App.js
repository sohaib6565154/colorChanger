import {useState} from 'react';
import './App.css';
function App() {
  const [color,setcolor]=useState("white");
  return (
    <>
    <div className='backside' style={{backgroundColor:color}}>
      <div className='frontside'>
        <button onClick={()=>setcolor("red")} className='red abc' style={{backgroundColor:"red"}} >Red</button>
        <button onClick={()=>setcolor("green")} className='gareen abc' style={{backgroundColor:"green"}}>Gareen</button>
        <button onClick={()=>setcolor("blue")} className='blue abc' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setcolor("pink")} className='pink abc' style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=>setcolor("black")} className='black abc' style={{backgroundColor:"black", color:"white"}}>Black</button>
      </div>
    </div>
    </>
  );
}

export default App;
