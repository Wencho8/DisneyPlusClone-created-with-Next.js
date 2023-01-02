import classes from "./MovieIndividual.module.css";
import HeaderBar from "./HeaderBar";
import MovieRow from "./MovieRow";
import { useState, useEffect} from "react";


import { movieActions } from "../store/movie-slice";
import { useDispatch, useSelector} from 'react-redux';

import {
    CheckIcon,
    PlusIcon,
  } from "@heroicons/react/24/solid";


const MovieIndividual = (props) => {
const movies = useSelector((state) => state.movie.movies);    
const baseUrlimg = "https://image.tmdb.org/t/p/original/";
    
 const [show, handleShow] = useState(false);
 const [isListed, setIsListed] = useState(() => movies.some((movie) => movie.id === props.movie.id));

 const dispatch = useDispatch();  


 const addHandler = () => {    //se envia accion de agregar movie al store.
    dispatch(movieActions.addMovie(props.movie));
    setIsListed(true);
  };

  const deleteHandler = () => {  //se envia accion de eliminar movie al store.
      dispatch(movieActions.removeMovie(props.movie));
      setIsListed(false);
    };


  


  useEffect (() => {  
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100 ) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    })
    return () => {
        window.removeEventListener('scroll',null) //Removerlo para que no se quede escuchando
    }

} ,[])

    

    return (
        <>
            <div className={`${classes.container} ${show  && classes.containerScrolled} `}
                style={{
                    backgroundImage: `url(${baseUrlimg}${props.movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                   
                }}
            >
                <HeaderBar />
                <div className={classes.headerContent}>
                    <h1 className={classes.headerTitle}>
                        {props.movie.name || props.movie.title }
                    </h1>
                    <div className="flex mt-16 gap-6">
                        <button className={classes.headerButton}>Watch Now</button>
                        <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60 hover:bg-white/30">
                          {isListed ? <CheckIcon  onClick={() => deleteHandler(props.movie)} className={classes.icons} /> : <PlusIcon onClick={() => addHandler(props.movie)} className={classes.icons}  /> }
                        </div>
                    </div>
                    <h1 className={classes.headerDescription}>
                        {props.movie.overview}
                    </h1>
                    <div className="mt-40">
                  <MovieRow movies={props.suggestions} title="Suggestions" />
                  </div>
                </div>
            </div>
        </>
    );
}

export default MovieIndividual;
