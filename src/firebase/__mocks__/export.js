export const initializeApp = jest.fn();
export const getFirestore = jest.fn();
export const getAuth = jest.fn(() => ({
  currentUser: {
    displayName: 'Angelica',
    uid: '123',
  },
}));
export const updateProfile = jest.fn();
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithEmailAndPassword = jest.fn();
export const signInWithRedirect = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const signOut = jest.fn();
export const onAuthStateChanged = jest.fn();
export const addDoc = jest.fn(() => new Promise((resolve) => {
  resolve();
}));
export const collection = jest.fn();
export const sendPasswordResetEmail = jest.fn();
export const updateDoc = jest.fn();
export const doc = jest.fn();
export const deleteDoc = jest.fn();
export const getDoc = jest.fn();
export const getDocs = jest.fn();
