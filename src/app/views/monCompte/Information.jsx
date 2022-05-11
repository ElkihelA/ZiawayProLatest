import React from "react";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import { classList } from "@utils";
import { useTranslation } from "react-i18next";
import firebase from "../../services/firebase/firebase";
import swal from "sweetalert2";
import PhoneInput from "react-phone-number-input/input";
import axios from "axios";

import { useSelector } from "react-redux";

const Information = () => {
  const { t } = useTranslation();
  const profile = useSelector((state) => state.firebase.profile);

  const updateDetails = (data) => {
    const json_data = {
      info: {
        data: [
          {
            Licence_Number: profile?.licenseId,

            Last_Name: data?.officialName,

            Mail_message: profile?.messages?.emailText,

            SMS_Message: profile?.messages?.smsText,

            Broker_Photo: profile?.image,

            Agency_Logo: profile?.logo,

            Cellulaire: profile?.phoneNumber,

            Facebook: data?.facebook,

            Linkedin: data?.linkedIn,

            Twitter_Address: data?.twitter,

            Website: data?.website,

            Instagram: data?.insta,
          },
        ],

        duplicate_check_fields: ["Licence_Number"],
      },

      vmodule: "Contacts/upsert",
    };

    firebase
      .firestore()
      .collection("users")
      .doc(profile.userId)
      .update({ officialInformation: data })
      .then((res) => {
        console.log(res);
        axios
          .post(
            "https://us-central1-ziaapp-ac0eb.cloudfunctions.net/zohoPostNewLead",
            json_data,
            {
              crossdomain: true,
            }
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        swal.fire(
          "Profil mis à jour !!",
          "Votre profil a été mis à jour avec succès  ",
          "success"
        );
      })
      .catch((err) => {
        console.log(err);
        swal.fire(
          "Oups erreur!",
          "Nous sommes désolés, une erreur s'est produite. Nos équipes ont été informées de l'incident.",
          "error"
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12 col-12">
          {/*  <MonCompte profile={profile} /> */}
          <div className="row">
            <div className="col-lg-12 mb-4">
              <Formik
                initialValues={{
                  officialName: profile?.officialInformation?.officialName
                    ? profile?.officialInformation?.officialName
                    : profile?.displayName,
                  officialPhoneNumber: profile?.officialInformation
                    ?.officialPhoneNumber
                    ? profile?.officialInformation?.officialPhoneNumber
                    : profile?.phoneNumber,
                  officialEmail: profile?.officialInformation?.officialEmail
                    ? profile?.officialInformation?.officialEmail
                    : profile?.email,
                  website: profile?.officialInformation?.website
                    ? profile?.officialInformation?.website
                    : "",
                  facebook: profile?.officialInformation?.facebook
                    ? profile?.officialInformation?.facebook
                    : "",
                  linkedIn: profile?.officialInformation?.linkedIn
                    ? profile?.officialInformation?.linkedIn
                    : "",
                  insta: profile?.officialInformation?.insta
                    ? profile?.officialInformation?.insta
                    : "",
                  twitter: profile?.officialInformation?.twitter
                    ? profile?.officialInformation?.twitter
                    : "",
                }}
                enableReinitialize={true}
                validate={(values) => {
                  const errors = {};

                  if (!values.officialName) {
                    errors.officialName = `Field Required`;
                  }
                  if (!values.officialPhoneNumber) {
                    errors.officialPhoneNumber = `Field Required`;
                  }
                  if (!values.officialEmail) {
                    errors.officialEmail = `Field Required`;
                  }
                  // if (!values.website) {
                  //   errors.website = `Field Required`;
                  // }
                  // if (!values.facebook) {
                  //   errors.facebook = `Field Required`;
                  // }
                  // if (!values.linkedIn) {
                  //   errors.linkedIn = `Field Required`;
                  // }
                  // if (!values.insta) {
                  //   errors.insta = `Field Required`;
                  // }
                  // if (!values.twitter) {
                  //   errors.twitter = `Field Required`;
                  // }

                  console.log(errors);
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  console.log(values);
                  updateDetails(values);
                  // updateInfosPersonnelles(values);
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
                    <div className="p-3 border-2">
                      <h4 className="mb-3 text-capitalize">
                        {t("NProfile.21")}
                      </h4>
                      <div className="row row-cols-1 row-cols-md-2">
                        <div className="mb-3 px-3 ">
                          <div
                            className={classList({
                              "valid-field":
                                !errors.officialName && errors.officialName,
                              "invalid-field":
                                errors.officialName && errors.officialName,
                            })}
                          >
                            <label htmlFor="validationCustom202">
                              {" "}
                              {t("NProfile.22")}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="officialName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.officialName}
                            />
                            {errors.officialName && errors.officialName && (
                              <div className="text-danger mt-1 ml-2">
                                {errors.officialName}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mb-3 px-3">
                          <label htmlFor="validationCustom202">
                            {t("profile.3")}
                          </label>
                          <PhoneInput
                            className="form-control"
                            // defaultCountry="CA"
                            id="officialPhoneNumber"
                            value={values.officialPhoneNumber}
                            name="officialPhoneNumber"
                            onChange={(value) =>
                              setFieldValue("officialPhoneNumber", value)
                            }
                            required
                            onBlur={handleBlur}
                          />
                          {errors.officialPhoneNumber &&
                            touched.officialPhoneNumber && (
                              <div className="text-danger mt-1 ml-2">
                                {errors.officialPhoneNumber}
                              </div>
                            )}
                        </div>

                        <div className="mb-3 px-3">
                          <label htmlFor="validationCustom202">
                            {" "}
                            {t("NProfile.23")}
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="officialEmail"
                            disabled=""
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.officialEmail}
                          />
                          {errors.officialEmail && touched.officialEmail && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.officialEmail}
                            </div>
                          )}
                        </div>
                        <div className="mb-3 px-3">
                          <label>Website Url</label>
                          <input
                            type="text"
                            className="form-control"
                            name="website"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.website}
                          />
                          {errors.website && touched.website && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.website}
                            </div>
                          )}
                        </div>
                        <div className="mb-3 px-3">
                          <label htmlFor="validationCustom202">Facebook</label>
                          <input
                            type="text"
                            className="form-control"
                            name="facebook"
                            disabled=""
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.facebook}
                          />
                          {errors.facebook && touched.facebook && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.facebook}
                            </div>
                          )}
                        </div>
                        <div className="mb-3 px-3">
                          <label>LinkedIn</label>
                          <input
                            type="text"
                            className="form-control"
                            name="linkedIn"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.linkedIn}
                          />
                          {errors.linkedIn && touched.linkedIn && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.linkedIn}
                            </div>
                          )}
                        </div>
                        <div className="mb-3 px-3">
                          <label htmlFor="validationCustom202">Instagram</label>
                          <input
                            type="text"
                            className="form-control"
                            name="insta"
                            disabled=""
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.insta}
                          />
                          {errors.insta && touched.insta && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.insta}
                            </div>
                          )}
                        </div>
                        <div className="mb-3 px-3">
                          <label>Twitter</label>
                          <input
                            type="text"
                            className="form-control"
                            name="twitter"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.twitter}
                          />
                          {errors.twitter && touched.twitter && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.twitter}
                            </div>
                          )}
                        </div>
                        <div className="px-3">
                          <Button block type="submit" disabled={isSubmitting}>
                            Update
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
  );
};

export default Information;
