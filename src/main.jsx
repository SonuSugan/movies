import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
// index.jsx or another top-level file where you configure Axios
import axios from 'axios';
// import store from './app/store'
store
import { Provider } from 'react-redux'
import { store } from './store/store.js'

// Set the base URL for TMDB
axios.defaults.baseURL = "https://api.themoviedb.org/3";

// Set the Authorization header with the Bearer token
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`;
// console.log("TMDB Access Token:", import.meta.env.VITE_TMDB_ACCESS_TOKEN);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  
    <RouterProvider router={router}>
    {/* <App /> */}
    </RouterProvider>
   </Provider>,
)
