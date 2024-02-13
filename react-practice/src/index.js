import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import About from './About';
import Routing from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routing/>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/home' element={<App/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/about' element={<About/>}/>
  </Routes>
  </BrowserRouter>
    
  </>
);

