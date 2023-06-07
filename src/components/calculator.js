import PropTypes from 'prop-types';
import React from 'react';
import calculate from '../logic/calculate';

const displayResult = (calculatorObj) => {
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
};
const updateCalculation = (obj, button, setObj) => {
  const newObj = calculate(obj, button);
  setObj(newObj);
};

const CalculatorButton = ({ value, func, className = '' }) => (
  <div
    className={`calc-button-style ${className}`}
    role="button"
    tabIndex="0"
    onClick={func}
    onKeyPress={func}
  >
    {value}
  </div>
);

export default function Calculator(props) {
  const {
    total, next, operation, setCalculatorObj,
  } = props;
  const calculatorObj = { total, next, operation };
  const buttonArr = [
    { value: 'AC', func: () => { updateCalculation(calculatorObj, 'AC', setCalculatorObj); } },
    { value: '+/-', func: () => { updateCalculation(calculatorObj, '+/-', setCalculatorObj); } },
    { value: '%', func: () => { updateCalculation(calculatorObj, '%', setCalculatorObj); } },
    { value: '÷', func: () => { updateCalculation(calculatorObj, '÷', setCalculatorObj); }, className: 'operators-buttons' },
    { value: '7', func: () => { updateCalculation(calculatorObj, '7', setCalculatorObj); } },
    { value: '8', func: () => { updateCalculation(calculatorObj, '8', setCalculatorObj); } },
    { value: '9', func: () => { updateCalculation(calculatorObj, '9', setCalculatorObj); } },
    { value: 'x', func: () => { updateCalculation(calculatorObj, 'x', setCalculatorObj); }, className: 'operators-buttons' },
    { value: '4', func: () => { updateCalculation(calculatorObj, '4', setCalculatorObj); } },
    { value: '5', func: () => { updateCalculation(calculatorObj, '5', setCalculatorObj); } },
    { value: '6', func: () => { updateCalculation(calculatorObj, '6', setCalculatorObj); } },
    { value: '-', func: () => { updateCalculation(calculatorObj, '-', setCalculatorObj); }, className: 'operators-buttons' },
    { value: '1', func: () => { updateCalculation(calculatorObj, '1', setCalculatorObj); } },
    { value: '2', func: () => { updateCalculation(calculatorObj, '2', setCalculatorObj); } },
    { value: '3', func: () => { updateCalculation(calculatorObj, '3', setCalculatorObj); } },
    { value: '+', func: () => { updateCalculation(calculatorObj, '+', setCalculatorObj); }, className: 'operators-buttons' },
    { value: '0', func: () => { updateCalculation(calculatorObj, '0', setCalculatorObj); }, className: 'zero-button' },
    { value: '.', func: () => { updateCalculation(calculatorObj, '.', setCalculatorObj); } },
    { value: '=', func: () => { updateCalculation(calculatorObj, '=', setCalculatorObj); }, className: 'operators-buttons' },
  ];
  
}

Calculator.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
  setCalculatorObj: PropTypes.func.isRequired,
};

Calculator.defaultProps = {
  total: 0,
  next: null,
  operation: null,
};
