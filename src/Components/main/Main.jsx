import React, { use } from "react";
import Cart from "../Cart/Cart";
import Count from "../Count/Count";
import SortCard from "../SortCard/SortCard";
import { toast } from "react-toastify";

const Main = ({ FetchName, setCard, Card, setCardPlayer, CardPlayer }) => {
  const CardLink = use(FetchName);

  // console.log(CardPlayer);
  const HandleAdd = (b) => {
    toast("Complete");
    const newCard = [...Card, b];
    console.log(newCard);
    setCard(newCard);
    setCardPlayer([...CardPlayer, b]);
  };
  return (
    <>
      <Count Card={Card}></Count>

      <div
        className=" flex justify-between container mx-auto   
      "
      >
        <h1 className="text-2xl md:text-3xl font-bold  md:text-left ml-5 md:p-4    ">
          Customer Tickets
        </h1>
      </div>

      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-12 ">
        <div className=" col-span-1 md:col-span-8 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 w-full p-8 md:p-0 ">
            {CardLink.map((CARD) => (
              <Cart CARD={CARD} HandleAdd={HandleAdd}></Cart>
            ))}
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 ">
          <SortCard CardPlayer={CardPlayer}></SortCard>
        </div>
      </div>
    </>
  );
};

export default Main;
