import React from 'react'

export default function App8(props) {
    
  return (
    <div style={{backgroundColor: "silver"}}> 
        Hello {props.name}. You are {props.age}
    </div>
  )
}
App8.defaultProps = {name: "Supriya", age:26}