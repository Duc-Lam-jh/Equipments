import React, { useEffect, useState } from 'react';

import RequestList from '../../components/RequestList/RequestList';

const RequestListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState([]);

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
    }

    getPendingRequests();
    setIsLoading(false);
  }, [])

  if (isLoading) {
    return <div className='content'><p>loading...</p></div>
  } else {
    return (
      <>
        <div className='content'>
          <h1>List of requests</h1>
          {requests && <RequestList requests={requests} />}
        </div>
      </>
    )
  }
}

export default RequestListPage;