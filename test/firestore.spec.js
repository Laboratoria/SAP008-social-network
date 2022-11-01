import {
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
} from '../src/firebase/exports.js';

import {
  publishPost,
  getAllPosts,
  getPost,
  deletePost,
  likePost,
  editPost,
} from '../src/firebase/firestore.js';

// import { auth } from '../src/firebase/auth.js';

jest.mock('../src/firebase/exports.js');

describe('publishPost', () => {
  it('should be a function', async () => {
    expect(typeof publishPost).toBe('function');
  });
  it('should create a post', async () => {
    const text = 'Olá';
    const subject = 'Depressão pós-parto';
    const publishDate = '31-10-2022';
    await publishPost(text, subject, publishDate);
    expect(addDoc).toHaveBeenCalledTimes(1);
  });
});

describe('getAllPosts', () => {
  it('should be a function', () => {
    expect(typeof getAllPosts).toBe('function');
  });
  it('should get all posts', async () => {
    await getAllPosts();
    expect(getDocs).toHaveBeenCalledTimes(1);
  });
});

describe('getPost', () => {
  it('should be a function', () => {
    expect(typeof getPost).toBe('function');
  });
  it('should get a post', async () => {
    await getPost();
    expect(getDoc).toHaveBeenCalledTimes(1);
  });
});

describe('deletePost', () => {
  it('should be a function', () => {
    expect(typeof deletePost).toBe('function');
  });
  it('should delete a post', async () => {
    await deletePost();
    expect(deleteDoc).toHaveBeenCalledTimes(1);
  });
});

describe('editPost', () => {
  it('should be a function', () => {
    expect(typeof editPost).toBe('function');
  });
  it('should edit a post', async () => {
    await editPost();
    expect(updateDoc).toHaveBeenCalledTimes(1);
  });
});

describe('likePost', () => {
  it('should be a function', () => {
    expect(typeof likePost).toBe('function');
  });
  it('should like a post', async () => {
    await likePost();
    expect(updateDoc).toHaveBeenCalledTimes(1);
  });
});
