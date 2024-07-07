import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const s = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(s);
  }, [searchText]);

  const fetchData = async () => {
    // if cache send data from here
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      const res = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${searchText}`
      );
      const data = await res.json();
      cache[searchText] = data[1];
      setSearchResults(data[1]);
    }
  };

  console.log(cache);

  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 h-screen flex flex-col justify-center items-center">
      <div className="mb-44 relative">
        <input
          className={
            searchResults.length === 0
              ? "outline-none p-2 rounded-xl  w-[400px] bg-slate-800 text-slate-200"
              : "outline-none p-2 rounded-tl-xl rounded-tr-xl w-[400px] bg-slate-800 text-slate-200"
          }
          type="text"
          placeholder="Enter Something"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsResultVisible(true)}
          onBlur={() => setIsResultVisible(false)}
        />

        {isResultVisible && (
          <ul
            className={
              searchResults.length > 0
                ? "pt-3 px-3 text-slate-200 bg-slate-900 absolute w-[400px]"
                : "text-slate-200 bg-slate-900 absolute w-[400px]"
            }
          >
            {searchResults.map((res, i) => (
              <li className="p-1 hover:bg-slate-700 cursor-pointer" key={i}>
                {res}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
