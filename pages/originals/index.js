import HeaderBar from "../../components/HeaderBar";
import MovieRow from "../../components/MovieRow";
import URLs from "../../components/request";
import Head from 'next/head';
import classes from "./originals.module.css";
import { useState, useEffect} from "react";

function Home(props) {
 
  const [show, handleShow] = useState(false);

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
    <div className={classes.body}>
      <Head>
        <title> Originals | Disney+Clone | Made by WenceslaoAvalos</title>
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta 
          name="description"
          content="Disney+ is the ultimate streaming destination for entertainment from Disney, Pixar, Marvel, Star Wars, and National Geographic. Start streaming today."
        />
      </Head>
      
      <div className={classes.container}>
      <HeaderBar />
        <div className={`${classes.wrapper} ${show  && classes.wrapperScrolled} `}>
          <h1>ORIGINALS</h1>
        </div> 
      </div>
      <MovieRow movies={props.dOriginal} title="Disney Originals" />
      <MovieRow movies={props.trending} title="Trending" />
      <MovieRow movies={props.TopRated} title="Top Rated" />
      <MovieRow movies={props.ActionMovies} title="Action Movies" />
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const [                                  //el response
    trendingRes,
    dOriginalRes,
    TopRatedRes,
    ActionMoviesRes,
  ] = await Promise.all([fetch(URLs.trending), fetch(URLs.dOriginal), fetch(URLs.TopRated), fetch(URLs.ActionMovies)]); 

  const [trending, dOriginal, TopRated, ActionMovies, dMovies, TvShows] =                                 //a json
    await Promise.all([trendingRes.json(), dOriginalRes.json(), TopRatedRes.json(), ActionMoviesRes.json() ]);

    console.log("peticion");
  return {
    //retorno a props de arriba
    props: {
      dOriginal: dOriginal.results,
      trending: trending.results,
      TopRated: TopRated.results,
      ActionMovies: ActionMovies.results,
    },
  };
}
