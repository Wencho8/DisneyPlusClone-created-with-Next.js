import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie', 
    initialState: {  
        movies: [],  //nombre de un state. (array de movies)
    },

    reducers: {
        addMovie(state, action) {  
          console.log(action.payload.id);
          
          if (state.movies.length === 0) { //si el array de movies esta vacio se agrega
            state.movies.push(action.payload); //se agrega movie al array de movies
          }
          else if (state.movies.some((movie) => movie.id !== action.payload.id)) {  //si se hace el some() con array vacio no funciona.
                state.movies.push(action.payload); //se agrega movie al array de movies
            }
        },

        removeMovie(state, action) {
            state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
        },   
    },
  });
  
  export const movieActions = movieSlice.actions;
  
  export default movieSlice;