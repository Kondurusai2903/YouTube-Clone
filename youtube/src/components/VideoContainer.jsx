import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import YOU_TUBE_API_URL from '../config';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      {/* <VideoCard info={videoData[0]} />
      <VideoCard info={videoData[0]} />
      <VideoCard info={videoData[0]} /> */}
      {videoData.map((video, ind) => (
        <Link to={'/watch?v=' + video.id}>
          <VideoCard key={ind} info={video} />
        </Link>
      ))}

      {/* <h1>hello</h1> */}
    </div>
  );
};

export default VideoContainer;
