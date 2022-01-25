import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './style.css';
import LaptopEdit from '../../components/ItemEdit/LaptopEdit';
import DesktopEdit from '../../components/ItemEdit/DesktopEdit';
import MouseEdit from '../../components/ItemEdit/MouseEdit';
import OtherEdit from '../../components/ItemEdit/OtherEdit';
import MessagePrompt from '../../components/MessagePrompt/MessagePrompt';

import { FORM_TYPE_DESKTOP, FORM_TYPE_LAPTOP, FORM_TYPE_MOUSE, FORM_TYPE_OTHER } from '../../app/utilities';
import { editDeviceDetail, setFormPrompt } from '../../app/redux';

const DeviceEditPage = () => {
  const dispatch = useDispatch();
  const msg = useSelector(state => state.form.msg);

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [device, setDevice] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const getDevice = async () => {
      const deviceURI = process.env.REACT_APP_BASE_API_URL + '/devices?id=' + id;
      const deviceReponse = await fetch(deviceURI);
      const deviceData = await deviceReponse.json();

      if (deviceData[0] !== undefined) {
        setDevice(deviceData[0]);
        setImages(deviceData[0].images);
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
    formData.images = images;

    dispatch(editDeviceDetail(formData));
  }

  const handleAddImage = (images) => {
    setImages([...images]);
  }

  const renderDevice = (device) => {
    switch (device.type) {
      case FORM_TYPE_LAPTOP:
        return <LaptopEdit
          detail={device} images={images}
          handleSubmit={(formData) => handleSubmit(formData)}
          handleAddImage={(image) => handleAddImage(image)}
        />
      case FORM_TYPE_DESKTOP:
        return <DesktopEdit
          detail={device} images={images}
          handleSubmit={(formData) => handleSubmit(formData)}
          handleAddImage={(image) => handleAddImage(image)}
        />
      case FORM_TYPE_MOUSE:
        return <MouseEdit
          detail={device} images={images}
          handleSubmit={(formData) => handleSubmit(formData)}
          handleAddImage={(image) => handleAddImage(image)}
        />
      case FORM_TYPE_OTHER:
        return <OtherEdit
          detail={device} images={images}
          handleSubmit={(formData) => handleSubmit(formData)}
          handleAddImage={(image) => handleAddImage(image)}
        />
      default:
        return <p>other</p>
    }
  }

  if (isLoading) {
    return <div className='content'><p>loading...</p></div>;
  } else if (error) {
    return <div className='content'><p>{error}</p></div>;
  } else {
    return (
      <>
        <div className='content'>
          {msg && <MessagePrompt msg={msg} button={{ text: 'OK' }} handleClick={() => { dispatch(setFormPrompt(null)) }} />}
          <h2>Edit device information</h2>
          {device && renderDevice(device)}
        </div>
      </>
    )
  }
}

export default DeviceEditPage;