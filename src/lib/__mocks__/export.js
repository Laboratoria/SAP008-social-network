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
export const onAuthStateChanged = jest.fn();
export const sendPasswordResetEmail = jest.fn();
export const getFirestore = jest.fn();
export const addDoc = jest.fn();
export const mockDocs = {
  docs: [
    { id: 'abc123', data() {}, idPost: '1234567' },
  ],
};
export const collection = jest.fn();
export const getDocs = jest.fn(() => mockDocs);
export const query = jest.fn();
export const orderBy = jest.fn();
export const doc = jest.fn();
export const updateDoc = jest.fn();
export const arrayUnion = jest.fn();
export const arrayRemove = jest.fn();
export const deleteDoc = jest.fn();
export const current = jest.fn(() => mockAuth);
