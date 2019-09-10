import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Message extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`message ${this.props.isTypingMessage ? "typing" : ""} ${this.props.isOwnMessage ? "sender" : ""}`}>
        <span>{this.props.text}</span>
      </div>
    );
  }
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  isOwnMessage: PropTypes.bool,
  isTypingMessage: PropTypes.bool,
};

export default Message;
