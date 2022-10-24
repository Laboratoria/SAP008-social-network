import login from './pages/login/login.js';

import signup from './pages/signup/signup.js';

import timeline from './pages/timeline/timeline.js';

export const redirect = (route) => {
  window.location.hash = route;
};

export default {
  login,
  signup,
  timeline,
};
