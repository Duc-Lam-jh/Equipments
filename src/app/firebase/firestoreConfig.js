import {
  getFirestore,
  collection
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {
  DEVICE_COLLECTION_KEYWORD,
  METADATA_COLLECTION_KEYWORD,
  REQUEST_COLLECTION_KEYWORD,
  USER_COLLECTION_KEYWORD
} from '../utilities';
import { firebaseApp } from './firebaseConfig';

const databaseConnection = getFirestore(firebaseApp);

export const storageRef = getStorage(firebaseApp);
export const devicesCollection = collection(databaseConnection, DEVICE_COLLECTION_KEYWORD);
export const requestsCollection = collection(databaseConnection, REQUEST_COLLECTION_KEYWORD);
export const usersCollection = collection(databaseConnection, USER_COLLECTION_KEYWORD);
export const metadataCollection = collection(databaseConnection, METADATA_COLLECTION_KEYWORD);