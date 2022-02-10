import {
  getDocs, getDoc, doc,
  addDoc, setDoc
} from 'firebase/firestore';
import { devicesCollection } from '../../app/firebase/firestoreConfig';
import { setFormPrompt } from '../redux/form/formActions';

const getAllDevices = async () => {
  const response = await getDocs(devicesCollection);
  const documents = response.docs;

  const devices = [];
  documents.forEach(item => {
    devices.push({
      id: item.id,
      ...item.data()
    })
  })

  return devices;
}

const getDeviceById = async id => {
  const snap = await getDoc(doc(devicesCollection, id));
  if (snap.exists()) {
    return { ...snap.data(), id: id };
  }
  return null;
}

const addNewDevice = async data => {
  try {
    addDoc(devicesCollection, data);
  }
  catch (error) {
    setFormPrompt(error);
  }
}

const editDeviceById = async data => {
  try {
    const documentRef = doc(devicesCollection, data.id);
    delete data.id;
    setDoc(documentRef, data);
  }
  catch (error) {
    setFormPrompt(error);
  }
}

export {
  getAllDevices,
  getDeviceById,
  addNewDevice,
  editDeviceById
}