import {
  initializeApp, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
} from './exports.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjR0KcwHmhPnls3pAHrUOsuDf5XQUUW8w',
  authDomain: 'social-network-c5f64.firebaseapp.com',
  projectId: 'social-network-c5f64',
  storageBucket: 'social-network-c5f64.appspot.com',
  messagingSenderId: '95108055106',
  appId: '1:95108055106:web:1ec06cadea77269615addb',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const signIn = async (email, password) => {
  const useCredential = await signInWithEmailAndPassword(auth, email, password);
  return useCredential.user;
};

export async function signinUserEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
