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
     <div className="">
     <ul className="list-group">
     {props.movieNominants.map((movie, index) => (

      <li key={index} className="row list-group-item d-flex justify-content-between align-items-center">
        <img src={`${movie.Poster}`} className="col-4 img-thumbnail" alt={movie.Title}></img>
 
          <p className="col-4">
            {movie.Title} ({movie.Year}) Nominate
          </p>
          <button className="col-4"
          //  onClick={clickHandler(movie.imdbID)}
          onClick={ ()=>{ props.movieRemoveNominHandler(movie.imdbID)}}
          >Remove</button>
        </li>

))}

     </ul>

     </div>


    </div>
  );
};

export default MovieNominations;
