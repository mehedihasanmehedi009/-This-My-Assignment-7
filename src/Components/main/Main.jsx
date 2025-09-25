import React from "react";

const Main = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[20px] my-[50px] p-5">
          <div className=" bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] w-full h-64 box  ">
            <h1 className="font-bold md:text-[35px] ">Pending</h1>
            <p className="font-semibold md:text-3xl">0</p>
          </div>
          <div className=" bg-[linear-gradient(90deg,rgba(84,207,104,1),rgba(0,130,122,1)_100%)] w-full h-64  box">
            <h1 className="font-bold md:text-[35px] ">Submitted</h1>
            <p className="font-semibold md:text-3xl">0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
