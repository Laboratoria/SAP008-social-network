/*Login de usuários existentes*/

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config-firebase";

  //verificar se é nesta pasta essa função 
const auth = getAuth(app)
export const login = ( email, senha) => signInWithEmailAndPassword (auth, email, password);
function Login (email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
