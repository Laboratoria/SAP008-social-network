export const initializeApp = jest.fn();
export const getAuth = jest.fn(() => ({
  currentUser: {},
}));
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithPopup = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const collection = jest.fn();
export const addDoc = jest.fn();
export const getFirestore = jest.fn();
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const signOut = jest.fn();
export const updateProfile = jest.fn();
export const getDocs = jest.fn();
export const updateDoc = jest.fn();
export const deleteDoc = jest.fn();
export const doc = jest.fn();
export const getDoc = jest.fn();
