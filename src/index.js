import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './compo/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Movies from './pages/Movies';
import Cards from './compo/card/card';
import Search from './Search';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
  
  <Router>
          <Navbar />
    
            <Routes>
                <Route index element={<Home />}></Route>

                <Route path="Movies" element={<Movies  />} ></Route>
                <Route path="search" element= {<Search />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
    
            
        </Router>

  </React.StrictMode>
);

reportWebVitals();
