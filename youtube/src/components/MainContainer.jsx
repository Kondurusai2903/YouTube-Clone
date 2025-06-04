import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const { isMenuOpen } = useSelector((state) => state.generalSlice);
  return (
    <div className={`${!isMenuOpen ? 'col-span-12' : 'col-span-11'}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
