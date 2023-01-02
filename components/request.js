
const ApiKey = '9ecc1ce6b26f880fb1017ab0e918ebc3'; 

const URLs = {

trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${ApiKey}`,
dOriginal: `https://api.themoviedb.org/3/discover/tv?api_key=${ApiKey}&with_networks=2739`, 
TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US`,
ActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=28`,
dMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${ApiKey}&with_networks=6131`,
TvShows: `https://api.themoviedb.org/3/tv/{tv_id}?api_key=${ApiKey}&with_networks=2739`,
}

export default URLs;