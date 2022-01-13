const declareNewDevice = (formData) => {
  const uri = process.env.REACT_APP_BASE_API_URL + '/devices';

  return (dispatch) => {
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(() => {
      return true;
    }).catch(error => {
      console.log(error);
      return false;
    })
  }
}

export { declareNewDevice }