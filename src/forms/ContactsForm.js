import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactsForm = (props) => {
  return (
    <Formik
      initialValues={{ email: '', mobile: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required('Required')
          .email('Invalid email address'),
        mobile: Yup.string()
          .matches(/8[0-9]{3}/, 'Invalid mobile number')
          .required('Required')
      })}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          props.nextStep(values);
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <Form noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email"
              className={`form-control ${touched.email && errors.email ? 'error' : ''}`} />
            <ErrorMessage name="email">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile in format 8xxx</label>
            <Field id="mobile" name="mobile" type="tel"
              className={`form-control ${touched.mobile && errors.mobile ? 'error' : ''}`} />
            <ErrorMessage name="mobile">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-secondary mr-2" type="button" onClick={props.prevStep}>
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

// <div className="form-group">
// <label htmlFor="gender">Gender</label>
// <Field id="gender" name="gender" as="select" className="form-control">
//   <option value="">Select gender</option>
//   <option value="male">Male</option>
//   <option value="female">Female</option>
// </Field>
// <ErrorMessage name="gender">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
// </div>

export default ContactsForm;