import React, { useState } from 'react';

import RequestList from '../../components/RequestList/RequestList';

const RequestListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  return(
    <>
      <div className='content'>
        <h1>List of requests</h1>
        {requests && <RequestList requests={requests} />}
        </div>
    </>
  )
}

export default RequestListPage;