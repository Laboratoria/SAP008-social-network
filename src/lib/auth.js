import { app } from "./firebase.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    console.log(user)
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});

const loginEmailPassword = async (email, password) => {
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
    }
    catch (error) {
        console.log(error);
    }
}

const createAccount = async (email, password) => {
  
    try {      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);  
            
    }
    catch (error) {
      console.log(error)
    }
  }

export { auth, loginEmailPassword, createAccount};

