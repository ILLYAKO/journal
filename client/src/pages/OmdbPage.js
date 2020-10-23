import React, { useState } from "react";
import MovieSearchForm from "../components/MovieSearchForm";
import MovieResult from "../components/MovieResult";
import MovieNominations from "../components/MovieNominations";

export const OmdbPage = () => {
  const [serverResponse, setServerResponse] = useState({
    Response: "",
    Error: "",
    Search: [],
    totalResults: "",
  });
  const [movieName, setMovieName] = useState("");
  const [movieNominants, setMovieNominants] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [isFiveNominants, setIsFiveNominants] = useState(false);

  // const movieNameHandler = (name) => {
  //   setMovieName(name);
  // };

  // const serverResponseHandler = (serverResponse) => {
  //   // this.setState({ serverResponse: serverResponse });
  //   setServerResponse(serverResponse);
  // };

  const movieNominationsHandler =async (movie) => {
    console.log('movieNominationsHandler')
    // if (this.state.movieNominants.length <= 4) {
    if (movieNominants.length <= 4) {
      console.log('movieNominationsHandler-1')
      // await this.setState({
      //   movieNominants: [...this.state.movieNominants, movie],
      //   disabledButtons: [...this.state.disabledButtons, movie.imdbID],
      // });
      // await setMovieNominants(...movieNominants, movie);
     
      await setMovieNominants([...movieNominants, movie])
      await setDisabledButtons([...disabledButtons,movie.imdbID])
    } else {
      setIsFiveNominants(true);
      console.log('movieNominationsHandler-2')
    }
    movieNominants.length <= 4
      ? setIsFiveNominants(false)
      : setIsFiveNominants(true);
      console.log('OmdbPage-movieNominationsHandler[]: ', movieNominants)
  };

  const movieRemoveNominHandler = (imdbIDNumber) => {
    let arrayM = [...movieNominants];
    if (imdbIDNumber !== -1) {
      arrayM.splice(imdbIDNumber, 1);
       setMovieNominants(arrayM);
       setIsFiveNominants(false);
    }
     setDisabledButtons(disabledButtons.filter((item) => {return item !== imdbIDNumber}));
  };

  return (
    <div className="container text-center ">
      <h1>OMDB List</h1>
      <MovieSearchForm
        onSearcMovieName={setMovieName}
        serverResponse={serverResponse}
      />
      <div className="row bg-danger">
        <MovieResult
          classVar={"col bg-warning"}
          serverResponse={serverResponse}
          serverResponseHandler={setServerResponse}
          movieName={movieName}
          movieNominationsHandler={movieNominationsHandler}
          disabledButtons={disabledButtons} 
          setDisabledButtons={setDisabledButtons}  
        />      
        <MovieNominations
          classVar={"col bg-danger"}
          movieNominants={movieNominants}
          isFiveNominants={isFiveNominants}
          movieRemoveNominHandler={movieRemoveNominHandler}
        />
      </div>
    </div>
  );
};
