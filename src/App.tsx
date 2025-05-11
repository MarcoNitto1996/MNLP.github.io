import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import { NoteLegali } from './pages/NoteLegali';
import { Cookies } from './pages/Cookies'
import {  BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter, Link, BrowserRouter} from 'react-router-dom';
import { Blog } from './pages/Blog';

{/*
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>*/}
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/note-legali" element={<NoteLegali/>}/>
        <Route path="/cookies" element={<Cookies/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
