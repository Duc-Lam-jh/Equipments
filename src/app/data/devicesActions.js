import { getDocs, getDoc, doc } from 'firebase/firestore';
import { devicesCollection } from '../../app/firebase/firestoreConfig';

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
  else {
    return null;
  }
}

export {
  getAllDevices,
  getDeviceById
}