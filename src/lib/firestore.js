import {getFirestore} from './exports.js';
import app from './config-firebase.js';

const db = getFirestore(app); 
const auth = getAuth(app); 
