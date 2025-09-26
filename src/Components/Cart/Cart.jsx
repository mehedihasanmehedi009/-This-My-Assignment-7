import React from "react";
import Img from "../../assets/ri_calendar-line.png";

const Cart = ({ CARD }) => {
  return (
    <div>
      <div
        className=" bg-white shadow-md
       cursor-pointer  m-2 rounded-2xl"
      >
        <div className="m-5">
          <div className="flex justify-between pt-3  ">
            <h1 className="text-[20px] font-bold">{CARD.title}</h1>
            <span
              className={`font-bold items-center ${
                CARD.status == "In-Progress"
                  ? `  text-yellow-500 bg-amber-100 p-2 rounded-md`
                  : CARD.status == "Open"
                  ? "text-green-600 bg-green-100 p-2  rounded-md"
                  : "text-red-800 bg-red-100 "
              }`}
            >
              {CARD.status}
            </span>
          </div>
          <h1 className="text-gray-500 w-[400px]">{CARD.description}</h1>
          <div className="flex justify-between ">
            <h1
              className={` ${
                CARD.priority == "HIGH PRIORITY"
                  ? "text-red-500  "
                  : CARD.priority == "MEDIUM PRIORITY"
                  ? "text-yellow-500  "
                  : " text-green-500 bg "
              }  mt-2  mb-4 font-semibold`}
            >
              {" "}
              {CARD.priority}
            </h1>
            <div
              className="flex items-center
          "
            >
              <h2 className="text-gray-500 mr-2  mb-4"> {CARD.customer}</h2>
              <img className="mr-2  mb-4" src={Img} alt="" />

              <h2 className=" mr-3 text-gray-500  mb-4">{CARD.createdAt}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
