import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/slices/generalSlice';

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  const fetchSearchSuggestions = async () => {
    console.log('api call - ' + searchQuery);
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchSearchSuggestions();
    }, 500);
    return () => {
      console.log('clearing the interval - ' + timeOut);
      clearTimeout(timeOut);
    };
  }, [searchQuery]);
  return (
    <div>
      <div className="grid grid-flow-col justify-between items-center p-2 m-2 ">
        <div className="flex gap-4 items-center col-span-1">
          <RxHamburgerMenu
            size={24}
            onClick={handleMenuToggle}
            className="cursor-pointer"
          />
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: '#ff0000' }}
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <div className="relative">
              <p className="text-2xl">YouTube</p>
              <span className="absolute -top-2 -right-4">IN</span>
            </div>
          </div>
        </div>
        <div className="flex col-span-2 gap-4 ">
          <div className="flex w-full relative">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none "
            />
            <button
              className="px-4 bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200"
              type="button"
            >
              <SearchIcon
                sx={{
                  height: 30,
                  width: 30,
                }}
              />
            </button>
            {searchQuery && (
              <div className="absolute top-10 left-5 bg-white mt-2 w-96">
                <ul flex="flex gap-16">
                  <li>iphone</li>
                  <li>iphone1</li>
                  <li>iphone2</li>
                  <li>iphone3</li>
                  <li>iphone4</li>
                  <li>iphone5</li>
                  <li>iphone5</li>
                </ul>
              </div>
            )}
          </div>

          <button type="button" className="bg-gray-400 rounded-full p-2">
            <KeyboardVoiceIcon color="white" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 col-span-1">
          <button className="px-4 py-2 bg-gray-300 rounded-4xl">
            + Create
          </button>
          <div className="relative">
            <NotificationsNoneIcon
              sx={{
                height: 30,
                width: 30,
              }}
            />
            <span className="absolute -top-1 -right-2 bg-red-600 text-sm text-white rounded-full px-1">
              8+
            </span>
          </div>

          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Head;
