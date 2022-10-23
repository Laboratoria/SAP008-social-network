import { collection, addDoc, doc, setDoc, getDocs, query, orderBy, Timestamp} from "./exports.js";
import { db } from "./firebase-config.js";
import { current } from "./auth.js";


export function creatingPost(text, author, book) {
  addDoc(collection(db, 'post'), {
    displayName: current().displayName,
    photoURL: current().photoURL,
    post: '❝'+text+'❞',
    author: '— ' + author,
    book: book,
    date: new Date().toLocaleString('pt-br'),
    userId: current().uid,
    likes: [],
    read: [],
    toRead: [],
  }); 
     
};

export async function gettingPost() {
  const queryResult = query(collection(db, 'post'), orderBy('date', 'desc'))
 const gotDoc = await getDocs(queryResult)
 return gotDoc
}

