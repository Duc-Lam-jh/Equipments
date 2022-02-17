import { 
  getFirestore, 
  collection
 } from 'firebase/firestore';
 import { getStorage } from 'firebase/storage';
 import { firebaseApp } from './firebaseConfig';

 const databaseConnection = getFirestore(firebaseApp);
 
 export const storageRef = getStorage(firebaseApp);
 export const devicesCollection = collection(databaseConnection, 'devices');
 export const requestsCollection = collection(databaseConnection, 'requests');
 export const usersCollection = collection(databaseConnection, 'users');
 export const metadataCollection = collection(databaseConnection, 'metadata');