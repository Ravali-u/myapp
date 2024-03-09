import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App16 from './App16';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App3 names={["John", "Cathy", "Mike"]}/> */}
   {/* <App3 students={{name:'John', age:23}}/> */}
   <App16 />
  </React.StrictMode>
);


