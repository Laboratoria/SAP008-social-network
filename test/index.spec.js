import {
  loginWithGoogle, loginWithEmailAndPassword, registerWithEmailAndPassword, deletePost, createPost,
} from '../src/lib/index.js';

import {
  signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  getAuth, updateProfile, getFirestore, deleteDoc, doc, collection, addDoc,
} from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

describe('loginWithGooglen', () => {
  it('a função deve ser chamada uma vez', () => {
    loginWithGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('loginWithEmailAndPassword', () => {
  it('a função deve ser chamada uma vez', () => {
    const email = 'peba@demais.com';
    const password = 'pebademais';
    loginWithEmailAndPassword(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, email, password);
  });
});

describe('registerWithEmailAndPassword', () => {
  it('a função deve ser chamada uma vez', async () => {
    const mockGetAuth = {
      currentUser: {},
    };
    getAuth.mockReturnValueOnce(mockGetAuth);
    createUserWithEmailAndPassword.mockResolvedValueOnce();

    const email = 'peba@demais.com';
    const password = 'pebademais';
    const name = 'peba';
    await registerWithEmailAndPassword(name, email, password);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(mockGetAuth, email, password);
    expect(updateProfile).toHaveBeenCalledTimes(1);
    expect(updateProfile).toHaveBeenCalledWith(mockGetAuth.currentUser, {
      displayName: name,
    });
  });
});

describe('deletePost', () => {
  it('a função deve deletar post de id abcdefghi', async () => {
    const mockPostCollection = {
      posts: {
        postId: 'abcdefghi',
      },
    };
    const mockDb = getFirestore.mockReturnValueOnce(mockPostCollection);

    const mockDocRef = doc(mockDb, 'posts', mockPostCollection.posts.postId);
    deleteDoc.mockResolvedValueOnce(mockDocRef);

    await deletePost(mockPostCollection.posts.postId);

    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledWith(mockDb.posts);
  });
});

