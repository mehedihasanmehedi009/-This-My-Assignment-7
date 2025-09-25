import "./App.css";
import React from "react";
import Nevber from "./Components/Nevber/Nevber";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";

const App = () => {
  return (
    <>
      <div className="bg-gray-300">
        <Nevber></Nevber>

        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
