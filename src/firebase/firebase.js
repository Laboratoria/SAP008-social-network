import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, sendPasswordResetEmail, updateProfile} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import firebaseConfig from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export const getUserName = () => { 
  return auth.currentUser.displayName
}

export const registerUser = (name, email, password) => {        
  return createUserWithEmailAndPassword(auth, email, password) 
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(auth.currentUser, {
        displayName: name, /*photoURL: "https://example.com/jane-q-user/profile.jpg"*/
      })
    })
}

export const loginGoogle = () => {
  signInWithRedirect(auth, provider)
 // window.location.hash = "#timeline";
}

export const userLogin = (email, password) => {         
  return signInWithEmailAndPassword(auth, email, password)      
}

export const checkLoggedUser = (check) => {
  onAuthStateChanged(auth, check);
}

export const resetPassword = (email) => {
  return sendPasswordResetEmail (auth, email)
}

export const signOut = () => {
 auth.signOut();
}

export const createPost = async(artist, location, date, text) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      name: auth.currentUser.displayName,
      author: auth.currentUser.uid,
      artist, 
      location,
      date,
      text,
      likes: 0,
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}  
  
/*const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}*/

export const getAllPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsGroup = []; //array meninas
    querySnapshot.forEach((posts) => {
      postsGroup.push({ ...posts.data(), id: posts.id });
    });
    return postsGroup;
  } catch (error) {
    return error;
  }

};
