// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';


// const firebaseConfig = {
//   apiKey: "AIzaSyC0LYibd7iDrRSG9t2pNqWjxVVpcZxuyuo",
//   authDomain: "teste-689a5.firebaseapp.com",
//   projectId: "teste-689a5",
//   storageBucket: "teste-689a5.appspot.com",
//   messagingSenderId: "584087173369",
//   appId: "1:584087173369:web:d5c821c45f15ff5cde0a28"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export const createAccount = async (email, password) => {
  
//   try {      
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     console.log(userCredential.user);  
       
//   }
//   catch (error) {
//     console.log(error)
//   }
// }


// export const loginEmailPassword = async (email, password) => {
  
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     console.log(userCredential.user);
//   }
//   catch (error) {    
//     console.log(error);    
//   }
// }

// onAuthStateChanged(auth, user => {
//   if (user != null) {
//     console.log('logged in!');
//   } else {
//     console.log('No user');
//   }
// });

// export const logout = async () => {
//   await signOut(auth);
// }

// //logar com o google
// const provider = new GoogleAuthProvider;
// export const signInGoogle = () => {
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



