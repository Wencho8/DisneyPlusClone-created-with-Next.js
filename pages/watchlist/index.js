import Watchlist from "../../components/Watchlist";
import Head from "next/head";

function Home () {

return (

    <>
     <Head>
        <title> My watchlist | Disney+Clone </title>
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta 
          name="description"
          content="Disney+ is the ultimate streaming destination for entertainment from Disney, Pixar, Marvel, Star Wars, and National Geographic. Start streaming today."
        />
      </Head>
     <Watchlist/>
    </>
);

}

export default Home;