import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './style.css';
import ItemEdit from '../../components/ItemEdit/ItemEdit';
import MessagePrompt from '../../components/MessagePrompt/MessagePrompt';
import LoadingPrompt from '../../components/LoadingPrompt/LoadingPrompt';

import { editDeviceDetail, setFormPrompt } from '../../app/redux';
import { getDeviceById } from '../../app/data/devicesActions';

const DeviceEditPage = () => {
  const dispatch = useDispatch();
  const msg = useSelector(state => state.form.msg);
  const loadingMsg = useSelector(state => state.form.loading);

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [device, setDevice] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const getDevice = async () => {
      const deviceData = await getDeviceById(id);

      if (deviceData !== undefined) {
        setDevice(deviceData);
        setImages(deviceData.images);
        setError(null);
        setIsLoading(false);
      } else {
        setError('Không có dữ liệu');
        setIsLoading(false);
      }
    }

    getDevice();
  }, [])

  const handleSubmit = (formData) => {
    if (images.length === 0) {
      dispatch(setFormPrompt('Cần có ít nhất 1 ảnh!'));
      return;
    }
    formData.newImages = [...images.filter(item => item instanceof (File))];
    formData.images = [...images.filter(item => !(item instanceof (File)))];

    dispatch(editDeviceDetail(formData));
  }

  const handleAddImage = (images) => {
    setImages([...images]);
  }

  if (isLoading) {
    return <div className='content'><p>loading...</p></div>;
  }
  if (error) {
    return <div className='content'><p>{error}</p></div>;
  }

  return (
    <>
      <div className='content'>
        {loadingMsg &&
          <LoadingPrompt msg={loadingMsg} />
        }
        {msg &&
          <MessagePrompt
            msg={msg} button={{ text: 'OK' }}
            handleClick={() => { dispatch(setFormPrompt(null)) }} />
        }
        <h2>Edit device information</h2>
        {device && <ItemEdit
          detail={device} images={images}
          handleSubmit={(formData) => handleSubmit(formData)}
          handleAddImage={(image) => handleAddImage(image)}
        />}
      </div>
    </>
  )
}

export default DeviceEditPage;