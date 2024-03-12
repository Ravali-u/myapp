import React from 'react'
import {UserContext} from './App13a'
import Home1 from './Home1';
import Register from './Register'

export default function Login1() {
    const{flag, setFlag}=UserContext(UserContext);
    if(flag==1){
        <Home1/>
    }else if(flag==2){
        <Register/>
    }
  return (
    <>
    <div>Login1</div>
    <button onClick={()=>setFlag((prev)=>1)}>Login</button>
    <button onClick={()=>setFlag((prev)=>2)}>Create Account</button>
    {/* {!flag?(<Home1/>):(<Login1/>)} */}
    </>
    )
}
