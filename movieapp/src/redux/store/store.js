import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from '../slices/movies/moviesSlice'
import themeReducer from '../slices/theme/themeSlice'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    theme: themeReducer
  }
})

export default store