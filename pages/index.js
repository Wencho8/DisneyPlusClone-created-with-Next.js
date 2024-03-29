import HeaderBar from "../components/HeaderBar";
import Slider from "../components/Slider";
import CategoriesDisney from "../components/CategoriesDisney";
import MovieRow from "../components/MovieRow";
import URLs from "../components/request";
import Head from 'next/head';

function Home(props) {
  return (
    <div className="app" >
      <Head>
        <title>Disney+Clone | Made by WenceslaoAvalos</title>
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta 
          name="description"
          content="Disney+ is the ultimate streaming destination for entertainment from Disney, Pixar, Marvel, Star Wars, and National Geographic. Start streaming today."
        />
      </Head>
      <HeaderBar />
      <Slider />
      <CategoriesDisney />
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
