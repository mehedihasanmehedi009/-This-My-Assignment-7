import React from "react";
import Vector1 from "../../assets/vector1.png";
import Group1 from "../../assets/Group 1.png";
const Count = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] my-[50px] p-4">
          <div className=" bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]  w-full h-60  rounded-md">
            <div className="flex justify-between  ">
              <div>
                <img
                  className="  md:block hidden w-[290px]    "
                  src={Vector1}
                  alt=""
                />
              </div>
              <div className=" text-stone-200 h-[240px] flex  flex-col items-center justify-center ">
                <h1 className="font-bold  text-3xl ">In-Progress</h1>
                <p className="font-semibold text-4xl">0</p>
              </div>
              <div>
                <img
                  className="  md:block hidden  w-[290px]"
                  src={Group1}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" bg-[linear-gradient(90deg,rgba(84,207,104,1),rgba(0,130,122,1)_100%)]   w-full h-60  rounded-md">
            <div className="flex justify-between  ">
              <div>
                <img
                  className="  md:block hidden w-[290px]    "
                  src={Vector1}
                  alt=""
                />
              </div>
              <div className=" text-stone-200 h-[240px] flex  flex-col items-center justify-center ">
                <h1 className="font-bold  text-3xl ">Resolved</h1>
                <p className="font-semibold text-4xl">0</p>
              </div>
              <div>
                <img
                  className="  md:block hidden  w-[290px]"
                  src={Group1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
