import PropTypes from 'prop-types';
import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  calculate(obj, button) {
    const { updateState } = this.props;
    let objNew;
    try {
      objNew = calculate(obj, button);
    } catch {
      objNew = {
        total: 'Cannot calculate the operation by 0',
      };
    }
    this.calculatorObj = objNew;
    updateState(objNew);
  }

  displayResult() {
    const { calculatorObj } = this.props;
    const { total } = calculatorObj;
    const { next } = calculatorObj;
    const { operation } = calculatorObj;
    let result = null;

    if (total === null && next === null) {
      result = 0;
    } else if (next !== null && total === null) {
      result = next;
    } else if (next !== null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation} ${next}`;
      } else {
        result = total;
      }
    } else if (next === null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation}`;
      } else {
        result = total;
      }
    }

    return result;
  }

}