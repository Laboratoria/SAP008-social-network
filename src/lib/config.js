import {
  initializeApp,
  getFirestore,
} from './exports';

const firebaseConfig = {
  apiKey: 'AIzaSyAjR0KcwHmhPnls3pAHrUOsuDf5XQUUW8w',
  authDomain: 'social-network-c5f64.firebaseapp.com',
  projectId: 'social-network-c5f64',
  storageBucket: 'social-network-c5f64.appspot.com',
  messagingSenderId: '95108055106',
  appId: '1:95108055106:web:1ec06cadea77269615addb',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
