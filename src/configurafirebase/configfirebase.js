import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCywiXDYbImiYJLPyDWBmt0CgbRaj7tmB4',
  authDomain: 'social-network-61341.firebaseapp.com',
  projectId: 'social-network-61341',
  storageBucket: 'social-network-61341.appspot.com',
  messagingSenderId: '454687567402',
  appId: '1:454687567402:web:56105ff5bbee3c049a1d53',
  measurementId: 'G-Y9LXMG6EKR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
