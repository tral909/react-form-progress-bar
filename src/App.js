import React from 'react';
import Steps from './Steps';
import BasicForm from './forms/BasicForm';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentStep: 1
    };

    this.stepNames = ['Basic', 'Contacts', 'Avatar', 'Finish'];
  }

  handlePreviousStep = () => {
    this.setState(state => ({
      currentStep: state.currentStep > 1 ? state.currentStep - 1 : state.currentStep
    }));
  };

  handleNextStep = () => {
    this.setState(state => ({
      currentStep: state.currentStep < this.stepNames.length + 1 ? state.currentStep + 1 : state.currentStep
    }));
  };

  render() {
    const { currentStep } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="offset-2"></div>
          <div className="col-8">
            <Steps currentStep={currentStep} stepNames={this.stepNames} />
            <BasicForm prevStep={this.handlePreviousStep} nextStep={this.handleNextStep} />
            {currentStep}
          </div>
        </div>
      </div>
    );
  }
}
