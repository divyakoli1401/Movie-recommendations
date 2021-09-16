import React, { useState } from "react";
import "./styles.css";
import Logo from "./images/movie.png";

const moviesDictionary = {
  Comedy: [
    {
      name: "Despicable me",
      description:
        "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.",
      rating: "5/5"
    },
    {
      name: "Rush Hour",
      description:
        "When a Chinese consul's young daughter is kidnapped, Hong Kong Detective Lee must team up with Carter, a loud-mouthed LA detective. Distinctive work styles and cultural differences pose hiccups.",
      rating: "4/5"
    },
    {
      name: "We're The Millers",
      description:
        "David, a drug dealer, is forced by his boss to smuggle drugs from Mexico. He hires a stripper, a petty thief and a teenage neighbour and forms a fake family to help him smuggle the drugs.",
      rating: "4.5/5"
    },
    {
      name: "Home Alone",
      description:
        "Home Alone is a series of American Christmas family comedy films originally created by John Hughes, and directed by Chris Columbus, Raja Gosnell, Rod Daniel, and Peter Hewitt.",
      rating: "5/5"
    },
    {
      name: "50 First Dates",
      description:
        "Henry, a vet, falls in love with Lucy, who suffers from short-term memory loss. Lucy can never remember meeting him, so Henry has to romance her afresh each day and pray that she too loves him.",
      rating: "4.5/5"
    }
  ],
  Action: [
    {
      name: "Deadpool",
      description:
        "Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.",
      rating: "5/5"
    },
    {
      name: "Men in Black",
      description:
        "Men in Black is a series of American science fiction action comedy films directed by Barry Sonnenfeld, and based on the Malibu / Marvel comic book series The Men in Black by Lowell Cunningham, which was itself based on the conspiracy theory",
      rating: "4.5/5"
    },
    {
      name: "Inception",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      rating: "5/5"
    },
    {
      name: "The Hunger Games",
      description:
        "The Hunger Games film series is composed of science fiction dystopian adventure films, based on The Hunger Games trilogy of novels by the American author Suzanne Collins. The movies are distributed by Lionsgate and produced by Nina Jacobson and Jon Kilik. ",
      rating: "4.5/5"
    },
    {
      name: "Wonder Woman",
      description:
        "Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind.",
      rating: "5/5"
    }
  ],
  Romantic: [
    {
      name: "Before Sunset",
      description:
        "Celine and Jesse, who met nine years ago in Vienna, cross paths again for a single day in Paris. Together, they try to find out what might have happened if they had acted on their feelings back then.",
      rating: "4.5/5"
    },
    {
      name: "About time",
      description:
        "Like all the men in his family, Tim Lake possesses the power to travel in time. With the advice of his father, he uses his special ability to pursue his romantic interest, Mary.",
      rating: "4/5"
    },
    {
      name: "Begin Again",
      description:
        "Gretta, a budding songwriter, finds herself alone after her boyfriend Dave ditches her. Her life gains purpose when Dan, a record label executive, notices her talent.",
      rating: "4/5"
    },
    {
      name: "Eternal Sunshine of spotless Mind",
      description:
        "Joel and Clementine begin a relationship after a train journey together. However, having had their memories clinically erased, they do not remember their tumultuous past.",
      rating: "4.5/5"
    },
    {
      name: "Night in Paris",
      description:
        "Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.",
      rating: "4.5/5"
    }
  ]
};
const moviesArray = Object.keys(moviesDictionary);
export default function App() {
  const [selectedGenre, setGenre] = useState("Comedy");
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
                <div className="movie-description">{movie.description}</div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
