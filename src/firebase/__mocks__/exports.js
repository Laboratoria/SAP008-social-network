export const initializeApp = jest.fn();
export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const updateProfile = jest.fn();
export const signOut = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const signInWithPopup = jest.fn();
