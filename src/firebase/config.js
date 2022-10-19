import { initializeApp, getFirestore } from './exports.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDpqgJjoK34Ci6UNeTLQqDL8qNN-yjQzrg',
  authDomain: 'espectro-social-network.firebaseapp.com',
  databaseURL: 'https://espectro-social-network-default-rtdb.firebaseio.com',
  projectId: 'espectro-social-network',
  storageBucket: 'espectro-social-network.appspot.com',
  messagingSenderId: '292875700930',
  appId: '1:292875700930:web:ec15779bc2599423ae895b',
  measurementId: 'G-3QPGF7SHTP',
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
