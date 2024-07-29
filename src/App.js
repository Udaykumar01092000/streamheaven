import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NetflixShow from './pages/netflixshow';
import Footer from './components/Footer/Footer';
import Scrolltop from './components/ScrollTop/scrolltop';
import Banner from './components/Banner/banner';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Scrolltop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/netflixshow" element = {<NetflixShow/>}/>
          <Route path = "/banner" element = {<Banner/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
