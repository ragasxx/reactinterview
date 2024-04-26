import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => window.removeEventListener("scroll", infiniteScroll);
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setData((memes) => [...memes, ...json.memes]);
    setIsLoading(false);
  };

  const infiniteScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      getData();
    }
  };

  return (
    <div className="flex flex-wrap bg-gradient-to-b from-black to-gray-900">
      {data.map((meme, i) => (
        <MemeCard key={i} meme={meme} />
      ))}
      {isLoading && <Shimmer />}
    </div>
  );
};

export default Home;
