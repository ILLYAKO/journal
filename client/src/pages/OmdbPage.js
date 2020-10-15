import React, {useState } from "react";
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

  const movieNameHandler = (name) => {
    // this.setState({ movieName: name });
    setMovieName(name);
  };

  const serverResponseHandler = (serverResponse) => {
    // this.setState({ serverResponse: serverResponse });
    setServerResponse(serverResponse);
  };

  const movieNominationshandler = async (movie) => {
    // if (this.state.movieNominants.length <= 4) {
    if (movieNominants.length <= 4) {
      // await this.setState({
      //   movieNominants: [...this.state.movieNominants, movie],
      //   disabledButtons: [...this.state.disabledButtons, movie.imdbID],
      // });
      await setMovieNominants(...movieNominants, movie);
      await setDisabledButtons(...disabledButtons, movie.imdbID);
    } else {
      setIsFiveNominants(true);
    }
    movieNominants.length <= 4
      ? setIsFiveNominants(false)
      : setIsFiveNominants(true);
  };

  const movieRemoveNominHandler = (imdbIDNumber) => {
    let arrayM = [...movieNominants];
    if (imdbIDNumber !== -1) {
      arrayM.splice(imdbIDNumber, 1);
      setMovieNominants(arrayM);
      setIsFiveNominants(false);
    }
    setDisabledButtons(
      setDisabledButtons.filter((item) => {
        return item !== imdbIDNumber;
      })
    );
  };

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <MovieSearchForm
        onSearcMovieName={movieNameHandler}
        serverResponse={serverResponse}
      />
      <div className="row result nomination">
        <MovieResult
          serverResponseHandler={serverResponseHandler}
          movieName={movieName}
          movieNominationshandler={movieNominationshandler}
          disabledButtons={disabledButtons}
          serverResponse={serverResponse}
        />
        <MovieNominations
          movieNominants={movieNominants}
          isFiveNominants={isFiveNominants}
          movieRemoveNominHandler={movieRemoveNominHandler}
        />
      </div>
    </div>
  );
};
