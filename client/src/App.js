import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { useRegStatus } from "./hooks/regstatus.hook";
import { RegisterContext } from "./context/RegisterContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/js/popper.min.js";

function App() {
  const { token, login, logout, userId, isReady } = useRegStatus();
  const isRegistered = !!token;
  const routes = useRoutes(isRegistered);

  if (!isReady) {
    return <Loader />;
  }

  return (
    <RegisterContext.Provider
      value={{ token, login, logout, userId, isRegistered }}
    >
      <Router>
        {/* {isRegistered && <Navbar />} */}
        <Navbar isRegistered={isRegistered} />
        {console.log("isRegistered: ", isRegistered)}
        <div className="container">{routes}</div>
        <Footer />
      </Router>
    </RegisterContext.Provider>
  );
}

export default App;
