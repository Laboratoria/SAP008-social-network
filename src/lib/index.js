import { getAuth, createUserWithEmailAndPassword } from "./exports.js";
import app from "./config-firebase.js";

export function createUser(name, date, email, senha) {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, name, date, email, senha);
}