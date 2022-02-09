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
    return snap.data();
  }
}

const addNewDevice = async data => {
  try{
    console.log(data);
    addDoc(devicesCollection, data)
  }
  catch (error) {
    setFormPrompt(error);
  }
}

export {
  getAllDevices,
  getDeviceById,

  addNewDevice
}