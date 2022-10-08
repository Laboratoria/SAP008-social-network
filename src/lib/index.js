// // aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };

import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

import { app } from '../firebase.js';

export const db = getFirestore(app);