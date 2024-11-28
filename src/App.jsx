import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import process from "process";
import { useDispatch } from "react-redux";
import { setBannerData,setImageURL } from "./store/movieSlice";

function App() {
  const dispatch = useDispatch();
  const fetchTrendingData = async () => {
    try {
      // Using the endpoint to fetch trending data from TMDB
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response.data.results));
      // console.log(); // Logs the data to the console
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };
  const fetchConfiguration = async () => {
    try {
      // Using the endpoint to fetch trending data from TMDB
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url+"original"));
      // console.log(response.data.images.secure_base_url+"original"); // Logs the data to the console
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);



  return (
    <>
      <main className="pb-14 lg:pb-0">
        <Header />
        <div className="min-h-[90vh]">
          <Outlet />
        </div>
        <Footer />
        <MobileNavigation />
      </main>
    </>
  );
}

export default App;
