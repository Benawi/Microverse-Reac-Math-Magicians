import React, { state } from 'react';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorObj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState({ calculatorObj: obj });
  }

  