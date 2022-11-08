/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  createUserWithEmailAndPassword, signInWithPopup, addDoc, signInWithEmailAndPassword, signOut, collection, updateProfile, deleteDoc, doc, getDoc, getDocs, updateDoc,
} from '../../src/lib/firebase.js';
import {
  newUser, googleAccess, create, loginUser, logoutUser, deletePost, forEditPost, getPostById, getPosts, likePost,
} from '../../src/lib/auth.js';

jest.mock('../../src/lib/firebase.js');

describe('newUser', () => {
  it('should creat a new account', () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    newUser('email', 'password', 'name');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('loginUser', () => {
  it('should provide access', () => {
    signInWithEmailAndPassword.mockResolvedValue({
      user: {},
      password: {},
    });
    loginUser('email', 'password');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('logoutUser', () => {
  it('should end the access session and log out', () => {
    signOut.mockResolvedValue({
      user: {},
    });
    logoutUser();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});

describe('create', () => {
  it('should creat a new post', () => {
    addDoc.mockResolvedValue();
    const restaurant = 'Café da Vila';
    const adress = 'R. Dr Arthur Martins, 243';
    const review = 'Atendimento nota 10!';
    create(restaurant, adress, review);
    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledTimes(1);
  });
});

describe('googleAccess', () => {
  it('should provide access with google', () => {
    signInWithPopup.mockResolvedValue();
    googleAccess();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('deletePost', () => {
  it('should delete posts from dataBase', () => {
    deleteDoc.mockResolvedValue();
    deletePost();
    expect(doc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledTimes(1);
  });
});

describe('forEditPost', () => {
  it('should edit posts from dataBase', () => {
    updateProfile.mockResolvedValue();
    forEditPost();
    expect(doc).toHaveBeenCalledTimes(2);
    expect(updateProfile).toHaveBeenCalledTimes(1);
  });
});

describe('getPostById', () => {
  it('should return id from Posts', async () => {
    const getId = 'kkk000';
    const getRef = {};
    const getPost = {
      data: jest.fn(),
    };
    getDoc.mockResolvedValue(getPost);
    doc.mockResolvedValue(getRef);
    await getPostById(getId);
    expect(doc).toHaveBeenCalledTimes(3);
    expect(doc).toHaveBeenCalledWith(undefined, 'Posts', getId);
    expect(getDoc).toHaveBeenCalledTimes(1);
    expect(getPost.data).toHaveBeenCalledTimes(1);
  });
});

describe('likePost', () => {
  it('should add a new like at Posts', async () => {
    const mock = {
      data() {
        const arrLikes = {
          like: [],
        };
        return arrLikes;
      },
    };

    const postID = 'post id';
    const userID = 'user id';

    getDoc.mockResolvedValue(mock);

    await likePost(postID, userID);
    expect(updateDoc).toHaveBeenCalledTimes(2);
  });
});
