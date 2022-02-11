import {
  uploadBytes, ref,
  getDownloadURL
} from 'firebase/storage';
import { storageRef } from '../firebase/firestoreConfig';

const uploadFile = async file => {
  const fileRef = ref(storageRef, file.name);
  await uploadBytes(fileRef, file);
  const imageUrl = await getDownloadURL(fileRef);
  return imageUrl;
}

export {
  uploadFile
}