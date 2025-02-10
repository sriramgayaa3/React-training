import React, { Component } from 'react';
import './ClassComponent.css'; // Import the CSS file

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'I am attending React class!!!!!',
      clicked: false
    };
  }

  changeMessage = () => {
    this.setState({
      message: 'I am attending the react class!',
      clicked: !this.state.clicked
    });
  };

  render() {
    let applyStyle = this.state.clicked ? 'heading2' : 'heading1';

    return (
      <div>
        <h1 className={applyStyle}>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

export default ClassComponent;
