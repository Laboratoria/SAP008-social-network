import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsVutF790zdwV46b7T9_o_D2BOE5uWPH4",
  authDomain: "booknoteslogin.firebaseapp.com",
  projectId: "booknoteslogin",
  storageBucket: "booknoteslogin.appspot.com",
  messagingSenderId: "758989628486",
  appId: "1:758989628486:web:f90898b4d0d5846a405647",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

 export const loginEmailPassword =  async (email, password) => {
   try {
     const userCredential = await signInWithEmailAndPassword(
       auth,
       email,
       password
     );
     console.log(userCredential.user);
   } catch (error) {
     console.log(error);
     showLoginError(error);
   }
 };

 export const  initWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
 }; 
 