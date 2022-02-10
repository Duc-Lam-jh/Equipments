import { getAuth } from "firebase/auth"
import { firebaseApp } from './firebaseConfig';

export const authConnection = getAuth(firebaseApp);