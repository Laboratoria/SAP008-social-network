import {
  addDoc,
  collection,
  getDocs,
} from './exports.js';

import { db } from './config.js';

export const createPost = async (tip) => {
  const postTip = await addDoc(collection(db, 'tip'), { tip, userId: 'sabrina' });
  return postTip;
};

export async function printPosts() {
  const arrayTips = [];
  const querySnapshot = await getDocs(collection(db, 'tip'));
  querySnapshot.forEach((tip) => {
    const data = tip.data();
    data.id = tip.id;
    arrayTips.push(data);
  });
  const copy = [...arrayTips];
  const sorted = copy.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    } return 0;
  });
  return sorted;
}
