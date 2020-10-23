import React from "react";

const MovieNominations = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  //  }

  const clickHandler = (index) => {
    props.movieRemoveNominHandler(index);
  };

  return (
    <div className={props.classVar}>
      <h2>Nominations</h2>
      {props.isFiveNominants && (
        <div className="five nominates">
          <h3>Thank you for your choice the 5 Nominates!</h3>
        </div>
      )}
      {console.log('MovieNominants-props.movieNominants: ', props.movieNominants)}
      {props.movieNominants.map((movie, index) => (
        <li key={index}>
          <div
            className="movie-img"
            style={{ backgroundImage: `url(${movie.Poster})` }}
          ></div>
          <p className="movie-dscr">
            {movie.Title} ({movie.Year}) Nominate
          </p>
          <button onClick={clickHandler(movie.imdbID)}>Remove</button>
        </li>
      ))}
    </div>
  );
};

export default MovieNominations;
