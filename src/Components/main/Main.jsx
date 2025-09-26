import React, { use } from "react";

import Cart from "../Cart/Cart";
import Count from "../Count/Count";

const Main = ({ FetchName }) => {
  const CardLink = use(FetchName);
  console.log(CardLink);
  return (
    <>
      <Count></Count>

      <div className=" flex justify-between container mx-auto mb-4">
        <h1 className="text-2xl md:text-4xl font-bold p-3">Customer Tickets</h1>
      </div>

      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4   ">
        <div className=" col-span-1 md:col-span-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {CardLink.map((CARD) => (
              <Cart CARD={CARD}></Cart>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 ">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold p-3">Task Status</h1>
            <p>Select a ticket to add to Task Status</p>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold p-3">
              {" "}
              Resolved Task{" "}
            </h1>
            <p>No resolved tasks yet.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
