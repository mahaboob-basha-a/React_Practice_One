import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from'react-router-dom';
import './index.css';
import { Practice, Test } from './Practice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Practice/>} />
    <Route path='/test' element={<Test/>} />
  </Routes>
  </BrowserRouter>
);

