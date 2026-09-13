import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes,Route } from 'react-router-dom';

import FavList from './components/FavList';
import Nav from './components/Nav';
import StudentArrProvider from "./StudentArrProvider";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StudentArrProvider>
     <BrowserRouter>
      
   

    <Routes>
      <Route path='/' element={<Nav/>}></Route>
      <Route path='/favstudent' element={<FavList/>}></Route>
      
      {/* <Route path='/list' element={<List/>}></Route> */}
    </Routes>
  </BrowserRouter>
   </StudentArrProvider>
 
    
  
);


