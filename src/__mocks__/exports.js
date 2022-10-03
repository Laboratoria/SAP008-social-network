export const initializeApp = jest.fn();

/* authentication */
export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithEmailAndPassword = jest.fn();
export const GoogleAuthProvider = jest.fn();
export const signInWithPopup = jest.fn();
export const onAuthStateChanged = jest.fn();
export const signOut = jest.fn();
export const sendPasswordResetEmail = jest.fn();
export const updateProfile = jest.fn();

/* firestore */
export const getFirestore = jest.fn();
export const collection = jest.fn();
export const doc = jest.fn();
export const updateDoc = jest.fn();
export const query = jest.fn();
export const getDocs = jest.fn();
export const orderBy = jest.fn();
export const getDoc = jest.fn();
export const arrayUnion = jest.fn();
export const arrayRemove = jest.fn();
export const deleteDoc = jest.fn();
export const where = jest.fn();
