import React, { useState } from "react";
import { HeartIcon, SpinnerIcon } from "../icons";

const Liked = () => {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async () => {
    setIsFetching(true);
    setError(null);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: liked ? "unlike" : "like" }),
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        setError(res.message);
        return;
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900  h-screen flex justify-center items-center">
      <div className="w-[300px]">
        <button
          className={
            liked
              ? "bg-red-600 flex items-center justify-around text-white w-36 h-12 rounded-2xl hover:text-red-600 hover:border hover:border-red-600 hover:bg-white"
              : "w-36 h-12 flex items-center justify-around border border-gray-600 rounded-2xl text-gray-600 hover:text-red-600 hover:border hover:border-red-600 hover:bg-white"
          }
          onClick={handleLikeUnlike}
        >
          {isFetching ? <SpinnerIcon /> : <HeartIcon />}
          {liked ? "Liked" : "Like"}
        </button>
        {error && (
          <p className="text-xl p-2 mt-4 font-bold text-slate-200 font-sans">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Liked;
