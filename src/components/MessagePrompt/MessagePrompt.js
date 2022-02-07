import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class MessagePrompt extends Component {
  constructor(props){
    super(props);
    this.state = {
      msg: props.msg,
      button: props.button
    }
  }

  handleClick = () => {
    this.props.handleClick();
  }

  render() { 
    const msg = this.state.msg;
    const button = this.state.button;

    return (
      <div className='prompt-container'>
        <div className='message-prompt'>
          <p>{msg}</p>
          {button && <button className='button' onClick={this.handleClick}>{button.text}</button>}
        </div>
      </div>
    );
  }
}

MessagePrompt.defaultProps = {
  msg: 'OK'
}

MessagePrompt.propsTypes = {
  msg: PropTypes.string.isRequired
}

export default MessagePrompt;