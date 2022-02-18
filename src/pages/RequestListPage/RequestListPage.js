import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RequestList from '../../components/RequestList/RequestList';
import MessagePrompt from '../../components/MessagePrompt/MessagePrompt';
import ArrayFilter from '../../components/ArrayFilter/ArrayFilter';
import Paginator from '../../components/Paginator/Paginator';
import { editRequest, setFormPrompt } from '../../app/redux';
import { checkListOverflow } from '../../app/utilities/utilities';
import { getRequestsByStatus, getNextPageByStatus, getFirstPageByStatus } from '../../app/data/requestsActions';
import { getUserById } from '../../app/data/usersActions';

import {
  FORM_TYPE_DESKTOP,
  FORM_TYPE_LAPTOP,
  FORM_TYPE_MOUSE,
  PENDING_KEYWORD,
  SORT_DATE_ASCENDING_KEYWORD,
  SORT_DATE_DESCENDING_KEYWORD,
  ITEMS_PER_PAGE
} from '../../app/utilities/index'

const RequestListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [originalRequests, setOriginalRequests] = useState([]);
  const [lastRequest, setLastRequest] = useState(null);
  const [isLastPage, setIsLastPage] = useState(null);
  const dispatch = useDispatch();
  const msg = useSelector(state => state.form.msg);

  const filterList = [
    {
      name: 'All',
      type: 'all',
      isDefault: true
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

  const sortList = [
    {
      name: 'Date ascending',
      type: SORT_DATE_ASCENDING_KEYWORD
    },
    {
      name: 'Date descending',
      type: SORT_DATE_DESCENDING_KEYWORD
    },
  ]

  const filterRequestList = type => {
    if (type === 'all') {
      setRequests([...originalRequests]);
      return;
    }
    const filteredArray = originalRequests.filter(item => item.type === type);
    setRequests([...filteredArray]);
  }

  const sortRequestList = type => {
    let sortedArray = [];
    switch (type) {
      case SORT_DATE_ASCENDING_KEYWORD: {
        sortedArray = [...originalRequests.sort((a, b) => {
          return a.date - b.date;
        })];
        break;
      }
      case SORT_DATE_DESCENDING_KEYWORD:
      default: {
        sortedArray = [...originalRequests.sort((a, b) => {
          return b.date - a.date;
        })];
        break;
      }
    }
    setRequests([...sortedArray]);
  }

  const loadMoreRequests = async () => {
    const requestsData = await getNextPageByStatus(lastRequest, PENDING_KEYWORD);
    const isLastPage = checkListOverflow(requestsData, ITEMS_PER_PAGE);
    setIsLastPage(isLastPage);
    requestsData.shift();

    setLastRequest({ ...requestsData[requestsData.length - 1] });

    setRequests([...requests, ...requestsData]);
    setOriginalRequests([...requests, ...requestsData]);
  }

  const handleChangeRequestStatus = (request) => {
    dispatch(editRequest(request));

    setRequests(requests.filter(item => item.id !== request.id));
    setOriginalRequests(originalRequests.filter(item => item.id !== request.id));

  }

  useEffect(() => {
    const getPendingRequests = async () => {
      const requestData = await getFirstPageByStatus(PENDING_KEYWORD);

      for (let i = 0; i < requestData.length; i++) {
        requestData[i].user = await getUserById(requestData[i].userId);
      }

      setLastRequest({...requestData[requestData.length-1]});
      setRequests(requestData);
      setOriginalRequests(requestData);
      setIsLoading(false);
    }

    getPendingRequests();
  }, [])

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

        <ArrayFilter title='Filter' filterList={filterList} handleFilterArray={(type) => filterRequestList(type)} />
        <ArrayFilter title='Sort' filterList={sortList} handleFilterArray={(type) => sortRequestList(type)} />

        {requests && <RequestList requests={requests} handleChangeRequestStatus={handleChangeRequestStatus} />}

        <Paginator
          isLastPage={isLastPage}
          handleChangePage={() => loadMoreRequests()}
        />
      </div>
    </>
  )
}

export default RequestListPage;