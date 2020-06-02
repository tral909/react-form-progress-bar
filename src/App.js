import React from "react";
import Steps from "./Steps";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentStep: 1
    };
  }

  handlePreviousStep = () => {
    this.setState(state => ({
      currentStep: state.currentStep - 1
    }));
  };

  handleNextStep = () => {
    this.setState(state => ({
      currentStep: state.currentStep + 1
    }));
  };

  render() {
    const { currentStep } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="offset-2"></div>
          <div className="col-8">
            <Steps currentStep={currentStep} />
            <div className="d-flex justify-content-center">
              <button type="button" onClick={this.handlePreviousStep}>
                Previous
              </button>
              <button type="button" onClick={this.handleNextStep}>
                Next
              </button>
              {currentStep}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
