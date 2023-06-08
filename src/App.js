/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import Calculator from './components/calculator';
import GetQuotes from './components/displayQuoate';

function App() {
  const [calculatorObj, setCalculatorObj] = useState(0);
  return (
    <div className="App">
      <Calculator
        total={calculatorObj.total}
        next={calculatorObj.next}
        operation={calculatorObj.operation}
        setCalculatorObj={setCalculatorObj}
      />
      <GetQuotes />
    </div>

  );
}

export default App;
