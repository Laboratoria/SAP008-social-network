import { initializeApp} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
//import { getAnalytics } from "firebase/analytics";
import{getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

//UI
const inputEmail= document.getElementById("e-mail");
const inputPassword= document.getElementById("password");
const btnLogin= document.getElementById("btn-login");
const btnLoginGoogle= document.getElementById("btn-login-Google");
const btnCreateAccount= document.getElementById("btn-create-account");
const form = document.getElementById("form");
//Objeto de configuração do Firebase
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
//const analytics = getAnalytics(app);

// iniciando autenticação
const auth = getAuth(firebaseApp);


const logInWithEmailAndPassword =(event) => {
 event.preventDefault();
 signInWithEmailAndPassword(auth, inputEmail.value,inputPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log (user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
form.addEventListener("submit",logInWithEmailAndPassword);

//login com Google
// const provider = new GoogleAuthProvider;
// const signInWithGoogle= () =>{
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
// }

// btnLoginGoogle.addEventListener("click",signInWithGoogle);


