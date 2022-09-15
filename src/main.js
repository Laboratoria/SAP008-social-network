import { initializeApp} from "../firebase/app";
//import { getAnalytics } from "firebase/analytics";
import{getAuth, signInWithEmailAndPassword, connectAuthEmulator} from "../firebase/auth";
//import { async } from "regenerator-runtime";


const inputEmail= document.getElementById("e-mail");
const inputPassword= document.getElementById("password");
const btnLogin= document.getElementById("btn-login");
const btnLoginGoogle= document.getElementById("btn-login-Google");
const btnCreateAccount= document.getElementById("btn-create-account");
const firebaseConfig = {
    apiKey: "AIzaSyCZJLz1dq8bI3mQvcOxXpbZXEj_dd7dwOE",
    authDomain: "social-network-mia.firebaseapp.com",
    projectId: "social-network-mia",
    storageBucket: "social-network-mia.appspot.com",
    messagingSenderId: "333033318484",
    appId: "1:333033318484:web:24c297d8e8efed871d65c1",
    measurementId: "G-KHPWJXZL63"
  };
const asyncLogin = async();

  //iniciando o Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// iniciando autenticação
const auth = getAuth(firebaseApp);
//testando o emulador local
//connectAuthEmulator(auth, "http://127.0.0.1:9099");

// const logInWithEmailAndPassword = async => {
//   const loginEmail = inputEmail.value;
//   const loginPassword = inputPassword.value;
//   const userCredential = await (signInWithEmailAndPassword, loginEmail, loginPassword)
//   console.log (userCredential.user)
// }
btnLogin.addEventListener("click",logInWithEmailAndPassword);

const logInWithEmailAndPassword =() => {
 signInWithEmailAndPassword(auth, "admin@gmail.com", "admin123")
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log (userCredential)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  });
}


