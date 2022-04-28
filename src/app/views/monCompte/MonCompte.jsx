import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Formik, setFieldValue } from "formik";
import * as yup from "yup";
import { classList } from "@utils";
import { compose, lifecycle } from "recompose";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";
import { connect } from "react-redux";
import AlgoliaPlaces from "algolia-places-react";
import PhoneInput from "react-phone-number-input/input";
import { updateProfile } from "app/redux/actions/UserActions";

class MonCompte extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
        nom: "",
        telephone: "",
        email: "",
    };
  }
  componentDidMount() {

    
  }

  componentDidUpdate(prevProps, prevState) {}
  
  handleSubmit = (values) => {
    console.log(values);
    this.props.updateProfile(values);
  };

  render() {
    console.log("state", this.props);
    let { displayName, email, telephone } = this.props.profile
    let initFormValues={};
    if (this.props.profile) {
      initFormValues = {
        nom: displayName,
        telephone: telephone,
        email: email,
      };
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                {this.props.profile && (
                
                        <form
                          className="needs-validation"
                          onSubmit={this.handleSubmit}
                         
                        >
                          <div className="form-row">
                            <div
                              className={classList({
                                "col-md-6 mb-3": true,
                               // "valid-field": !errors.nom && touched.nom,
                               // "invalid-field": errors.nom && touched.nom,
                              })}
                            >
                              <label htmlFor="validationCustom202">
                                Prénom
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom202"
                                placeholder="Nom"
                                name="nom"
                                value={displayName}
                              
                                required
                              />
                              <div className="valid-feedback">Enchanté!</div>
                              <div className="invalid-feedback">
                                Le prénom est obligatoire
                              </div>
                            </div>

                            <div
                              className={classList({
                                "col-md-6 mb-3": true,
                                //"valid-field": touched.email && !errors.email,
                                //"invalid-field": touched.email && errors.email,
                              })}
                            >
                              <label htmlFor="validationCustomUsername">
                                Email
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
                                  type="email"
                                  className="form-control"
                                  id="validationCustomUsername"
                                  placeholder="Courriel"
                                  aria-describedby="inputGroupPrepend"
                                  name="email"
                                  value={email}
                                  required
                                />
                                <div className="invalid-feedback">
                                  Le courriel est obligatoire
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div
                              className={classList({
                                "col-md-12": true,
                                //"valid-field":
                                  //touched.telephone && !errors.telephone,
                               // "invalid-field":
                                 // touched.telephone && errors.telephone,
                              })}
                            >
                              <label htmlFor="validationCustom203">
                                Téléphone
                              </label>
                              <PhoneInput
                                className="form-control"
                                defaultCountry="CA"
                                id="telephone"
                                value={telephone}
                                name="telephone"
                                
                              />

                              <div className="invalid-tooltip"></div>
                            </div>
                          </div>

                          <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={this.handleSubmit}
                          >
                            Enregistrer
                          </button>
                        </form>
                   
               
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const basicFormSchema = yup.object().shape({
  prenom: yup.string().required("first name is required"),
  nom: yup.string().required("last name is required"),
  email: yup.string().required("select any option"),
  city: yup.string().required("birthDay is required"),
  zip: yup.number().required("email is required"),
  agree: yup.string().required("Required"),
  state: yup.string().required("Required"),
});

const tooltipFormSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  username: yup.string().required("select any option"),
  city: yup.string().required("birthDay is required"),
  zip: yup.number().required("email is required"),
  agree: yup.string().required("Required"),
  state: yup.string().required("Required"),
});


export default(MonCompte);
