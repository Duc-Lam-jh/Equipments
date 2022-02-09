import { 
  getDocs, getDoc, doc, 
  setDoc, addDoc,
  query, where 
} from 'firebase/firestore';
import { requestsCollection } from '../../app/firebase/firestoreConfig';
import { setFormPrompt } from '../redux/form/formActions';

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

const addNewRequest = async (data) => {
  try{
    addDoc(requestsCollection, data)
  }
  catch (error) {
    setFormPrompt(error);
  }
}

export {
  getAllRequests,
  getRequestsByStatus,
  getRequestById,

  addNewRequest
}