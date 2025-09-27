import React from "react";
const SortCard = ({ CardPlayer }) => {
  return (
    <div>
      <div className=" mt-5 ml-8">
        <h1 className=" md:text-black   text-2xl md:text-3xl  font-bold ">
          Task Status
        </h1>
      </div>
      {CardPlayer.map((title) => (
        <div className="ml-8">
          <div className=" mt-4 p-4 text-center bg-white shadow-md  mr-7 md:mr-0  rounded-2xl">
            <h2 className="font-[400] text-2xl">{title.title}</h2>
            <button className=" rounded-2xl mt-3 cursor-pointer text-white bg-green-600 w-11/12 text-[20px] p-3">
              Complete
            </button>
          </div>
        </div>
      ))}
      <div className="mt-5 ml-8 mb-8 ">
        <h1 className="  text-2xl  md:text-black   md:text-3xl font-bold       ">
          Resolved Task
        </h1>
        <p className="  md:text-black  mb-4 md:mb-0">No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default SortCard;
