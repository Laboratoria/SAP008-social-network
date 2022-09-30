global.firebase = {
  auth: jest.fn(() => ({
    loginWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    logOut: jest.fn(),
    signOut: jest.fn(),
    updateUserProfile: jest.fn(),
    GoogleAuthProvider: jest.fn(),
    signInWithPopup: jest.fn(),
    updateProfile: jest.fn(),
    persisteAccount: jest.fn(),
    setPersistence: jest.fn(),
    loginWithGoogle: jest.fn(),
    currentUser: jest.fn(() => ({
      updateUserProfile: jest.fn(),
    })),
  })),
  firestore: jest.fn(() => ({
    createTemplatePost: jest.fn(),
    editPost: jest.fn(),
    collection: jest.fn(() => ({
      add: jest.fn(),
      orderBy: jest.fn(() => ({
        get: jest.fn(),
      })),
    })),
    doc: jest.fn(() => ({
      set: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    })),
  })),
};
