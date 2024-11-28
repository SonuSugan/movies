import { createSlice, configureStore } from '@reduxjs/toolkit'
import movieReducer from './movieSlice'

export const store = configureStore({
    reducer: 
    {
        movieData : movieReducer
    },
  })