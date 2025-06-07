import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openCloseMenu } from '../utils/slices/generalSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'), '===>');
  const videoId = searchParams.get('v');
  useEffect(() => {
    dispatch(openCloseMenu(false));
  }, []);
  return (
    <div className="flex">
      <div className="w-[70%]">
        <iframe
          className="m-4 rounded-xl"
          width="1000"
          height="500"
          src={'https://www.youtube.com/embed/' + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="w-full pr-4">
          <CommentsContainer />
        </div>
      </div>
      <div className="border w-full h-full">
        <div className="border border-amber-400 h-[500px] p-4  mt-4 mx-2 mb-2 bg-state-200 rounded-lg overflow-y-scroll ">
          <h1>
            <LiveChat />
          </h1>
        </div>
        <div className="border border-green-300 h-full m-2">
          Recommendations
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WatchPage;
