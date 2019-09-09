import React from 'react';
import PropTypes from 'prop-types';

import InputArea from '../InputArea';

class ChatWindow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(msg) {
    this.props.onSubmit(this.props.id, msg)
  }

  render() {
    return (
      <div>
        {this.props.id} - Messages:
        <div>
          {
            this.props.messages.map(msg => <p>{msg.sender_id} says: {msg.text}</p>)
          }
        </div>
        <InputArea onSubmit={this.onSubmit}/>
      </div>
    );
  }
};

ChatWindow.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
};

export default ChatWindow;
