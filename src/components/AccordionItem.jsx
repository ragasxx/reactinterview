import React from "react";

const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="border border-gray-800 mb-5">
      <div className="flex justify-between p-2 m-5" onClick={() => setIsOpen()}>
        <span className="text-xl font-semibold font-serif text-white">
          {title}
        </span>
        <span className="cursor-pointer text-2xl">⬇️</span>
      </div>
      {isOpen && <p className="text-md font-sans text-white p-2 ">{body}</p>}
    </div>
  );
};

export default AccordionItem;
