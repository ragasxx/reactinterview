import React from "react";

const MemeCard = ({ meme }) => {
  const { title, author, url } = meme;
  return (
    <div className="w-[250px] border border-gray-600 rounded-lg m-3 p-2 shadow-gray-500 ">
      <img src={url} alt={title} className="w-full h-56" />
      <p className="text-md font-semibold text-white">{title}</p>
      <p className="text-sm text-slate-300">{author}</p>
    </div>
  );
};

export default MemeCard;
