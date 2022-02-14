import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoadingPrompt extends Component {
  constructor(props){
    super(props);
    this.state = {
      msg: props.msg,
    }
  }

  render() { 
    const msg = this.state.msg;

    return (
      <div className='prompt-container'>
        <div className='message-prompt'>
          <p>{msg}</p>
        </div>
      </div>
    );
  }
}

LoadingPrompt.defaultProps = {
  msg: 'OK'
}

LoadingPrompt.propsTypes = {
  msg: PropTypes.string.isRequired
}

export default LoadingPrompt;