import { auth, createUserWithEmailAndPassword} from "./auth.js";

export const createAccount = async (email, password) => {
  
   try {      
     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     console.log(userCredential.user);  
           
   }
   catch (error) {
     console.log(error)
   }
 }