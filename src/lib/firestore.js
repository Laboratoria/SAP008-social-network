import { app } from './firebase.js';
import { getFirestore, collection, addDoc, getDocs, getDoc, getAuth, doc, updateDoc, deleteDoc, arrayRemove, arrayUnion, } from './export.js'

const db = getFirestore(app);

const createPost = async (textPost) => {
    const auth = getAuth(app);
    try {
        const docRef = await addDoc(collection(db, 'post'), {
            name: auth.currentUser.displayName,
            author: auth.currentUser.uid,
            texto: textPost,
            like: [],
        });
    } catch (e) {
    }
};

const getPostById = async (postId) => {
    const docRef = doc(db, "post", postId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();

}

const getPost = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "post"));
        const postArray = [];
        querySnapshot.forEach((post) => {
            postArray.push({ ...post.data(), id: post.id });
        });
        console.log(postArray);
        return postArray;
    } catch (error) {
        return error;
    }
};



const upDatePost = async (userId, textPost) => {
    const newPost = doc(db, 'post', userId);

    await updateDoc(newPost, {
        texto: textPost,

    });
};

const deletePost = async (userId) => {
    try {
        const postToBeDeleted = doc(db, 'post', userId);
        await deleteDoc(postToBeDeleted);
        return postToBeDeleted.id;
    } catch (error) {
        return error;
    }
};

const likePost = async (postId, userId) => {
    const post = await getPostById(postId);
    let likes = post.like;
    const userAlreadyLiked = likes.includes(userId);

    if(userAlreadyLiked) {
        likes = likes.filter((id) => id != userId);
    } else {
        likes.push(userId);
    }

    await updateDoc(doc(db, 'post', postId), {
        like: likes,
    });

    return likes.length;
    
};

// X - recebe o id do post e o id do usuario
// X- consulta o post no firebase (getDoc ou algo assim) usando esse id do post
// X - pega os likes desse mesmo post
// X - verifica se os likes incluem o id do usuario e:
// X -se nao incluir, adiciona
// X - se incluir, remove (com .filter de array, por exemplo)
// X - atualiza o post com a lista nova de likes : usa o updateDoc
// retorna se adicionou ou removeu o post (true/false) e a contagem (.length) dos likes no final: retorna um objeto com o array de likes

/*const unlikePost = async (postId, author) => {
    const postToBeLiked = doc(db, 'post', postId);
    return updateDoc(postToBeLiked, {
        like: arrayRemove(author)
    });
};*/

export { createPost, getPost, upDatePost, deletePost, likePost };
