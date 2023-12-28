import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='Home'>
      {/* <h1> Home page</h1> */}
      
         <Link to={"/movie/1"}><img src={'vk.jpg'} /></Link>
         <Link to={"/movie/2"}><img src={'dct.jpg'} /></Link>
         {/* <Link to={"/movie/3"}><img src={'hd.jpg'} /></Link>
         <Link to={"/movie/4"}><img src={'skn.jpg'} /></Link> */}
    </div>
  )
}


