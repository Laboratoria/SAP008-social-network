export const initializeApp = jest.fn();
export const signInWithEmailAndPassword = jest.fn();
export const signOut = jest.fn();
export const onAuthStateChanged = jest.fn();
export const sendPasswordResetEmail = jest.fn();
export const createUserWithEmailAndPassword = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const signInWithPopup = jest.fn();
export const getFirestore = jest.fn();

export const deleteDoc = jest.fn();
export const doc = jest.fn();
export const collection = jest.fn();
export const addDoc = jest.fn();
export const updateDoc = jest.fn();
export const getDocs = jest.fn();

export const mockAuth = {
  currentUser: {
    displayName: 'maria',
    uid: '2XzH88YYd8MirsXiT7zG3UlYhZI3',
    photoURL: 'https://lh3.googleusercontent.com/a/ALm5wu0oUhaqC88INbgCSrPJwkRC6ihmJW7084he3JMz=s96-c',
  },
};
export const getAuth = jest.fn(() => mockAuth);
