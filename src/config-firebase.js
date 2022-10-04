import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";*/

const firebaseConfig = {
  apiKey: "AIzaSyC3bxCqhfcT9hZYxdSg-waQ6Mb9FMnM-TI",
  authDomain: "cookie-8fdf2.firebaseapp.com",
  projectId: "cookie-8fdf2",
  storageBucket: "cookie-8fdf2.appspot.com",
  messagingSenderId: "757632763950",
  appId: "1:757632763950:web:d6bb2c2cd9416102a9b7bf"
};

const app = initializeApp(firebaseConfig);

/*console.log("antes")
firebase.auth( ).signInWithEmailAndPassword("juliana.rfernandes12@gmail.com", "123456").then(response=>{
  console.log("sucess", response)
}).cath(error =>{
  console.log("error", error)
})
console.log("depois")*/