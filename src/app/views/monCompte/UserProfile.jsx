import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { updateInfosPersonnelles } from "app/redux/actions/UserActions";
import { connect } from "react-redux";
import firebase from "../../services/firebase/firebase";

import ResetPassword from "./ResetPassword";
import { withTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import { classList } from "@utils";
import PhoneInput from "react-phone-number-input/input";
import Regulatory from "./Regulatory";
import Information from "./Information";
import UserMessages from "./UserMessages";
import { storage } from "../../services/firebase/firebase";
import placeholder from "./placeholder.png";
import PreviewModal from "./PreviewModal";
import ManageSubscription from "./ManageSubscription";

class UserProfile extends Component {
  state = {
    image: null,
    show: false,
  };

  handleChange(e) {
    this.setState({
      image: e.target.files[0],
    });
  }

  onHide() {
    this.setState({
      show: false,
    });
  }

  onShow(e) {
    e.preventDefault();
    this.setState({
      show: true,
    });
  }

  addimage = async () => {
    const { image } = this.state;
    if (image) {
      console.log("i am runnning");
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      await uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              firebase
                .firestore()
                .collection("users")
                .doc(this.props.profile.userId)
                .update({ image: url })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        }
      );
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.image !== this.state.image) {
      console.log("pokemons state has changed.");
      this.addimage();
    }
  }

  render() {
    let { profile, updateInfosPersonnelles } = this.props;
    const { t } = this.props;
    console.log(this.state.image);
    return (
      <div>
        <PreviewModal show={this.state.show} onClose={() => this.onHide()} />
        <Breadcrumb
          routeSegments={[
            { name: t("profile.18"), path: "/" },
            { name: t("profile.17") },
          ]}
        ></Breadcrumb>
        {profile && (
          <div className="card user-profile o-hidden mb-4">
            <div></div>
            <div className="ml-4" style={{ marginTop: 10 }}>
              <p className="m-0 text-24 text-capitalize">
                {profile.displayName}
              </p>
            </div>
            <div className="card-body pt-4">
              <Tabs defaultActiveKey="profil" className="">
                <Tab eventKey="profil" title={t("profile.15")}>
                  <form noValidate>
                    {/* Buttons */}
                    <div className="mb-4">
                      <ul
                        className="nav justify-content-end"
                        style={{ gap: 10 }}
                      >
                        {/* <li>
                          <button className="btn btn-gray-300">Cancel​</button>
                        </li>
                        <li>
                          <button className="btn btn-gray-300">
                            Save and close​
                          </button>
                        </li> */}
                        <li>
                          <button
                            className="btn btn-primary"
                            onClick={(e) => this.onShow(e)}
                          >
                            {t("NProfile.1")}
                          </button>
                        </li>
                      </ul>
                    </div>
                    {/* /Buttons */}
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <div className="row">
                        <div className="mb-4 mb-md-0 col-md-4 col-lg-4 col-xl-2">
                          <Nav
                            variant="pills"
                            className="d-flex flex-column remove-arrow-nav"
                          >
                            <Nav.Item>
                              <Nav.Link
                                className="position-relative"
                                eventKey="first"
                              >
                                {t("NProfile.2")}
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className="position-relative"
                                eventKey="second"
                              >
                                {t("NProfile.3")}
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className="position-relative"
                                eventKey="third"
                              >
                                {t("NProfile.4")}
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                className="position-relative"
                                eventKey="fourth"
                              >
                                {t("NProfile.5")}
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                        <div className="col-md-8 col-lg-8 col-xl-10">
                          <Tab.Content className="p-0 min-height-26rem">
                            <Tab.Pane eventKey="first">
                              <div>
                                {/* <div className="mt-2 mb-4">
                                  <div
                                    style={{ height: "8rem", width: "8rem" }}
                                  >
                                   {profile.image ? (
                                      <a
                                        href={profile?.image}
                                        download
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        <img
                                          className="d-block h-100 w-100"
                                          src={profile?.image}
                                          alt="..."
                                        />
                                      </a>
                                    ) : (
                                      <img
                                        className="d-block h-100 w-100"
                                        src={placeholder}
                                        alt="..."
                                      />
                                    )}
                                  </div>
                                  <div className="p-2">
                                    <input
                                      placeholder="add or update your image"
                                      type="file"
                                      onChange={(e) => this.handleChange(e)}
                                    />
                                  </div>
                                </div>  */}
                                <div className="row">
                                  <div className="col-md-12 col-12">
                                    {/*  <MonCompte profile={profile} /> */}
                                    <div className="row">
                                      <div className="col-lg-12 mb-4">
                                        <Formik
                                          initialValues={{
                                            email: profile.email,
                                            displayName: profile.displayName,
                                            phoneNumber: profile.phoneNumber,
                                          }}
                                          enableReinitialize={true}
                                          validate={(values) => {
                                            const errors = {};
                                            if (!values.email) {
                                              errors.email = ` ${t(
                                                "profile.5"
                                              )}`;
                                            } else if (
                                              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                values.email
                                              )
                                            ) {
                                              errors.email = ` ${t(
                                                "profile.6"
                                              )}`;
                                            }
                                            if (!values.displayName) {
                                              errors.displayName = ` ${t(
                                                "profile.7"
                                              )}`;
                                            }
                                            if (!values.phoneNumber) {
                                              errors.phoneNumber = ` ${t(
                                                "profile.8"
                                              )}`;
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
                                          onSubmit={(
                                            values,
                                            { setSubmitting }
                                          ) => {
                                            setSubmitting(false);
                                            console.log(values);
                                            updateInfosPersonnelles(values);
                                            this.addimage();
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
                                          }) => (
                                            <form onSubmit={handleSubmit}>
                                              <div className="p-3 border-2 d-flex flex-row">
                                                <div>
                                                  <h4 className="mb-3 text-capitalize">
                                                    {t("NProfile.6")}
                                                    <br />
                                                    {t("NProfile.7")}
                                                  </h4>
                                                  <div className="mt-2 mb-4">
                                                    <div
                                                      style={{
                                                        height: "8rem",
                                                        width: "8rem",
                                                      }}
                                                    >
                                                      {profile.image ? (
                                                        <a
                                                          href={profile?.image}
                                                          download
                                                          rel="noopener noreferrer"
                                                          target="_blank"
                                                        >
                                                          <img
                                                            className="d-block h-100 w-100"
                                                            src={profile?.image}
                                                            alt="..."
                                                          />
                                                        </a>
                                                      ) : (
                                                        <img
                                                          className="d-block h-100 w-100"
                                                          src={placeholder}
                                                          alt="..."
                                                        />
                                                      )}
                                                    </div>
                                                    <div className="p-2">
                                                      <input
                                                        placeholder="add or update your image"
                                                        type="file"
                                                        onChange={(e) =>
                                                          this.handleChange(e)
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="row row-cols-1 ">
                                                  <div className="mb-3 px-3 ">
                                                    <div
                                                      className={classList({
                                                        "valid-field":
                                                          !errors.displayName &&
                                                          touched.displayName,
                                                        "invalid-field":
                                                          errors.displayName &&
                                                          touched.displayName,
                                                      })}
                                                    >
                                                      <label htmlFor="validationCustom202">
                                                        {" "}
                                                        {t("NProfile.8")}
                                                      </label>
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        name="displayName"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={
                                                          values.displayName
                                                        }
                                                      />
                                                      {errors.displayName &&
                                                        touched.displayName && (
                                                          <div className="text-danger mt-1 ml-2">
                                                            {errors.displayName}
                                                          </div>
                                                        )}
                                                    </div>
                                                  </div>
                                                  <div className="mb-3 px-3">
                                                    <label htmlFor="validationCustom202">
                                                      {t("profile.3")}{" "}
                                                      <small>
                                                        {t("NProfile.9")}
                                                      </small>
                                                    </label>
                                                    <PhoneInput
                                                      className="form-control"
                                                      // defaultCountry="CA"
                                                      id="phoneNumber"
                                                      value={values.phoneNumber}
                                                      name="phoneNumber"
                                                      onChange={(value) =>
                                                        setFieldValue(
                                                          "phoneNumber",
                                                          value
                                                        )
                                                      }
                                                      required
                                                      onBlur={handleBlur}
                                                    />
                                                    {errors.phoneNumber &&
                                                      touched.phoneNumber && (
                                                        <div className="text-danger mt-1 ml-2">
                                                          {errors.phoneNumber}
                                                        </div>
                                                      )}
                                                  </div>
                                                  <div className="mb-3 px-3">
                                                    <label htmlFor="validationCustom202">
                                                      {t("NProfile.10")}{" "}
                                                      <small>
                                                        {t("NProfile.11")}
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="email"
                                                      className="form-control"
                                                      name="email"
                                                      disabled
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.email}
                                                    />
                                                    {errors.email &&
                                                      touched.email && (
                                                        <div className="text-danger mt-1 ml-2">
                                                          {errors.email}
                                                        </div>
                                                      )}
                                                  </div>
                                                  {/* <div
                                                    className="mb-3 px-3"
                                                   
                                                  >
                                                    <label>
                                                      Business Address​
                                                    </label>
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      name="BusinessAddress​"
                                                    />
                                                  </div> */}
                                                  <div className="col-12 col-md-12 col-lg-12">
                                                    <Button
                                                      style={{ width: "150px" }}
                                                      type="submit"
                                                      disabled={isSubmitting}
                                                    >
                                                      {t("NProfile.12")}
                                                    </Button>
                                                  </div>
                                                </div>
                                              </div>
                                            </form>
                                          )}
                                        </Formik>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <Regulatory />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              <Information />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                              <UserMessages />
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </div>
                    </Tab.Container>
                  </form>

                  <hr />
                </Tab>
                <Tab eventKey="reset" title={t("profile.16")}>
                  <ResetPassword t={t} />
                </Tab>
                <Tab eventKey="manage-subscription" title="Manage Subscription">
                  <ManageSubscription />
                </Tab>
              </Tabs>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
  updateInfosPersonnelles: PropTypes.func.isRequired,
});
export default connect(mapStateToProps, { updateInfosPersonnelles })(
  withTranslation()(UserProfile)
);
