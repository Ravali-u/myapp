import React from 'react'
// import Login from "./Login"
// import Home from "./Home"
export default function App2(props) {
    return props.user==="" && (
    <div>
        <h1>Login Form</h1>

        <p>
            <input type="text" placeholder='username'/>
        </p>
        <p>
            <input type="password" placeholder='password'/>
        </p>
        <button>Login</button>

    </div>
    ) 
 
// ):
// ( <div>Hello {props.username}</div>
// )
}
// return (props.user==="" ? <Login/>: <Home username={props.user}/>);

// if(props.user==""){
//     return <Login/>
// }else{
// return <Home username={props.user}/>
// }