import {
  getDocs, getDoc, doc,
  query, where, updateDoc
} from 'firebase/firestore';
import { metadataCollection } from '../../app/firebase/firestoreConfig';
import { METADATA_NUMBER_OF_DEVICES_KEYWORD, METADATA_NUMBER_OF_PENDING_REQUESTS_KEYWORD } from '../utilities';

const getIdOfCollection = async (name) => {
  const deviceQuery = query(metadataCollection, where("name", "==", name));
  const response = await getDocs(deviceQuery);
  const documents = response.docs;

  return documents[0].id;
}

const getNumberOfDevices = async () => {
  const deviceQuery = query(metadataCollection, where("name", "==", METADATA_NUMBER_OF_DEVICES_KEYWORD));
  const response = await getDocs(deviceQuery);
  const documents = response.docs;

  return documents[0].data().value;
}

const getNumberOfPendingRequests = async () => {
  const requestQuery = query(metadataCollection, where("name", "==", METADATA_NUMBER_OF_PENDING_REQUESTS_KEYWORD));
  const response = await getDocs(requestQuery);
  const documents = response.docs;

  return documents[0].data().value;
}

const incrementNumberOfDevices = async () => {
  const collectionId = localStorage.getItem(METADATA_NUMBER_OF_DEVICES_KEYWORD);

  const numberOfDevices = await getNumberOfDevices();
  try {
    const documentRef = doc(metadataCollection, collectionId);
    updateDoc(documentRef, { value: numberOfDevices + 1 });
  }
  catch (error) {
    throw error;
  }
}

const incrementNumberOfPendingRequests = async () => {
  const collectionId = localStorage.getItem(METADATA_NUMBER_OF_PENDING_REQUESTS_KEYWORD);

  const numberOfRequests = await getNumberOfPendingRequests();
  try {
    const documentRef = doc(metadataCollection, collectionId);
    updateDoc(documentRef, { value: numberOfRequests + 1 });
  }
  catch (error) {
    throw error;
  }
}

export {
  getIdOfCollection,
  getNumberOfDevices,
  getNumberOfPendingRequests,
  incrementNumberOfDevices,
  incrementNumberOfPendingRequests
}