import React from 'react';

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { commentCount, favoriteCount, likeCount, viewCount } = statistics;
  return (
    <div className="p-2 m-2 w-64 shadow-lg rounded-lg">
      <img src={thumbnails?.medium?.url} alt="image " className="rounded-lg" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
