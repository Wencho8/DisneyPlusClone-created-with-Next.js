import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movie-slice';

const store = configureStore({
  reducer: {movie: movieSlice.reducer },
});

export default store;