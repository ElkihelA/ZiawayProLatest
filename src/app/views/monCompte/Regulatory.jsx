import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import { classList } from "@utils";
import { useTranslation } from "react-i18next";
import firebase from "../../services/firebase/firebase";
import swal from "sweetalert2";
import Select from "react-select";
import { useSelector } from "react-redux";
import Autocomplete from "react-google-autocomplete";
import placeholder from "./placeholder.png";
import { storage } from "../../services/firebase/firebase";
import axios from "axios";

const Regulatory = () => {
  const { t } = useTranslation();
  const profile = useSelector((state) => state.firebase.profile);
  const [image, setImage] = useState();

  function placeToAddress(place) {
    var address = {};
    if (place.address_components) {
      address.value = place.formatted_address;
      address.latlng = place.geometry && {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      place.address_components.forEach(function (c) {
        switch (c.types[0]) {
          case "street_number":
            address.StreetNumber = c;
            break;
          case "route":
            address.StreetName = c;
            break;
          case "neighborhood":
          case "locality": // North Hollywood or Los Angeles?
            address.city = c.long_name;
            break;
          case "administrative_area_level_1": //  Note some countries don't have states
            address.state = c;
            break;
          case "postal_code":
            address.postcode = c.short_name;
            break;
          case "country":
            address.Country = c;
            break;
          /*
           *   . . .
           */
        }
      });
    }
    return address;
  }

  const addimage = async () => {
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
                .doc(profile.userId)
                .update({ logo: url })
                .then((res) => {
                  console.log(res);
                  const json_data = {
                    info: {
                      data: [
                        {
                          Licence_Number: profile?.licenseId,

                          Last_Name: profile?.officialInformation?.officialName,

                          Mail_message: profile?.messages?.emailText,

                          SMS_Message: profile?.messages?.smsText,

                          Broker_Photo: profile?.image,

                          Agency_Logo: url,

                          Cellulaire: profile?.phoneNumber,

                          Facebook: profile?.officialInformation?.facebook,

                          Linkedin: profile?.officialInformation?.linkedIn,

                          Twitter_Address:
                            profile?.officialInformation?.twitter,

                          Website: profile?.officialInformation?.website,

                          Instagram: profile?.officialInformation?.insta,
                        },
                      ],

                      duplicate_check_fields: ["Licence_Number"],
                    },

                    vmodule: "Contacts/upsert",
                  };

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
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        }
      );
    }
  };

  useEffect(() => {
    if (image) {
      addimage();
    }
  }, [image]);

  const updateDetails = (data) => {
    firebase
      .firestore()
      .collection("users")
      .doc(profile.userId)
      .update({ regulatory: data })
      .then((res) => {
        console.log(res);
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

  const statusOptions = [
    { value: "Valid", label: t("NProfile.15") },
    { value: "Suspended", label: t("NProfile.16") },
    { value: "Revoked", label: t("NProfile.17") },
  ];

  const practiceOptions = [
    { value: "Residential", label: t("NProfile.18") },
    { value: "Commercial", label: t("NProfile.19") },
    { value: "All areas of practice", label: t("NProfile.20") },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-md-12 col-12">
          {/*  <MonCompte profile={profile} /> */}
          <div className="row">
            <div className="col-lg-12 mb-4">
              <Formik
                initialValues={{
                  license: profile?.licenseId,
                  BusinessAddress: profile?.regulatory?.BusinessAddress,
                  status: profile?.regulatory?.status,
                  practice: profile?.regulatory?.practice,
                }}
                enableReinitialize={true}
                validate={(values) => {
                  const errors = {};

                  if (!values.license) {
                    errors.license = `Field Required`;
                  }
                  if (!values.BusinessAddress) {
                    errors.BusinessAddress = `Field Required`;
                  }
                  if (!values.status) {
                    errors.status = `Field Required`;
                  }
                  if (!values.practice) {
                    errors.practice = `Field Required`;
                  }

                  console.log(errors);
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  console.log(values);
                  updateDetails(values);
                  addimage();
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
                        {t("NProfile.13")}
                      </h4>
                      <div className="d-flex flex-row">
                        <div>
                          <h5 className="font-weight-bold">
                            {t("NProfile.14")}
                          </h5>
                          <div>
                            <div className="mt-2 mb-4">
                              <div
                                style={{
                                  height: "8rem",
                                  width: "8rem",
                                }}
                              >
                                {profile.logo ? (
                                  <a
                                    href={profile?.logo}
                                    download
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    <img
                                      className="d-block h-100 w-100"
                                      src={profile?.logo}
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
                                  onChange={(e) => setImage(e.target.files[0])}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row row-cols-1 row-cols-md-2">
                            <div className="mb-3 px-3 ">
                              <div
                                className={classList({
                                  "valid-field":
                                    !errors.license && touched.license,
                                  "invalid-field":
                                    errors.license && touched.license,
                                })}
                              >
                                <label htmlFor="validationCustom202">
                                  {" "}
                                  {t("NProfile.80")}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="license"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.license}
                                  disabled
                                />
                                {errors.license && touched.license && (
                                  <div className="text-danger mt-1 ml-2">
                                    {errors.license}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="mb-3 px-3 ">
                              <div
                                className={classList({
                                  "valid-field":
                                    !errors.practice && touched.practice,
                                  "invalid-field":
                                    errors.practice && touched.practice,
                                })}
                              >
                                <label htmlFor="validationCustom202">
                                  {" "}
                                  {t("NProfile.81")}
                                </label>
                                {/* <input
                              type="text"
                              className="form-control"
                              name="practice"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.practice}
                            /> */}
                                <Select
                                  placeholder="Select Field"
                                  options={practiceOptions}
                                  onChange={(value) =>
                                    setFieldValue("practice", value)
                                  }
                                  value={values.practice}
                                  onBlur={handleBlur}
                                />
                                {errors.practice && touched.practice && (
                                  <div className="text-danger mt-1 ml-2">
                                    {errors.practice}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="mb-3 px-3">
                              <label htmlFor="validationCustom202">
                                {t("NProfile.82")}
                              </label>
                              {/* <input
                            type="text"
                            className="form-control"
                            name="status"
                            disabled=""
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.status}
                          /> */}

                              <Select
                                placeholder="Select Status"
                                options={statusOptions}
                                onChange={(value) =>
                                  setFieldValue("status", value)
                                }
                                value={values.status}
                                onBlur={handleBlur}
                              />
                              {errors.status && touched.status && (
                                <div className="text-danger mt-1 ml-2">
                                  {errors.status}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 px-3">
                              <label> {t("NProfile.83")}</label>
                              {/* <input
                            type="text"
                            className="form-control"
                            name="BusinessAddress"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.BusinessAddress}
                          /> */}
                              <Autocomplete
                                defaultValue={values?.BusinessAddress?.value}
                                style={{
                                  backgroundImage: "url(/assets/icons/pin.png)",
                                  backgroundPosition: "left",
                                  paddingLeft: "30px",
                                  backgroundSize: "20px",
                                  backgroundRepeat: "no-repeat",
                                }}
                                placeholder="Saisissez l’adresse de la propriété à évaluer..."
                                className={classList({
                                  "form-control form-control-lg text-center": true,
                                  "valid-field": !errors.BusinessAddress,
                                  "invalid-field": errors.BusinessAddress,
                                })}
                                onPlaceSelected={(place) => {
                                  console.log(place);
                                  console.log(
                                    "place to adress",
                                    placeToAddress(place)
                                  );
                                  setFieldValue(
                                    "BusinessAddress",
                                    placeToAddress(place)
                                  );
                                }}
                                types={["address"]}
                                componentRestrictions={{ country: "ca" }}
                              />
                              {errors.BusinessAddress &&
                                touched.BusinessAddress && (
                                  <div className="text-danger mt-1 ml-2">
                                    {errors.BusinessAddress}
                                  </div>
                                )}
                            </div>
                            <div className="px-3">
                              <Button
                                block
                                type="submit"
                                disabled={isSubmitting}
                              >
                                {t("NProfile.84")}
                              </Button>
                            </div>
                          </div>
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

export default Regulatory;
