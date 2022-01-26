import React, { useState } from 'react';

import RequestList from '../../components/RequestList/RequestList';

const RequestListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState(null);

  return(
    <>
      <div className='content'>
        {requests && <RequestList requests={requests} />}
        </div>
    </>
  )
}

export default RequestListPage;