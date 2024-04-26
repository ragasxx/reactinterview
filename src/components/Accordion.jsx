import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "title 1",
    body: "This is the first item accordions body",
  },
  {
    title: "title 2",
    body: "This is the second item accordions body",
  },
  {
    title: "title 3",
    body: "This is the third item accordions body",
  },
];

const Accordion = () => {
  const [isOpenIndex, setIsOpenIndex] = useState(-1);

  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 h-screen">
      <div className="w-1/2 m-auto">
        {data.map((item, i) => (
          <AccordionItem
            key={i}
            title={item.title}
            body={item.body}
            isOpen={i === isOpenIndex}
            setIsOpen={() => {
              i === isOpenIndex ? setIsOpenIndex(-1) : setIsOpenIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
