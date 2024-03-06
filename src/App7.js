import React from 'react'

export default function App7() {
    const handleClick = (msg) =>{
        alert(msg)
    };
  return (
    <div>
        <button onClick={()=>handleClick('Hi Ravali')}>Click</button>
    </div>
  )
}

// const handleClick = () =>{
//     alert("Hello World")
// };
// return (
// <div>
//     <button onClick={handleClick}>Click</button>
// </div>
// )
// }
