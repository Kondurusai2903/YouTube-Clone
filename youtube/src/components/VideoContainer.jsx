import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import YOU_TUBE_API_URL from '../config';
import axios from 'axios';

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    try {
      const response = await axios.get(YOU_TUBE_API_URL);
      setVideoData(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(videoData);
  return (
    <div className="flex flex-wrap">
      {videoData.map((video, ind) => (
        <VideoCard key={ind} info={video} />
      ))}

      <h1>hello</h1>
    </div>
  );
};

export default VideoContainer;
