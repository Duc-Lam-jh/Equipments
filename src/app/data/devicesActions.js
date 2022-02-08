import { doc, getDocs } from 'firebase/firestore';
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

export {
  getAllDevices
}