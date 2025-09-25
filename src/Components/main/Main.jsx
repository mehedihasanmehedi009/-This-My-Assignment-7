import React, { use } from "react";

import Cart from "../Cart/Cart";
import Count from "../Count/Count";

const Main = ({ FetchName }) => {
  const CardLink = use(FetchName);
  console.log(CardLink);
  return (
    <>
      <Count></Count>
      <div className="container mx-auto ">
        <div>
          {" "}
          <h1 className="text-2xl md:text-4xl font-bold p-3">Task Status</h1>
        </div>
        <div
          className="grid col-span-3 
     grid-cols-2 "
        >
          {CardLink.map((CARD) => (
            <Cart CARD={CARD}></Cart>
          ))}
        </div>
        <div>
          <div className=" flex justify-between container mx-auto mb-4">
            <h1 className="text-2xl md:text-4xl font-bold p-3">
              Customer Tickets
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
