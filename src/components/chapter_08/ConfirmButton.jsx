import React, { useState } from "react";

/* function component form */

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed); 
  }

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? `checked`:`check`}
    </button>
  );
}

/* class component form */
/*
class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };
    
    // bind
    // this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }

  // handleConfirm() {
  //   this.setState((prevState) => ({
  //     isConfirmed: !prevState.isConfirmed,
  //   }));
  // }

  render() { 
    return (
      <button
        onClick={this.handleConfirm}
        disabled={this.state.isConfirmed}
      >
        {this.state.isConfirmed ? "checked":"check"}
      </button>
    );
  }
}
*/ 

export default ConfirmButton;