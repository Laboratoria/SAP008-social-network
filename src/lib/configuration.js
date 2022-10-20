import { initializeApp } from './exports.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCeyHG_CqM2GbG5cF1QNHb4seKQoJ4uJDA',
  authDomain: 'rebu-social-network.firebaseapp.com',
  projectId: 'rebu-social-network',
  storageBucket: 'rebu-social-network.appspot.com',
  messagingSenderId: '988363110012',
  appId: '1:988363110012:web:43365a6efad711699bfbf9',
};

export const app = initializeApp(firebaseConfig);
