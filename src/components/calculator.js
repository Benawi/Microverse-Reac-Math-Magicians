import React, { useState } from 'react';
import Buttons from './buttonsComponents';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [count, setCount] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    setCount(calculate(count, value));
  };

  return (
    <>
      <div className="math-container">
        <div className="para">
          <h2>Let&apos;s do some math!</h2>
          <p>
            Once upon a time, there was a student who was taking a math test. She was feeling pretty
            confident until she realized she forgot her calculator. Panicking, she asked the person
            sitting next to her if she could borrow theirs. The student handed her the calculator,
            but before she could even press a button, it started beeping uncontrollably. Confused,
            she turned it over and saw a note that read, &quot;Warning: This calculator is
            possessed. Use at your own risk.&quot;
          </p>
          <p>
            The student didn&apos;t believe in ghosts, but she didn&apos;t want to take any chances.
            She tried to give the calculator back, but the person next to her just shrugged and
            said, &quot;Eh, it&apos;s been acting up lately. Just press the &quot;on&quot; button
            a few times and it should work.&quot; The student hesitantly turned on the calculator,
            and to her surprise, it started spitting out answers on its own. It was like the
            calculator had a mind of its own! She quickly finished the test and returned the
            calculator, feeling relieved to be done with it. From then on, she always made sure to
            bring her own calculator to exams - just in case.
          </p>
        </div>
        <div className="content-container">
          <input className="display-screen result-display" type="text" value={count.next || count.operation || count.total || '0'} readOnly />
          <div className="btn-container ">
            <Buttons type="button" value="AC" handleClick={handleClick} />
            <Buttons type="button" value="+/-" handleClick={handleClick} />
            <Buttons type="button" value="%" handleClick={handleClick} />
            <Buttons className="operators-buttons" type="button" value="÷" handleClick={handleClick} />
          </div>

          <div className="btn-container">
            <Buttons type="button" value="7" handleClick={handleClick} />
            <Buttons type="button" value="8" handleClick={handleClick} />
            <Buttons type="button" value="9" handleClick={handleClick} />
            <Buttons className="operators-buttons" type="button" value="x" handleClick={handleClick} />
          </div>

          <div className="btn-container">
            <Buttons type="button" value="4" handleClick={handleClick} />
            <Buttons type="button" value="5" handleClick={handleClick} />
            <Buttons type="button" value="6" handleClick={handleClick} />
            <Buttons className="operators-buttons" type="button" value="-" handleClick={handleClick} />
          </div>

          <div className="btn-container">
            <Buttons type="button" value="1" handleClick={handleClick} />
            <Buttons type="button" value="2" handleClick={handleClick} />
            <Buttons type="button" value="3" handleClick={handleClick} />
            <Buttons className="operators-buttons" type="button" value="+" handleClick={handleClick} />
          </div>

          <div className="btn-container">
            <Buttons className="wide-btn " type="button" value="0" handleClick={handleClick} />
            <Buttons type="button" value="." handleClick={handleClick} />
            <Buttons className="operators-buttons" type="button" value="=" handleClick={handleClick} />
          </div>

        </div>
      </div>
    </>
  );
};

export default Calculator;
