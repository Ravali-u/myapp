import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cart from './Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App3 names={["John", "Cathy", "Mike"]}/> */}
   {/* <App3 students={{name:'John', age:23}}/> */}
   <Cart/>
  </React.StrictMode>
);


