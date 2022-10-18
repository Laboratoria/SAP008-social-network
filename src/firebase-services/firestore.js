import { collection, addDoc, doc, setDoc} from "./exports.js";
import { db } from "./firebase-config.js";


export const teste = () => {
     addDoc(collection(db, "cities"), {
        name: "Tokyo",
        country: "Japan"
      }).then((docRef) => { console.log("Document written with ID: ", (docRef.id));}) 
      
};