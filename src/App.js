import React, { useState } from "react";
import "./styles.css";
import Logo from "./images/movie.png";

const moviesDictionary = {
  Comedy: [
    {
      name: "Despicable me",
      rating: "5/5"
    },
    { name: "Rush Hour", rating: "4/5" },
    {
      name: "We're The Millers",
      rating: "4.5/5"
    },
    {
      name: "Home Alone",
      rating: "5/5"
    },
    {
      name: "50 First Dates",
      rating: "4.5/5"
    }
  ],
  Action: [
    {
      name: "Deadpool",
      rating: "5/5"
    },
    {
      name: "Men in Black",
      rating: "4.5/5"
    },
    {
      name: "Inception",
      rating: "5/5"
    },
    {
      name: "The Hunger Games",
      rating: "4.5/5"
    },
    {
      name: "Wonder Woman",
      rating: "5/5"
    }
  ],
  Romantic: [
    {
      name: "Before Sunset",
      rating: "4.5/5"
    },
    {
      name: "About time",
      rating: "4/5"
    },
    {
      name: "Begin Again",
      rating: "4/5"
    },
    {
      name: "Eternal Sunshine of spotless Mind",
      rating: "4.5/5"
    },
    {
      name: "Night in Paris",
      rating: "4.5/5"
    }
  ]
};

const moviesArray = Object.keys(moviesDictionary);
export default function App() {
  const [selectedGenre, setGenre] = useState("Romantic");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <header>
        <h1>Movie Night</h1>
        <img src={Logo} alt="Logo" />
      </header>

      <p>Collection of some timeless movies</p>
      <div>
        {moviesArray.map((genre) => {
          return (
            <button key="genre" onClick={() => genreClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {moviesDictionary[selectedGenre].map((movie) => {
          return (
            <div className="container">
              <li key="movie" className="list-style">
                <div className="movie-name">{movie.name}</div>
                <div className="movie-rating">{movie.rating}</div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
