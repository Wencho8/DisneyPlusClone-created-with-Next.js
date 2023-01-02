import MovieIndividual from "../../../components/MovieIndividual";
import URLs from "../../../components/request";
import Head from "next/head";

const Show = (props) => {

  const baseUrlimg = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <Head>
        <title> Watch {props.show.name}  | Episodes  | Disney+  </title>
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <MovieIndividual movie={props.show} suggestions={props.suggestions} />
    </>
  );
};

export default Show;

export async function getServerSideProps(context) {
  const { showId } = context.query;  //Se puede hacer sino const id = context.query.id
  //El id de la pelicula QUE VIENE DEL PUSH router.push(`/shows/${movie.id}`)  -->Se llama como la carpeta [showId]
  //para saber el nombre exacto hacer un console log del query
  const ApiKey = '9ecc1ce6b26f880fb1017ab0e918ebc3';


  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=${ApiKey}&language=en-US`
  ).then((response) => response.json());

  const suggestions = await fetch(URLs.dOriginal).then((response) => response.json());

  return {
    props: {
      show: request,
      suggestions: suggestions.results,
    },
  };
}
