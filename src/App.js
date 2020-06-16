import React from 'react';
import Steps from './Steps';
import BasicForm from './forms/BasicForm';
import ContactsForm from './forms/ContactsForm';
import AvatarForm from './forms/AvatarForm';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      values: {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        gender: 'male',
        email: '',
        mobile: '',
        country: '',
        city: '',
        avatar: null
      },
      currentStep: 1
    };

    this.stepNames = ['Basic', 'Contacts', 'Avatar', 'Finish'];
  }

  handlePreviousStep = values => {
    this.setState(state => ({
      values: { ...state.values, ...values },
      currentStep: state.currentStep > 1 ? state.currentStep - 1 : state.currentStep
    }));
  };

  handleNextStep = values => {
    this.setState(state => ({
      values: { ...state.values, ...values },
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
            { this.state.currentStep === 1 ? <BasicForm values={this.state.values} prevStep={this.handlePreviousStep} nextStep={this.handleNextStep} /> : null }
            { this.state.currentStep === 2 ? <ContactsForm values={this.state.values} prevStep={this.handlePreviousStep} nextStep={this.handleNextStep} /> : null }
            { this.state.currentStep === 3 ? <AvatarForm values={this.state.values} prevStep={this.handlePreviousStep} nextStep={this.handleNextStep} /> : null }
            {currentStep}
          </div>
        </div>
      </div>
    );
  }
}
