import "./App.css";
import { ToastContainer } from "react-toastify";
import React, { Suspense, useState } from "react";
import Nevber from "./Components/Nevber/Nevber";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";
const FetchName = fetch("./Cart.json").then((res) => res.json());

const App = () => {
  const [Card, setCard] = useState([]);
  const [CardPlayer, setCardPlayer] = useState([]);

  return (
    <>
      <Nevber></Nevber>
      <div>
        <Suspense
          fallback={
            <span class="loading loading-spinner text-secondary"></span>
          }
        >
          <Main
            FetchName={FetchName}
            setCardPlayer={setCardPlayer}
            CardPlayer={CardPlayer}
            setCard={setCard}
            Card={Card}
          ></Main>
        </Suspense>
      </div>
      <Footer></Footer> <ToastContainer />
    </>
  );
};

export default App;
