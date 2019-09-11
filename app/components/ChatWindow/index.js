import React from 'react';
import PropTypes from 'prop-types';
import InputArea from '../InputArea';
import Message from '../Message';

import './styles.scss';

class ChatWindow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.messageEnd = React.createRef();
  }

  componentDidUpdate() {
    this.messageEnd.current.scrollIntoView(false);
  }

  onSubmit(message) {
    this.props.onSubmit(this.props.sender, message);
  }

  onChange() {
    this.props.onSenderTyping(this.props.sender)
  }

  render() {
    const { sender, receiver, messages, receiverIsTyping } = this.props;

    return (
      <div className="chat-window">
        <div className="chat-window__header">
          <div className="header-content">
            <span>{sender}</span>
            <span className="header-content__subtext">Active</span>
          </div>
        </div>
        <div className="overflow-content">
          <div className="chat-window__message-container">
            { messages.map(msg => <Message text={msg.text} isOwnMessage={msg.sender_id === sender} />) }
            { receiverIsTyping && <Message text={`${receiver} is typing...`} isOwnMessage={false} isTypingMessage /> }
            <div ref={this.messageEnd} />
          </div>
        </div>
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
