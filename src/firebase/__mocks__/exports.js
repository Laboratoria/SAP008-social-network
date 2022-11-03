export const getAuth = jest.fn().mockImplementation();
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithEmailAndPassword = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ data: { teste: 'a' } }));
export const signInWithPopup = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const updateProfile = jest.fn();
export const getFirestore = jest.fn();
export const collection = jest.fn();
export const addDoc = jest.fn();
export const initializeApp = jest.fn();
export const doc = jest.fn();
export const getDocs = jest.fn();
export const getDoc = jest.fn();
export const deleteDoc = jest.fn();
export const updateDoc = jest.fn();
