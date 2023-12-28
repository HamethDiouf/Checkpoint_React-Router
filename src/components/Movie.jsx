import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';


 export const Movie = () => {
  const {id} = useParams()
  const movie = MovieDetail.find((p)=>p.id===parseInt(id))
  return ( 
    <div className='Movie'>
      {/* <h1>Movie page</h1> */}
      <p>{id}</p>
       { MovieDetail.map( (movies) =>{ 
         return(
         <div key={movies.id}>
           <video controls src={movies.vidsrc}></video>
           <h2 id='name'>{movies.name}</h2>
           <p id='desc'>{movies.description}</p>
         </div>
         )})}
         <Link to={"/"} style={{color:'blue', marginLeft:'3rem', fontSize:'20px'}}>Retour à la page d'accueil</Link>
       </div>
   );
}

 
// export default Movie;