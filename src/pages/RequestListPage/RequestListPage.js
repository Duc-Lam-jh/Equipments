import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RequestList from '../../components/RequestList/RequestList';
import MessagePrompt from '../../components/MessagePrompt/MessagePrompt';
import ArrayFilter from '../../components/ArrayFilter/ArrayFilter';
import { editRequest, setFormPrompt } from '../../app/redux';
import {
  FORM_TYPE_DESKTOP,
  FORM_TYPE_LAPTOP,
  FORM_TYPE_MOUSE,
  FORM_TYPE_OTHER
} from '../../app/utilities/index'

const RequestListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [originalRequests, setOriginalRequests] = useState([]);
  const dispatch = useDispatch();
  const msg = useSelector(state => state.form.msg);

  const filterList = [
    {
      name: 'All',
      type: 'all'
    },
    {
      name: 'Laptop/PC',
      type: FORM_TYPE_LAPTOP
    },
    {
      name: 'Desktop',
      type: FORM_TYPE_DESKTOP
    },
    {
      name: 'Mouse',
      type: FORM_TYPE_MOUSE
    }
  ]

  const filterRequestList = type => {
    if(type === 'all') {
      setRequests([...originalRequests]);
      return;
    }
    const filteredArray = originalRequests.filter(item => item.type === type);
    setRequests([...filteredArray]);
  }

  useEffect(() => {
    const getUser = async (id) => {
      const uri = process.env.REACT_APP_BASE_API_URL + '/users?id=' + id;
      const userResponse = await fetch(uri);
      const user = await userResponse.json();
      return user[0];
    }

    const getPendingRequests = async () => {
      const uri = process.env.REACT_APP_BASE_API_URL + '/requests?status=pending';
      const response = await fetch(uri);
      const requestData = await response.json();

      for(let i = 0; i < requestData.length; i++) {
        requestData[i].user = await getUser(requestData[i].userId);
      }
      
      setRequests(requestData);
      setOriginalRequests(requestData);
      setIsLoading(false);
    }

    getPendingRequests();
  }, [])

  const handleChangeRequestStatus = (request) => {
    dispatch(editRequest(request));

    setRequests(requests.filter(item => item.id !== request.id));
    setOriginalRequests(originalRequests.filter(item => item.id !== request.id));

  }

  if (isLoading) {
    return <div className='content'><p>loading...</p></div>
  } 

  return (
      <>
      {msg &&
          <MessagePrompt
            msg={msg} button={{ text: 'OK' }}
            handleClick={() => { dispatch(setFormPrompt(null)) }} />
        }
        <div className='content'>
          <h1>List of requests</h1>
          <ArrayFilter filterList={filterList} handleFilterArray={(type) => filterRequestList(type)} />
          {requests && <RequestList requests={requests} handleChangeRequestStatus={handleChangeRequestStatus} />}
        </div>
      </>
    )
  }

export default RequestListPage;