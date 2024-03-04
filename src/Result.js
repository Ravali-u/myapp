import React from 'react'
// import Pass from "./Pass";
// import Fail from "./Fail"

export default function Result(props) {
    let result=""
    if(props.marks>40){
//   return <Pass/>
result ="Pass";
} else{
    // return <Fail/>;
    result = "Fail";
}
return(result)
}

