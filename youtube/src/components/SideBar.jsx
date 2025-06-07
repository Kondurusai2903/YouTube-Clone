import React from 'react';
import MenuItems from './MenuItems';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const { isMenuOpen } = useSelector((state) => state.generalSlice);
  return (
    isMenuOpen && (
      <div className="col-span-2 w-32 h-[100%]">
        <MenuItems />
      </div>
    )
  );
};

export default SideBar;
