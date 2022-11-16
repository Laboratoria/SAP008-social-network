import {
  addDoc,
  collection,
  getDocs,
} from './exports.js';

import { db } from './config.js';

export const createPost = (tip) => {
  const postTip = addDoc(collection(db, 'tip'), tip);
  return postTip;
};

export const printPost = async () => {
  const arrayTip = [];
  const querySnapshot = await getDocs(collection(db, 'tip'));
  querySnapshot.forEach((tip) => {
    const data = tip.data();
    data.id = tip.id;
    arrayTip.push(data);
  });
  const copy = [...arrayTip];
  const sorted = copy.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    } return 0;
  });
  return sorted;
};
