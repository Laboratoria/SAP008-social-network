import {
  addDoc,
  collection,
} from './exports.js';

import { db } from './config.js';

export const createPost = async (tip) => {
  const postTip = await addDoc(collection(db, 'tip'), { tip, userId: 'sabrina' });
  return postTip;
};
