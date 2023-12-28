import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
import { Movie } from './components/Movie';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="app">
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      {/* <Route path='movie' element={<Movie />}/> */}
      <Route path='/movie/:id' element={<Movie />} />
     </Routes>
    </div>
  );
}


export default App;
