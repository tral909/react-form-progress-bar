import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BasicForm = (props) => {
  const { values: { firstName, lastName, password, repeatPassword, gender }, nextStep, prevStep } = props;
  return (
    <Formik
      initialValues={{ firstName, lastName, password, repeatPassword, gender }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, 'Must be 3 characters or more')
          .required('Required'),
        lastName: Yup.string()
          .min(3, 'Must be 3 characters or more')
          .required('Required'),
        password: Yup.string()
          .min(3, 'Must be 3 characters or more')
          .required('Required'),
        repeatPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], "Passwords don't match")
          .required('Required')
      })}
      onSubmit={values => {
        nextStep(values);
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   nextStep(values);
        // }, 400);
      }}
    >
      {({ values, errors, touched }) => (
        <Form noValidate>
          <div className="form-group">
            <label htmlFor="firstName">Firstname</label>
            <Field id="firstName" name="firstName" type="text"
              className={`form-control ${touched.firstName && errors.firstName ? 'error' : ''}`} />
            <ErrorMessage name="firstName">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Lastname</label>
            <Field id="lastName" name="lastName" type="text"
              className={`form-control ${touched.lastName && errors.lastName ? 'error' : ''}`} />
            <ErrorMessage name="lastName">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password"
              className={`form-control ${touched.password && errors.password ? 'error' : ''}`} />
            <ErrorMessage name="password">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat password</label>
            <Field id="repeatPassword" name="repeatPassword" type="password"
              className={`form-control ${touched.repeatPassword && errors.repeatPassword ? 'error' : ''}`} />
            <ErrorMessage name="repeatPassword">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
          </div>
          <div className="form-group">
            Gender
            <div className="form-check">
              <Field className="form-check-input" id="male" name="gender" type="radio" value="male" />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check">
              <Field className="form-check-input" id="female" name="gender" type="radio" value="female" />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>

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

export default BasicForm;