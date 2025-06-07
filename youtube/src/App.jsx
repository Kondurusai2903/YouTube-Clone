import React, { useState } from 'react';
import Head from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
{
  /**
   * Head
   * Body
   *   SideBar
   *     MenuItems
   *   MainContainer
   *     ButtonList
   *     VideoContainer
   *         VideoCard
   */
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Head />
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </>
  );
}

export default App;
