import React, { useState } from "react";

const Form = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movieName: "",
  //   };
  // }

  const [movieName, setMovieName] = useState("");

  const myChangeHandler = (event) => {
    console.log('myChangeHandler: ', event.target.value)
    setMovieName(event.target.value);
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    console.log('mySubmitHandler-movieName: ', movieName)

    props.onSearcMovieName(movieName);
  };

  return (
    <form onSubmit={mySubmitHandler}>
      <label>Movie Title:</label>
      <input
        type="text"
        name="movieName"
        onChange={myChangeHandler}
        placeholder="Movie name..."
      />
      <input type="submit" value="Search" />
      {props.serverResponse.Response === "False" && movieName !=="" && (
        <div>
          <p>OMDB Response: {props.serverResponse.Error}</p>
          <p>Try againe!</p>
        </div>
      )}
    </form>
  );
};

export default Form;
