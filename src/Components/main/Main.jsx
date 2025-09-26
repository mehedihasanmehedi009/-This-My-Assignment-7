import React, { use } from "react";

import Cart from "../Cart/Cart";
import Count from "../Count/Count";

const Main = ({ FetchName }) => {
  const CardLink = use(FetchName);
  console.log(CardLink);
  return (
    <>
      <Count></Count>

      <div
        className=" flex justify-between container mx-auto  mt-6
      "
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold  md:text-left ml-5 md:p-4   ">
            Customer Tickets
          </h1>
        </div>

        <div className="mr-[320px] ">
          <h1 className="text-2xl md:text-3xl font-bold p-3 md:block hidden ">
            Task Status
          </h1>
        </div>
      </div>

      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4   ">
        <div className=" col-span-1 md:col-span-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 p-4">
            {CardLink.map((CARD) => (
              <Cart CARD={CARD}></Cart>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 ">
          <div className="ml-6">
            <h1 className="text-2xl md:text-3xl font-bold    block md:hidden ">
              Task Status
            </h1>
            <p>No In-Progress tasks yet.</p>
          </div>
          <div className="ml-6">
            <h1 className="  text-2xl md:text-3xl font-bold    ">
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
