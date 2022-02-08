import { 
  getFirestore, 
  collection
 } from 'firebase/firestore';

 import { firebaseApp } from './firebaseConfig';

 const databaseConnection = getFirestore(firebaseApp);

 export const devicesCollection = collection(databaseConnection, 'devices');
 export const requestsCollection = collection(databaseConnection, 'requests');