import React from 'react';
import { Formik, Form } from 'formik';

const AvatarForm = (props) => {
  const { values: { avatar }, nextStep, prevStep } = props;
  return (
    <Formik
      initialValues={{ avatar }}
      onSubmit={values => {
        nextStep(values);
      }}
    >
      {({ values }) => (
        <Form noValidate>
          <div className="d-flex justify-content-center">
            <button className="btn btn-secondary mr-2" type="button" onClick={() => prevStep(values)}>
              Previous
        </button>
            <button className="btn btn-primary" type="submit">
              Next
        </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AvatarForm;