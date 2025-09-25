import React from "react";
import Img from "../../assets/ri_calendar-line.png";
const Cart = ({ CARD }) => {
  return (
    <div>
      {/* <div className=" flex justify-between container mx-auto mb-4">
        <h1 className="text-2xl md:text-4xl font-bold p-3">Customer Tickets</h1>
      
      </div> */}

      <div
        className=" bg-white shadow-md
       cursor-pointer  m-2 rounded-2xl"
      >
        <div className="m-5">
          <div className="flex justify-between   ">
            <span className="text-[18px ] font-bold mt-3 ">{CARD.title}</span>
            <span className="bg-green-200 rounded-lg text-green-600 p-[4px 12px 4px 12px] w-[100px] h-[32px] items-center mt-3">
              {CARD.status}
            </span>
          </div>
          <h1 className="text-gray-500 w-[400px]">{CARD.description}</h1>
          <div className="flex justify-between ">
            <h1 className="text-yellow-400  mt-2  mb-4"> {CARD.priority}</h1>
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
