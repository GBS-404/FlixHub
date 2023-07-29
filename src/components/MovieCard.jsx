import {Link} from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

const imgUrl = import.meta.env.VITE_IMG;

 
 const MovieCard = ({movie, showLink = true}) => {
  const roundedVoteAverage = movie.vote_average.toFixed(1);


   return <div className='movie_card'>
    <img src={imgUrl +movie.poster_path}  alt={movie.title}></img>
    <h2>{movie.title}</h2>

    <p> 
     <FaStar />  {roundedVoteAverage}
    </p>
    {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
   </div>
 }
 
 export default MovieCard