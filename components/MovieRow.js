import classes from "./MovieRow.module.css";
import { useRouter } from "next/router";

const MovieRow = (props) => {
  
  const router = useRouter();

  const handleClick = (movie) => { 
    if (movie.name===undefined) //si es una pelicula "title" si es una serie es "name"
    {
      router.push(`/movies/${movie.id}`);
    }
    else
    {
      router.push(`/shows/${movie.id}`);
    }
  }


  const baseUrlimg="https://image.tmdb.org/t/p/original/";

  let content = <></>;
  if (JSON.stringify(props.movies) !== '[]')
   {
    content = 
     <>
      <div className={classes.rowWrapper}>
        {props.movies.map((movie) => (
          
            <img 
            key={movie.id}
            className={classes.rowImage}
            src={`${baseUrlimg}${movie.backdrop_path}`} alt={movie.name}
            onClick={() => handleClick(movie)}
             />
            
        ))}
      </div>
     </>
   };


  return (
    <div className={classes.text}>
      <h2 style={{marginBottom:'-20px'}}>{props.title}</h2>
      {content}
    </div>
  );
};

export default MovieRow;


