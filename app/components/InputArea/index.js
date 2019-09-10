import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange();
  }

  handleSubmit(e) {
    if(this.state.value.match(/\S/g)) {
      this.props.onSubmit(this.state.value)
      this.setState({ value: '' });
    }
    e.preventDefault();
  }

  onEnterPress(e) {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="2"
          className="input"
          placeholder="Type here to send a message..."
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.onEnterPress}
        />
      </div>
    );
  }
};

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
