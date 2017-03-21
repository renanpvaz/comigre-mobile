// If you're running on a device or in the Android simulator be sure to change
// 192.168.0.10
// 192.168.241.87
let METEOR_URL = 'ws://comigr-wrmqepxrhg.now.sh/websocket';
if (process.env.NODE_ENV === 'production') {
  METEOR_URL = ''; // your production server url
}

export const settings = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default settings;
