import "./App.css";
import React, { Suspense } from "react";
import Nevber from "./Components/Nevber/Nevber";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";
const FetchName = fetch("./Cart.json").then((res) => res.json());

const App = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Nevber></Nevber>

        <Suspense
          fallback={
            <span class="loading loading-spinner text-secondary"></span>
          }
        >
          <Main FetchName={FetchName}></Main>
        </Suspense>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
