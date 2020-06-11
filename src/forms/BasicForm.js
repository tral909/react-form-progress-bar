import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BasicForm = (props) => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', password: '', repeatPassword: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(5, 'Must be 5 characters or more')
          .required('Required'),
        lastName: Yup.string()
          .min(5, 'Must be 5 characters or more')
          .required('Required'),
        password: Yup.string()
          .min(6, 'Must be 6 characters or more')
          .required('Required'),
        repeatPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], "Passwords don't match")
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form noValidate>
        <div className="form-group">
          <label htmlFor="firstName">Firstname</label>
          <Field id="firstName" name="firstName" className="form-control" type="text" />
          <ErrorMessage name="firstName">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Lastname</label>
          <Field id="lastName" name="lastName" className="form-control" type="text" />
          <ErrorMessage name="lastName">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" className="form-control" type="password" />
          <ErrorMessage name="password">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat password</label>
          <Field id="repeatPassword" name="repeatPassword" className="form-control" type="password" />
          <ErrorMessage name="repeatPassword">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-secondary mr-2" type="button" onClick={props.prevStep}>
            Previous
          </button>
          <button className="btn btn-primary" type="submit" onClick={props.nextStep}>
            Next
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default BasicForm;