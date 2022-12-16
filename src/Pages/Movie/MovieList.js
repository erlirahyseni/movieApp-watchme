import React from "react";
import "./MovieList.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie) => (
        <div className="movies-list-content">
          <img src={movie.Poster} alt="movie"></img>
          <div onClick={() => props.handleFavouritesClick(movie)}>
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
