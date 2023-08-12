import React from 'react';
import ReactDOM from 'react-dom/client';
import Lists from './Lists';
// import App from './App';
import Ternary from './Ternary'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Ternary /> */}
    <Lists />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
