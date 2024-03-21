import React from 'react'
import { useState, useEffect } from "react";
export default function App9() {
    const [run, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);
    console.log("Component loaded")
    useEffect(()=>{
      if(wickets>0) 
        console.log(`Wickets:${wickets} Better Luck Next Time`);
    },[wickets]);

    useEffect(()=>{
      if(run>0) 
      console.log(`Good Job Score:${run}`);
  },[run]);
  return (
    <>
    <button onClick={()=>setRuns((prevState)=> prevState +1)}>
    Runs({run})
    </button>
    <button onClick={()=>setWickets((prevState)=> prevState +1)}>
        Wickets({wickets})
    </button>
    
    </>
  )
}



// export default function App9() {
//     const [count, setCount] = useState(0);
//     console.log("Component loaded")
//   return (
//     <>
//     <button onClick={()=>setCount((prevState)=> prevState +1)}>
//         click
//     </button>
//     <span>{count}</span>
//     </>
//   )
// }