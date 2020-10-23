import React, { useState, useEffect} from "react";
import Pagination from "./Pagination";

const MovieResult = (props) => {
  // constructor(props) {
  //   super(props);

  //   state = {
  //     movieList: [],
  //     currentPage: 0,
  //     totalPages: 0,
  //     resultPerPage: 10,
  //     disabledButtons: [],
  //     apikey: "7535d36f",
  //     basicUrl: "https://www.omdbapi.com/?apikey=",
  //   };
  // }
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const resultPerPage = 10
  // eslint-disable-next-line
  const [disabledButtons, setDisabledButtons] = useState([]);
  const apikey= "7535d36f"
  const basicUrl= "https://www.omdbapi.com/?apikey="
  // eslint-disable-next-line
  const [error, setError] = useState("");

  const currentPageHandler = (number) => {
    setCurrentPage(number, () => {
      fetchReqest();
    });
  };

  const clickHandler = (movie) => {     
    props.movieNominationsHandler(movie);
    setDisabledButtons(props.disabledButtons);
  };

  const omdbUrl = () => {
    return basicUrl
      .concat(apikey)
      .concat("&type=movie&s=")
      .concat(props.movieName)
      .concat("&page=")
      .concat(currentPage + 1);
  };

  const fetchReqest = () => {
    fetch(omdbUrl(), [])
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.Response.toLowerCase() === "true") {
            setMovieList(result.Search);
            props.serverResponseHandler(result);
            setTotalPages(
              Math.ceil(props.serverResponse.totalResults / resultPerPage)
            );
          } else {
            setMovieList([]);
            setCurrentPage(0);
            setTotalPages(0);
            props.serverResponseHandler(result);
          }
        },
        (error) => {
          setError(error);
        }
      );
  };
// eslint-disable-next-line
  useEffect(() => {fetchReqest()}, [props.movieName]);

  return (
    <div className={props.classVar}>
      {props.movieName ? (
        <h2>Results for "{props.movieName}"</h2>
      ) : (
        <h2>Result</h2>
      )}
      <div className="">
        <ul className="list-group">
          {movieList.map((movie, index) => (
            <li key={index} className="row list-group-item d-flex justify-content-between align-items-center">
              <img src={`${movie.Poster}`} className="col-4 img-thumbnail" alt={movie.Title}></img>
              <p className="col-4">
                {movie.Title} ({movie.Year})
              </p>
              <button className="col-4"
                onClick={() => {
                  clickHandler(movie);
                }}
                disabled={props.disabledButtons.includes(movie.imdbID)}
              >
                Nominate
              </button>
            </li>
          ))}
        </ul>
      </div>
      {totalPages !== 0 && (
        <Pagination
          currentPage={currentPage}
          currentPageHandler={currentPageHandler}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default MovieResult;
