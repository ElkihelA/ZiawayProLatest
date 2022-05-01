import React from "react";
import firebase from "../../services/firebase/firebase";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import { classList } from "@utils";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import swal from "sweetalert2";
import axios from "axios";

const UserMessages = () => {
  const { t } = useTranslation();
  const profile = useSelector((state) => state.firebase.profile);
  const updateDetails = (data) => {
    console.log("data", data, profile);

    const json_data = {
      info: {
        data: [
          {
            Licence_Number: profile?.licenseId,

            Last_Name: profile?.officialInformation?.officialName,

            Mail_message: data?.emailText,

            SMS_Message: data?.smsText,

            Broker_Photo: profile?.image,

            Agency_Logo: profile?.logo,

            Cellulaire: profile?.phoneNumber,

            Facebook: profile?.officialInformation?.facebook,

            Linkedin: profile?.officialInformation?.linkedIn,

            Twitter: profile?.officialInformation?.twitter,

            Website: profile?.officialInformation?.website,

            Instagram: profile?.officialInformation?.insta,
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
      .update({ messages: data })
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
            <div className="col-12 mb-4">
              <Formik
                initialValues={{
                  emailText: profile?.messages?.emailText
                    ? profile?.messages?.emailText
                    : "",
                  smsText: profile?.messages?.smsText
                    ? profile?.messages?.smsText
                    : "",
                }}
                enableReinitialize={true}
                validate={(values) => {
                  const errors = {};
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
                        {t("NProfile.24")}
                      </h4>
                      <div>
                        <ul className="nav row row-cols-1 row-cols-md-2">
                          <li className="px-3 py-2">
                            <textarea
                              className="form-control"
                              rows={10}
                              name="emailText"
                              defaultValue={
                                "I confirm that I have received your request and I thank you for your confidence. ​\n I will contact you very soon to have more information on your project before agreeing on an appointment as soon as possible. ​\n ​\n Feel free to contact me directly, you will find my contact information below.​\n ​\n I look forward to our next meeting and wish you a very nice day.​\n xxxxxx​"
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                              // value={values?.emailText}
                            />
                          </li>
                          <li className="px-3 py-2">
                            <textarea
                              className="form-control"
                              rows={10}
                              name="smsText"
                              defaultValue={
                                " I confirm that I have received your request and I thank you for your confidence. ​\n I will contact you very soon ​\n xxxxxx​​"
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                              // value={values?.smsText}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-4 col-lg-2">
                        <Button block type="submit" disabled={isSubmitting}>
                          {t("NProfile.25")}
                        </Button>
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

export default UserMessages;
