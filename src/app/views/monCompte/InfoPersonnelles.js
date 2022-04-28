import React from 'react';
import { Formik } from 'formik';
import { classList } from '@utils';
import { updateInfosPersonnelles } from 'app/redux/actions/UserActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PhoneInput from 'react-phone-number-input/input';
import { Button } from 'react-bootstrap';

const InfoPersonnelles = (props) => (
  <div>
    {console.log('props', props)}
    <Formik
      initialValues={{
        email: props.email,
        displayName: props.nom,
        phoneNumber: props.phoneNumber,
      }}
      enableReinitialize={true}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = ` ${props.t('profile.5')}`;
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = ` ${props.t('profile.6')}`;
        }
        if (!values.displayName) {
          errors.displayName = ` ${props.t('profile.7')}`;
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = ` ${props.t('profile.8')}`;
        }
        // else if (
        //   !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(
        //     values.phoneNumber
        //   )
        // ) {
        //   errors.phoneNumber = `Please enter a valid phone number`;
        // }

        console.log(errors);
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);

        props.updateInfosPersonnelles(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,

        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className='row row-cols-1 row-cols-md-2' onSubmit={handleSubmit}>
          <div
            className={classList({
              'mb-3 px-3': true,
              'valid-field': !errors.displayName && touched.displayName,
              'invalid-field': errors.displayName && touched.displayName,
            })}
          >
            <label htmlFor='validationCustom202'> {props.t('profile.2')}</label>
            <input
              type='text'
              className='form-control'
              name='displayName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.displayName}
            />
          </div>
          <div
            className={classList({
              'mb-3 px-3': true,
              'valid-field': !errors.phoneNumber && touched.phoneNumber,
              'invalid-field': errors.phoneNumber && touched.phoneNumber,
            })}
          >
            <label htmlFor='validationCustom202'>{props.t('profile.3')}</label>
            <PhoneInput
              className='form-control'
              // defaultCountry="CA"
              id='phoneNumber'
              value={values.phoneNumber}
              name='phoneNumber'
              onChange={(value) => setFieldValue('phoneNumber', value)}
              required
              onBlur={handleBlur}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <div className='text-danger mt-1 ml-2'>{errors.phoneNumber}</div>
            )}
          </div>
          <div
            className={classList({
              'mb-3 px-3': true,
              'valid-field': !errors.email && touched.email,
              'invalid-field': errors.email && touched.email,
            })}
          >
            <label htmlFor='validationCustom202'>E-mail</label>
            <input
              type='email'
              className='form-control'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              disabled
            />
          </div>

          <div
            className={classList({
              'mb-3 px-3': true,
            })}
          >
            <label>Business Address​</label>
            <input
              type='text'
              className='form-control'
              name='BusinessAddress​'
            />
          </div>

          <div
            className={classList({
              'mb-3 px-3': true,
            })}
          >
            <label>Business Address​</label>
            <input
              type='text'
              className='form-control'
              name='BusinessAddress​'
            />
          </div>

          <div
            className={classList({
              'mb-3 px-3': true,
            })}
          >
            <label>Licence holder's number​​</label>
            <input type='text' className='form-control' name='Licence​' />
          </div>

          <div
            className={classList({
              'mb-3 px-3': true,
            })}
          >
            <label>Licence status​</label>
            <input
              type='text'
              className='form-control'
              name='Licencestatus​​'
            />
          </div>

          <div
            className={classList({
              'mb-3 px-3': true,
            })}
          >
            <label>Authorized field of practice​</label>
            <input
              type='text'
              className='form-control'
              name='Authorizedfieldofpractice​'
            />
          </div>

          <div className='mt-3 px-3'>
            <Button block type='submit' disabled={isSubmitting}>
              {props.t('profile.4')}
            </Button>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

const mapStateToProps = (state) => ({
  updateInfosPersonnelles: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, {
  updateInfosPersonnelles,
})(InfoPersonnelles);
