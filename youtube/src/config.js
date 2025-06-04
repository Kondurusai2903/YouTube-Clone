const YOU_TUBE_API_KEY = 'AIzaSyDtQc9MfL7XrBsKQO5l9WXxCzWzNi5xyp0';

const YOU_TUBE_API_URL =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=` +
  YOU_TUBE_API_KEY;

export default YOU_TUBE_API_URL;
