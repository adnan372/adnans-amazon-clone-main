import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <App/>
    {/* <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/checkout' element={<Login/>} />
      <Route path='/login' element={<Checkout/>} />
      <Route path='*' element={<NotFound/>} />
    
    </Routes> */}
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

