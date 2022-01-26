import React, { useEffect, useState } from 'react';

import RequestList from '../../components/RequestList/RequestList';

const RequestListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getPendingRequests = async () => {
      const uri = process.env.REACT_APP_BASE_API_URL + '/requests?status=pending';
      const response = await fetch(uri);
      const requestData = await response.json();
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