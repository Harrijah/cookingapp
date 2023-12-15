import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

const App = (id) => {
  return (
    <div>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={ <About /> } ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/menu/:id" element={<Menu />} />
          </Routes>
          </BrowserRouter>
      
    </div>
  );
};

export default App;