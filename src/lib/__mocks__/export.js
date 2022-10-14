export const initializeApp = jest.fn();
export const mockAuth = {
  currentUser: {},
};
export const getAuth = jest.fn(() => mockAuth);
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithEmailAndPassword = jest.fn();
export const updateProfile = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const signInWithPopup = jest.fn();
