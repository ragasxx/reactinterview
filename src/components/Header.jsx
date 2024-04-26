import React from "react";

const Header = () => {
  return (
    <div className="bg-black h-20 flex justify-around text-white">
      <a href="/" className="text-md p-2 m-2">
        Home
      </a>
      <a href="/accordion" className="text-md p-2 m-2">
        Accordion
      </a>
      <a href="/slider" className="text-md p-2 m-2">
        Slider
      </a>
      <a href="/liked" className="text-md p-2 m-2">
        Liked
      </a>
    </div>
  );
};

export default Header;
