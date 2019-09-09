import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

import ChatWindow from '../components/ChatWindow';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      typing: {},
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSenderTyping = this.onSenderTyping.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState(prevState => {
      const now = Date.now();
      const typing = { ...prevState.typing };
      Object.keys(typing).forEach(id => {
        if(now - typing[id] > 1000) {
          delete typing[id];
        }
      });

      return { typing };
    }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onSubmit(id, msg) {
    const newMsg = { sender_id: id, text: msg };
    this.setState(prevState => {
      if(prevState.typing[id]) {
        delete prevState.typing[id];
      }
      return { messages: [...prevState.messages, newMsg], typing: prevState.typing };
    });
  }

  onSenderTyping(id) {
    this.setState(prevState => {
      const typing = { ...prevState.typing };
      typing[id] = Date.now();
      return { typing };
    });
  }

  render() {
    return (
      <div>
        <ChatWindow
          sender="Laura"
          receiver="Rob"
          receiverIsTyping={!!this.state.typing["Rob"]}
          messages={this.state.messages}
          onSubmit={this.onSubmit}
          onSenderTyping={this.onSenderTyping}
        />
        <ChatWindow
          sender="Rob"
          receiver="Laura"
          receiverIsTyping={!!this.state.typing["Laura"]}
          messages={this.state.messages}
          onSubmit={this.onSubmit}
          onSenderTyping={this.onSenderTyping}
        />
      </div>
    );
  }
};

Main.propTypes = {
};

export default Main;
