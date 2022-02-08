import { getDocs, getDoc, doc } from 'firebase/firestore';
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
  else {
    return null;
  }
}

export {
  getAllUsers,
  getUserById
}