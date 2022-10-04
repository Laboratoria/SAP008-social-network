import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import firebaseConfig from "./firebase-config.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export const createPost = async(artist, location, date, post,) => {
  try {

    const docRef = await addDoc(collection(db, "posts"), {
      author: auth.currentUser.uid,
      artist, 
      location,
      date,
      post,
      likes: 0 //adicionado
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}  

export const checkLoggedUser = (check) => {
  onAuthStateChanged(auth, check);
}

export const userLogin = (email, password) => {         
  return signInWithEmailAndPassword(auth, email, password)      
}

export const registerUser = (email, password) => {        
  return createUserWithEmailAndPassword(auth, email, password)  
}

export const loginGoogle = () => {
  signInWithRedirect(auth, provider)
 // window.location.hash = "#timeline";
}

export const signOut = () => {
 auth.signOut();
}

export const resetPassword = (email) => {
  return sendPasswordResetEmail (auth, email)
}

  
/*artist
"beyonce"
(string)
date
"2022-09-14"
location
"brasil"
post
"wdadawdawdadda"
owner
"YcBVT1LPgBQAgDwRHp3IgOEPErA2"
likes: [
  {
    owner: "YcBVT1LPgBQAgDwRHp3IgOEPErA2",
    post_reference: "vNNV1T37MYdff1ZQNxY6"
  },
  {
    owner: "YcBVT1LPgBQAgDwRHp3IgOEPErA2",
    post_reference: "vNNV1T37MYdff1ZQNxY6"
  },
  {
    owner: "YcBVT1LPgBQAgDwRHp3IgOEPErA2",
    post_reference: "vNNV1T37MYdff1ZQNxY6"
  }
  ,{
    owner: "YcBVT1LPgBQAgDwRHp3IgOEPErA2",
    post_reference: "vNNV1T37MYdff1ZQNxY6"
  }
  ,{
    owner: "YcBVT1LPgBQAgDwRHp3IgOEPErA2",
    post_reference: "vNNV1T37MYdff1ZQNxY6"
  }
  ,{
    owner: "YcBVT1LPgBQAgDwRHp3IgOEPErA2",
    post_reference: "vNNV1T37MYdff1ZQNxY6"
  }

]
likes.length

const like = {
  owner: "YcBVT1LPgBQAgDwRHp3IgOEPErA2",
  post_reference: "vNNV1T37MYdff1ZQNxY6"
}*/