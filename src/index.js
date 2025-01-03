import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Nav from '../src/components/Nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route path="./components/BannerHome/BannerHome" index element={<Home/>}/>
        <Route />
        <Route />
        <Route />
      </Route>
    </Routes>
    </BrowserRouter>
    <Home />
  </React.StrictMode>
);


