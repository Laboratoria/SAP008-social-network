<<<<<<< HEAD
export const initializeApp = jest.fn();
export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithEmailAndPassword = jest.fn();
export const updateProfile = jest.fn();
export const signInGoogle = jest.fn()
=======
export const initializeApp = jest.fn()
export const mockAuth = {
  currentUser: {}
}
export const getAuth = jest.fn(()=>{ 
  return mockAuth
})
export const createUserWithEmailAndPassword = jest.fn()
export const signInWithEmailAndPassword = jest.fn()
export const updateProfile = jest.fn()
export const GoogleAuthProvider = jest.fn()
export const signInWithPopup = jest.fn()
>>>>>>> 2496e255b3b4685cbb16bc1710d951b33b83eccc
