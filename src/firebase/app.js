// eslint-disable-next-line import/no-unresolved
import { signOut, getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

export const auth = getAuth();

export function logout() {
  localStorage.clear();
  return signOut(auth);
}
