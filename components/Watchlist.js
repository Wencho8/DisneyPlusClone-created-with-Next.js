import { useSelector } from "react-redux";
import HeaderBar from "./HeaderBar";
import classes from "./Watchlist.module.css";
import { useRouter } from "next/router";

const Watchlist = () => {
  const movies = useSelector((state) => state.movie.movies); //el state es el store, y movie es el nombre del reducer, y movies es el nombre del state.
  const router = useRouter();
  const baseUrlimg = "https://image.tmdb.org/t/p/original/";
  let content = <h1 style={{ marginLeft: '20px', color: "white"  }}>No movies found.</h1>;

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
    

  if (movies.length > 0) {
    content = (
      <>
        <div className={classes.rowWrapper}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={classes.rowImage}
              src={`${baseUrlimg}${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <HeaderBar />
      <div className="flex flex-col gap-4">
        <h1 className={classes.watchlistText}>My Watchlist</h1>
        <h1 className={classes.watchlistTexth2}>My movies and series</h1>
        {content}
      </div>
    </>
  );
};

export default Watchlist;
