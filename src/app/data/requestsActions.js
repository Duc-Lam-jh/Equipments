import { getDocs, getDoc, doc, query, where } from 'firebase/firestore';
import { requestsCollection } from '../../app/firebase/firestoreConfig';

const getAllRequests = async () => {
  const response = await getDocs(requestsCollection);
  const documents = response.docs;
  
  const requests = [];
  documents.forEach(item => {
    requests.push({
      id: item.id,
      ...item.data()
    })
  })

  return requests;
}

const getRequestsByStatus = async (status) => {
  const requestQuery = query(requestsCollection, where("status", "==", status));
  const response = await getDocs(requestQuery);
  const documents = response.docs;

  const requests = [];
  documents.forEach(item => {
    requests.push({
      id: item.id,
      ...item.data()
    })
  })

  return requests;
}

const getRequestById = async id => {
  const snap = await getDoc(doc(requestsCollection, id));
  if (snap.exists()) {
    return snap.data();
  }
}

export {
  getAllRequests,
  getRequestsByStatus,
  getRequestById
}