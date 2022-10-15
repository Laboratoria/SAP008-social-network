import {
  loginWithGoogle, loginWithEmailAndPassword, registerWithEmailAndPassword,
  deletePost, createPost, updatePost, postById, /* like */
} from '../src/lib/index.js';

import {
  signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  getAuth, updateProfile, getFirestore, deleteDoc, doc, addDoc, updateDoc,
  getDoc,
} from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase.js');

beforeEach(() => {
  jest.clearAllMocks();
});

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
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith({
      currentUser: {
        uid: '123',
        displayName: 'nome',
      },
    }, email, password);
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

describe('createPost', () => {
  it('a função deve criar um post', async () => {
    const post = {
      text: 'oie galera',
      tag: 'musica',
    };
    const now = new Date().toLocaleDateString();

    await createPost(post.text, post.tag);

    Date.now = now;

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      name: 'nome',
      author: '123',
      data: now,
      tag: post.tag,
      text: post.text,
      like: [],
    });
  });
});

describe('updatePost', () => {
  it('a função deve atualizar um post', async () => {
    const post = {
      idpost: '455455',
      text: 'eai',
    };

    const newText = 'novo texto';

    await updatePost(post.idpost, newText);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      text: newText,
    });
  });
});

describe('postById', () => {
  it('a função deve pegar o id de um post', async () => {
    const id = 'abc123';
    const ref = {};
    const post = {
      data: jest.fn(),
    };

    doc.mockReturnValueOnce(ref);
    getDoc.mockResolvedValueOnce(post);

    await postById(id);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'post', id);
    expect(getDoc).toHaveBeenCalledTimes(1);
    expect(getDoc).toHaveBeenCalledWith(ref);
    expect(post.data).toHaveBeenCalledTimes(1);
  });
});

// describe('like', () => {
//   it('a função deve modificar o like do post', async () => {
//     const like =

//     const post = {
//       postId: 'idPost',
//       author: 'idUser',
//       like: [],
//     };

//     await like(post.postId, post.author);

//     expect(updateDoc).toHaveBeenCalledTimes(1);
//     expect(updateDoc).toHaveBeenCalledWith(doc(undefined, 'post', post.postId), {
//       like: ['idUser'],
//     });
//   });
// });
