import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzTikQQb1O_s-qhMB6KdlS8oHjUW0Vty0",
  authDomain: "rede-social-inspire.firebaseapp.com",
  projectId: "rede-social-inspire",
  storageBucket: "rede-social-inspire.appspot.com",
  messagingSenderId: "938258251237",
  appId: "1:938258251237:web:7d5985698015d37027c30c",
  measurementId: "G-LCSEC2B3HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export{app}