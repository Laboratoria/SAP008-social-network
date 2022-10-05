import { initializeApp } from "./export.js";
//import { getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCzTikQQb1O_s-qhMB6KdlS8oHjUW0Vty0",
  authDomain: "rede-social-inspire.firebaseapp.com",
  projectId: "rede-social-inspire",
  storageBucket: "rede-social-inspire.appspot.com",
  messagingSenderId: "938258251237",
  appId: "1:938258251237:web:7d5985698015d37027c30c",
  measurementId: "G-LCSEC2B3HQ"
};

const app = initializeApp(firebaseConfig);
export {app}

//export const db = getFirestore(app);

// export function criarUsuario(email, senha, nome){
//   return createUserWithEmailAndPassword(auth, email, password)
// }
