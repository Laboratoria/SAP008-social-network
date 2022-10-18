import { initializeApp } from './firebase.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB2o3fpqujNIeH6m0-YzEgbEoc9xFieVDk',
  authDomain: 'bateprato-social-network.firebaseapp.com',
  projectId: 'bateprato-social-network',
  storageBucket: 'bateprato-social-network.appspot.com',
  messagingSenderId: '414001246820',
  appId: '1:414001246820:web:f176e5eb081d19f0ac6571',
};

export const app = initializeApp(firebaseConfig);
