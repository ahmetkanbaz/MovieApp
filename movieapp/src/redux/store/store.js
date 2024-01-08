import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from '../slices/movies/moviesSlice'
import themeReducer from '../slices/theme/themeSlice'
import actorsReducer from '../slices/actors/actorsSlice'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    theme: themeReducer,
    actors: actorsReducer
  }
})

export default store