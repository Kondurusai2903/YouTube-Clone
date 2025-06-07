import React, { useEffect } from 'react';
import ChatMessages from './ChatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/slices/chatSlice';

const LiveChat = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.chatSlice);

  useEffect(() => {
    const i = setInterval(() => {
      // the api goes here
      dispatch(
        addMessage({
          name: 'Chethan',
          message: 'I am in hospital',
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col-reverse">
      {messages.length > 0 &&
        messages?.map((chat, ind) => (
          <ChatMessages key={ind} name={chat.name} message={chat.message} />
        ))}
    </div>
  );
};

export default LiveChat;
