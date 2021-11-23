import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Rows from "../Rows";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Rows
        title="Netflix Orignals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchURL={requests.fetchTrending} />
      <Rows title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
