import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Formik } from "formik";
import * as yup from "yup";
import { classList } from "@utils";

class FormValidation extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    city: "",
    cardNumber: "4444444444444444",
    state: "",
    password: "",
    repassword: "",
    zip: "",
    agree: [], //returns ['on'] when on/checked
    checkbox1: "",
    checkbox2: "",
    radio: "",
    range: {
      startDate: new Date(),
      endDate: (() => {
        let date = new Date();
        date.setDate(date.getDate() + 7);
        return date;
      })()
    }
  };

  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Forms", path: "/forms" },
            { name: "Form Validation" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-8">
            <p>
              For custom Bootstrap form validation messages, you’ll need to add
              the <code>novalidate</code> boolean attribute to your
              <code>form</code>. This disables the browser default feedback
              tooltips, but still provides access to the form validation APIs in
              JavaScript. Try to submit the form below; our JavaScript will
              intercept the submit button and relay feedback to you. When
              attempting to submit, you’ll see the <code>:invalid</code> and
              <code>:valid</code> styles applied to your form controls.
            </p>
            <div className="card mb-4">
              <div className="card-body">
                <Formik
                  initialValues={this.state}
                  validationSchema={basicFormSchema}
                  onSubmit={this.handleSubmit}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                  }) => {
                    return (
                      <form
                        className="needs-validation"
                        onSubmit={handleSubmit}
                        noValidate
                      >
                        <div className="form-row">
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field":
                                !errors.firstName && touched.firstName,
                              "invalid-field":
                                errors.firstName && touched.firstName
                            })}
                          >
                            <label htmlFor="validationCustom202">
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom202"
                              placeholder="First name"
                              name="firstName"
                              value={values.firstName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              First name is required
                            </div>
                          </div>
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field":
                                touched.lastName && !errors.lastName,
                              "invalid-field":
                                touched.lastName && errors.lastName
                            })}
                          >
                            <label htmlFor="validationCustom222">
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom222"
                              placeholder="Last name"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="lastName"
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                              Last name is required
                            </div>
                          </div>
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field":
                                touched.username && !errors.username,
                              "invalid-field":
                                touched.username && errors.username
                            })}
                          >
                            <label htmlFor="validationCustomUsername">
                              Username
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="inputGroupPrepend"
                                >
                                  @
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustomUsername"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                required
                              />
                              <div className="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field": touched.city && !errors.city,
                              "invalid-field": touched.city && errors.city
                            })}
                          >
                            <label htmlFor="validationCustom03">City</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom03"
                              placeholder="City"
                              name="city"
                              value={values.city}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid city.
                            </div>
                          </div>
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field": touched.state && !errors.state,
                              "invalid-field": touched.state && errors.state
                            })}
                          >
                            <label htmlFor="validationCustom204">State</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom204"
                              placeholder="State"
                              name="state"
                              value={values.state}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid state.
                            </div>
                          </div>
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field": touched.zip && !errors.zip,
                              "invalid-field": touched.zip && errors.zip
                            })}
                          >
                            <label htmlFor="validationCustom05">Zip</label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom05"
                              placeholder="Zip"
                              name="zip"
                              value={values.zip}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid zip.
                            </div>
                          </div>
                        </div>
                        <div
                          className={classList({
                            "col-md-4 mb-3": true,
                            "valid-field":
                              touched.agree &&
                              !errors.agree &&
                              values.agree.length,
                            "invalid-field":
                              touched.agree &&
                              errors.agree &&
                              !values.agree.length
                          })}
                        >
                          <label className="checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              name="agree"
                              value={values.agree}
                              checked={values.agree.length}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <span>Agree to terms and conditions</span>
                            <span className="checkmark"></span>
                          </label>

                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                        <button className="btn btn-primary" type="submit">
                          Submit form
                        </button>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Tooltip message</div>
                <Formik
                  initialValues={this.state}
                  validationSchema={basicFormSchema}
                  onSubmit={this.handleSubmit}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                  }) => {
                    return (
                      <form
                        className="needs-validation"
                        onSubmit={handleSubmit}
                        noValidate
                      >
                        <div className="form-row">
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field":
                                !errors.firstName && touched.firstName,
                              "invalid-field":
                                errors.firstName && touched.firstName
                            })}
                          >
                            <label htmlFor="validationCustom01">
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              placeholder="First name"
                              name="firstName"
                              value={values.firstName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <div className="valid-tooltip">Looks good!</div>
                            <div className="invalid-tooltip">
                              First name is required
                            </div>
                          </div>
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field":
                                touched.lastName && !errors.lastName,
                              "invalid-field":
                                touched.lastName && errors.lastName
                            })}
                          >
                            <label htmlFor="validationCustom02">
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom02"
                              placeholder="Last name"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="lastName"
                              required
                            />
                            <div className="valid-tooltip">Looks good!</div>
                            <div className="invalid-tooltip">
                              Last name is required
                            </div>
                          </div>
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field":
                                touched.username && !errors.username,
                              "invalid-field":
                                touched.username && errors.username
                            })}
                          >
                            <label htmlFor="validationCustomUsername1">
                              Username
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="inputGroupPrepend"
                                >
                                  @
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustomUsername1"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                required
                              />
                              <div className="invalid-tooltip">
                                Please choose a username.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field": touched.city && !errors.city,
                              "invalid-field": touched.city && errors.city
                            })}
                          >
                            <label htmlFor="validationCustom203">City</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom203"
                              placeholder="City"
                              name="city"
                              value={values.city}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <div className="invalid-tooltip">
                              Please provide a valid city.
                            </div>
                          </div>
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field": touched.state && !errors.state,
                              "invalid-field": touched.state && errors.state
                            })}
                          >
                            <label htmlFor="validationCustom04">State</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom04"
                              placeholder="State"
                              name="state"
                              value={values.state}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <div className="invalid-tooltip">
                              Please provide a valid state.
                            </div>
                          </div>
                          <div
                            className={classList({
                              "col-md-4 mb-3": true,
                              "valid-field": touched.zip && !errors.zip,
                              "invalid-field": touched.zip && errors.zip
                            })}
                          >
                            <label htmlFor="validationCustom205">Zip</label>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustom205"
                              placeholder="Zip"
                              name="zip"
                              value={values.zip}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <div className="invalid-tooltip">
                              Please provide a valid zip.
                            </div>
                          </div>
                        </div>
                        <div
                          className={classList({
                            "col-md-4 mb-3": true,
                            "valid-field":
                              touched.agree &&
                              !errors.agree &&
                              values.agree.length,
                            "invalid-field":
                              touched.agree &&
                              errors.agree &&
                              !values.agree.length
                          })}
                        >
                          <label className="checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              name="agree"
                              value={values.agree}
                              checked={values.agree.length}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <span>Agree to terms and conditions</span>
                            <span className="checkmark"></span>
                          </label>

                          <div className="invalid-tooltip">
                            You must agree before submitting.
                          </div>
                        </div>
                        <button className="btn btn-primary" type="submit">
                          Submit form
                        </button>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const basicFormSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  username: yup.string().required("select any option"),
  city: yup.string().required("birthDay is required"),
  zip: yup.number().required("email is required"),
  agree: yup.string().required("Required"),
  state: yup.string().required("Required")
});

const tooltipFormSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  username: yup.string().required("select any option"),
  city: yup.string().required("birthDay is required"),
  zip: yup.number().required("email is required"),
  agree: yup.string().required("Required"),
  state: yup.string().required("Required")
});

export default FormValidation;
