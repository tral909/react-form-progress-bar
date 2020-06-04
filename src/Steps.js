import React from "react";
import cn from "classnames";

export default class Steps extends React.Component {
  render() {
    const { currentStep, stepNames } = this.props;
    return (
      <div className="steps mt-4 mb-4">
        {
          stepNames.map((name, index) => (
              <div
                key={index}
                className={cn('step', {
                  'is-active': currentStep === index + 1,
                  'is-completed': currentStep > index + 1
                })}
              >
                <div className="step__marker">{index + 1}</div>
                <div className="step__title mt-1">{name}</div>
              </div>
            )
          )
        }
      </div>
    );
  }
}
