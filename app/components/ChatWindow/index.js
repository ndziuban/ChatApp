import React from 'react';
import PropTypes from 'prop-types';

import InputArea from '../InputArea';

class ChatWindow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(message) {
    this.props.onSubmit(this.props.sender, message)
  }

  onChange() {
    this.props.onSenderTyping(this.props.sender)
  }

  render() {
    const { sender, receiver, messages, receiverIsTyping } = this.props;

    return (
      <div>
        {sender} - Messages:
        <div>
          { messages.map(msg => <p>{msg.sender_id} says: {msg.text}</p>) }
        </div>
        { receiverIsTyping && <div><p>{receiver} is typing...</p></div> }
        <InputArea onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
};

ChatWindow.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSenderTyping: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string),
  sender: PropTypes.string.isRequired,
  receiver: PropTypes.string.isRequired,
  receiverIsTyping: PropTypes.bool,
};

export default ChatWindow;
