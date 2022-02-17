import {
  getDocs, getDoc, doc,
  addDoc, setDoc,
  query, where
} from 'firebase/firestore';
import { devicesCollection, metadataCollection } from '../../app/firebase/firestoreConfig';
import { uploadFile } from './storageActions';
import { setFormPrompt } from '../redux/form/formActions';
import { METADATA_NUMBER_OF_DEVICES_KEYWORD } from '../utilities';

const uploadDeviceImages = async images => {
  const imagesUrl = [];
  for(let i = 0; i < images.length; i++){
    const url = await uploadFile(images[i]);
    imagesUrl.push(url);
  }
  return imagesUrl;
}

const getNumberOfDevices = async () => {
  const deviceQuery = query(metadataCollection, where("name", "==", METADATA_NUMBER_OF_DEVICES_KEYWORD));
  const response = await getDocs(deviceQuery);
  const documents = response.docs;

  return documents[0].data().value;
}

const getAllDevices = async () => {
  const response = await getDocs(devicesCollection);
  const documents = response.docs;

  return documents.map(item => {
    return {
      id: item.id,
      ...item.data()
    }
  })
}

const getDeviceById = async id => {
  const snap = await getDoc(doc(devicesCollection, id));
  if (snap.exists()) {
    return { ...snap.data(), id: id };
  }
  return null;
}

const addNewDevice = async data => {
  const imagesUrl = await uploadDeviceImages(data.images);
  data.images = [...imagesUrl];
  try {
    addDoc(devicesCollection, data);
  }
  catch (error) {
    setFormPrompt(error);
  }
}

const editDeviceById = async data => {
  const imagesUrl = await uploadDeviceImages(data.newImages);
  data.images = [...data.images, ...imagesUrl];
  delete data.newImages;
  try {
    const documentRef = doc(devicesCollection, data.id);
    delete data.id;
    setDoc(documentRef, data);
  }
  catch (error) {
    setFormPrompt(error);
  }
}

const getNumberOfDeviceOfUserByType = async (userId, type) => {
  const deviceQuery = query(devicesCollection, where("userId", "==", userId), where("type", "==", type));
  const response = await getDocs(deviceQuery);
  const documents = response.docs;
 
  return documents.length;
}

export {
  getAllDevices,
  getDeviceById,
  addNewDevice,
  editDeviceById,
  getNumberOfDeviceOfUserByType,
  getNumberOfDevices
}