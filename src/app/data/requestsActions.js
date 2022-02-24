import { 
  getDocs, getDoc, doc, 
  setDoc, addDoc,
  query, where,
  orderBy, limit, startAt
} from 'firebase/firestore';
import { requestsCollection } from '../../app/firebase/firestoreConfig';
import { setFormPrompt } from '../redux/form/formActions';
import { incrementNumberOfPendingRequests } from './metadataActions';
import { ITEMS_PER_PAGE, PENDING_KEYWORD } from '../utilities';

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

  return documents.map(item => {
    return {
      id: item.id,
      ...item.data()
    }
  })
}

const getFirstPageByStatus = async (status) => {
  const requestQuery = query(requestsCollection, orderBy('date'), limit(ITEMS_PER_PAGE + 1), where('status', '==', status));
  const response = await getDocs(requestQuery);
  const documents = response.docs;

  return documents.map(item => {
    return {
      id: item.id,
      ...item.data()
    }
  })
}

const getNextPageByStatus = async (lastRequest, status) => {
  const lastRequestRef = await getDoc(doc(requestsCollection, lastRequest.id));
  const requestQuery = query(requestsCollection, orderBy('date'), limit(ITEMS_PER_PAGE + 1), startAt(lastRequestRef), where('status', '==', status));
  const response = await getDocs(requestQuery);
  const documents = response.docs;

  return documents.map(item => {
    return {
      id: item.id,
      ...item.data()
    }
  })
}

const getRequestById = async id => {
  const snap = await getDoc(doc(requestsCollection, id));
  if (snap.exists()) {
    return { ...snap.data(), id: id};
  }
  return null;
}

const addNewRequest = async (data) => {
  try{
    addDoc(requestsCollection, data);
    incrementNumberOfPendingRequests();
  }
  catch (error) {
    setFormPrompt(error);
  }
}

const editRequestById = async data => {
  try {
    const documentRef = doc(requestsCollection, data.id);
    delete data.id;
    setDoc(documentRef, data);
  }
  catch (error) {
    setFormPrompt(error);
  }
}

export {
  getAllRequests,
  getRequestsByStatus,
  getRequestById,
  addNewRequest,
  editRequestById,
  getFirstPageByStatus,
  getNextPageByStatus
}