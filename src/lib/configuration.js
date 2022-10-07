import { initializeApp } from './firebase.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDHGk3ieHViluVOH5JSgX9Pfqn_jyzvQig',
  authDomain: 'social-networking-lab.firebaseapp.com',
  projectId: 'social-networking-lab',
  storageBucket: 'social-networking-lab.appspot.com',
  messagingSenderId: '7195647788',
  appId: '1:7195647788:web:97deb70de0cbb23aac9689',
  measurementId: 'G-3D1BPNVQ1E',
};

export const app = initializeApp(firebaseConfig);