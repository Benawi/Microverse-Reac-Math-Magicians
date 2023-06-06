import React from "react";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      returns: 0,
    };
  }
  render() {
    const { result } = this.state;
    return (
      <div id="calculator-container" className="calculator-container">
        <div id="result" className="result-display calc-button-style">
          {result}
        </div>
        
      </div>
    );
  }
}
