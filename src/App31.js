import React from 'react'
import { useState } from 'react'
export default function App31() {
    const [count, setCount] = useState(0);
    console.log("Component loaded")
  return (
    <>
    <button onClick={()=>setCount((prevState)=> prevState +1)}>
        click
    </button>
    <span>{count}</span>
    </>
  )
}
