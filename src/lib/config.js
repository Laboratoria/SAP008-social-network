import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

//Configurando a firebase
const firebaseConfig = {
    apiKey: "AIzaSyCZJLz1dq8bI3mQvcOxXpbZXEj_dd7dwOE",
    authDomain: "social-network-mia.firebaseapp.com",
    projectId: "social-network-mia",
    storageBucket: "social-network-mia.appspot.com",
    messagingSenderId: "333033318484",
    appId: "1:333033318484:web:24c297d8e8efed871d65c1",
    measurementId: "G-KHPWJXZL63"
  };
  
  //iniciando o Firebase
  export const firebaseApp = initializeApp(firebaseConfig);


