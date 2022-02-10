import {
  getDocs, getDoc, doc,
  query, where
} from 'firebase/firestore';
import { usersCollection } from '../../app/firebase/firestoreConfig';

const getAllUsers = async () => {
  const response = await getDocs(usersCollection);
  const documents = response.docs;

  const users = [];
  documents.forEach(item => {
    users.push({
      id: item.id,
      ...item.data()
    })
  })

  return users;
}

const getUserById = async id => {
  const snap = await getDoc(doc(usersCollection, id));
  if (snap.exists()) {
    return snap.data();
  }
  return null;
}

const getUserByEmail = async email => {
  const userQuery = query(usersCollection, where("email", "==", email));
  const response = await getDocs(userQuery);
  const documents = response.docs;

  if (documents.length !== 1) {
    return null;
  }
  return { ...documents[0].data(), id: documents[0].id };
}

export {
  getAllUsers,
  getUserById,
  getUserByEmail
}