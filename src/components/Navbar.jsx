import React from 'react'
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import {MovieDetail} from './components/MovieDetail'

export const Navbar = () => {
    const NavLinkStyle=({isActive})=>{
       return{ 
        fontweight: isActive ? 'bold' : 'normal',
         textDecoration: isActive ? 'none' : 'underline'
        }
    }
  return (
    <div >
    <nav >
      <NavLink style={NavLinkStyle} to="/">Home</NavLink>
      <NavLink style={NavLinkStyle} to="movie">Movie</NavLink>
    </nav>
     {/* <p>{id}</p> */}
    </div>
  )
}


