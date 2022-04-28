import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { classList } from "@utils";

export class AnonymousUserInfoVMZForm extends Component {
  state = {
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
  };

  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };

  render() {
    return (
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
          isSubmitting,
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
                    "col-md-6 col-xs-12 mb-3": true,
                    "valid-field": !errors.prenom && touched.prenom,
                    "invalid-field": errors.prenom && touched.prenom,
                  })}
                >
                  <label htmlFor="prenomAnon">Prenom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="prenomAnon"
                    placeholder="Prenom"
                    name="prenom"
                    value={values.prenom}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <div className="invalid-feedback">Obligatoire</div>
                </div>
                <div
                  className={classList({
                    "col-md-6 col-xs-12 mb-3": true,
                    "valid-field": touched.nom && !errors.nom,
                    "invalid-field": touched.nom && errors.nom,
                  })}
                >
                  <label htmlFor="nomAnon">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nomAnon"
                    placeholder="Nom"
                    value={values.nom}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="nom"
                    required
                  />
                  <div className="invalid-feedback">Obligatoire</div>
                </div>
              </div>
              <div className="form-row">
                <div
                  className={classList({
                    "col-md-6 col-xs-12 mb-3": true,
                    "valid-field": touched.email && !errors.email,
                    "invalid-field": touched.email && errors.email,
                  })}
                >
                  <label htmlFor="emailAnon">Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="emailAnon"
                      placeholder="email"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      required
                    />
                    <div className="invalid-feedback">Obligatoire</div>
                  </div>
                </div>
                <div
                  className={classList({
                    "col-md-6 col-xs-12 mb-3": true,
                  })}
                >
                  <label htmlFor="phoneAnon">Telephone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneAnon"
                    placeholder="555-555-5555"
                    name="telephone"
                    value={values.telephone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <button className="btn btn-primary mt-2" type="submit">
                Obtenez votre rapport d'evaluation
              </button>
            </form>
          );
        }}
      </Formik>
    );
  }
}

const basicFormSchema = yup.object().shape({
  prenom: yup.string().required("Obligatoire"),
  nom: yup.string().required("Obligatoire"),
  email: yup.string().required("Obligatoire"),
});

export default AnonymousUserInfoVMZForm;
