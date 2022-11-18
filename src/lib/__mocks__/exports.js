export const initializeApp = jest.fn();

export const getAuth = jest.fn();
export const signInWithEmailAndPassword = jest.fn().mockImplementation(() => Promise.resolve({ user: 'sabrina' }));
export const createUserWithEmailAndPassword = jest.fn().mockImplementation(() => Promise.resolve({ user: 'sabrina' }));
export const updateProfile = jest.fn();
export const signOut = jest.fn();

export const addDoc = jest.fn();
export const collection = jest.fn();
export const getDocs = jest.fn();
export const getFirestore = jest.fn();
