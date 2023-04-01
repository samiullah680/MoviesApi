import React, { useEffect, useState } from "react";

function Card() {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  console.log(name, rating);
  function getMoviesData() {
    fetch("http://localhost:7895/api/movies")
      .then((resp) => resp.json())
      .then((data) => setMovies(data.data));
  }

  function postMovies() {
    fetch("http://localhost:7895/api/movies", {
      method: "POST",
      body: JSON.stringify({ name, rating }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data.message));
  }

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          postMovies();
        }}
      >
        <label>
          <span>Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Rating:</span>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <button>Add Movies</button>
      </form> */}
      <div className="card-container">
        {movies.map((movie) => {
          return (
            <div className="card">
              <h3>Name: {movie.name}</h3>
              <h3>Rating: {movie.rating}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
