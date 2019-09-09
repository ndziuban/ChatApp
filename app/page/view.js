import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

import ChatWindow from '../components/ChatWindow';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(id, msg) {
    const newMsg = { sender_id: id, text: msg };
    this.setState(prevState => {
      return { messages: [...prevState.messages, newMsg] };
    });
  }

  render() {
    return (
      <div>
        <ChatWindow id="Persona_1" messages={this.state.messages} onSubmit={this.onSubmit}/>
        <ChatWindow id="Persona_2" messages={this.state.messages} onSubmit={this.onSubmit}/>
      </div>
    );
  }
};

Main.propTypes = {
};

export default Main;
