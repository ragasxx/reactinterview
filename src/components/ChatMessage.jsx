import React from "react";

const ChatMessage = ({ name, photo, message }) => {
  return (
    <div className="flex gap-4 items-center p-2 m-2">
      <div className="flex items-center gap-2">
        <img className="w-10 rounded-full" src={photo} alt={name} />
        <span className="text-white">{name}</span>
      </div>
      <div className="text-white font-serif text-sm">{message}</div>
    </div>
  );
};

export default ChatMessage;
