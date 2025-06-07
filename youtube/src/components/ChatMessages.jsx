import React from 'react';
import { Avatar } from '@mui/material';
const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar />
      <p>
        <span className="font-bold text-md">{name}</span> {message}
      </p>
    </div>
  );
};

export default ChatMessages;
