import React from "react";

const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="w-[250px] bg-gray-800 drop-shadow-md border border-black rounded-lg m-3 p-2"
      >
        <div className="animate-pulse w-full h-56 bg-gray-500"></div>

        <div className="space-y-2 my-2">
          <div className="animate-pulse w-3/4 h-3 bg-gray-500"></div>
          <div className="animate-pulse w-full h-3 bg-gray-500"></div>
          <div className="animate-pulse w-2/3 h-3 bg-gray-500"></div>
        </div>
      </div>
    ));
};

export default Shimmer;
