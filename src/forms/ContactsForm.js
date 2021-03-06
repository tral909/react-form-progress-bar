import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import countries from '../data/countries';
import cities from '../data/cities';

const ContactsForm = (props) => {
  const { values: { email, mobile, country, city }, nextStep, prevStep } = props;
  return (
    <Formik
      initialValues={{ email, mobile, country, city }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required('Required')
          .email('Invalid email address'),
        mobile: Yup.string()
          .matches(/8[0-9]{3}/, 'Invalid mobile number')
          .required('Required'),
        country: Yup.string()
          .required('Required'),
        city: Yup.string()
          .required('Required')
      })}
      onSubmit={ values => nextStep(values) }
    >
      {({ values, errors, touched }) => (
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
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <Field id="country" name="country" as="select"
              className={`form-control ${touched.country && errors.country ? 'error' : ''}`}>
              <option key={0} value="">Select country</option>
              { countries.map(country => <option key={country.id} value={country.name}>{country.name}</option>) }
            </Field>
            <ErrorMessage name="country">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <Field id="city" name="city" as="select"
              className={`form-control ${touched.city && errors.city ? 'error' : ''}`}>
              <option key={0} value="">Select city</option>
              { Object.keys(cities)//.filter(city => city.country === selectedCountry.id)
                .map(id => <option key={id} value={cities[id].name}>{cities[id].name}</option>) }
            </Field>
            <ErrorMessage name="city">{msg => <div className="error-msg">{msg}</div>}</ErrorMessage>
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

// let selectedCountry = {id: -1};
// let countrySelectOptions = document.querySelectorAll('#country option');

// countrySelectOptions.forEach(option => option.addEventListener("click", function(event) {
//   console.log(event.target.value)
//   selectedCountry = event.target.value;
// }));

//todo make dinamic country and city selection from js files

export default ContactsForm;