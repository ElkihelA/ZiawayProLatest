import React, { Component } from "react";
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { RichTextEditor } from "@gull";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import emailjs from 'emailjs-com';
import swal from "sweetalert2";

class InboxComposeDialog extends Component {
  state = {
    nom: "",
    email: "",
    telephone: "",
    subject: "",
    content: "",
    attachment: null,
  };

  componentDidMount() {
    if (this.props.profile) {
      this.setState({
        email: this.props.profile.email,
        telephone: this.props.profile.telephone,
        nom: this.props.profile.displayName,
      });
    }
  }
  handleSubmit = (values, { setSubmitting }) => {
    console.log("message a envoyer",values);

    const templateParams = {
      nom: values.nom,
      telephone:values.telephone,
      sujet: values.subject,
      content : values.content
    };

    emailjs
      .send(
        "service_hr7a3hu",
        "template_ejenusj",
        templateParams,
        "user_pXRxFQWajHFlPCUWpDE2C"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          swal.fire("Merci !!", "Votre message a été envoyé  ", "success");
          this.props.handleClose();

        },
        (err) => {
          console.log("FAILED...", err);
          swal.fire("Erreur !!", "une erreur s'est produite lors de l'envoi du message", "warning");
        }
      );
  };

  handleContentChange = (contentHtml) => {
    this.setState({
      content: contentHtml,
    });
  };

  render() {
    let { nom,telephone, email, subject, content } = this.state;
    let { open, handleClose } = this.props;
 
     const initFormValues = {
        nom: this.props.profile.displayName,
        telephone: this.props.profile.telephone,
        email: this.props.profile.email,
        subject: subject,
        content:content,
      };
    
    return (
      <Modal show={open} onHide={handleClose} size="lg" centered>
        <Formik
          initialValues={initFormValues}
          validationSchema={emailSchema}
          onSubmit={this.handleSubmit}
          enableReinitialize={true}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="inbox-form p-4">
              <FormGroup className="mb-2">
                <FormLabel>De</FormLabel>
                <FormControl
                  type="nom"
                  name="nom"
              
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.nom && touched.nom}
                  value={values.nom}
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  name="email"
                
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.email && touched.email}
                  value={values.email}
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <FormLabel>Téléphone</FormLabel>
                <FormControl
                  type="text"
                  name="telephone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.telephone && touched.telephone}
                  value={values.telephone}
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <FormLabel>Sujet</FormLabel>
                <FormControl
                  type="text"
                  name="subject"
                  placeholder=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.subject && touched.subject}
                  value={values.subject}
                />
              </FormGroup>

              <RichTextEditor
                content={values.content}
                handleContentChange={(val) => setFieldValue("content", val)}
                placeholder="Questions ou commentaires..."
              />
              <div className="mt-3 d-flex flex-wrap justify-content-between">
                <Button type="button" onClick={handleClose} variant="secondary">
                  Annuler
                </Button>

                <div className="d-flex align-items-center">
                  <Button
                    className="btn-rounded"
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <i className="i-Paper-Plane"></i>
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    );
  }
}

const emailSchema = yup.object().shape({
  nom:yup.string().required("le nom est obligatoire"),
  email: yup.string().email("Invalid email").required("email is required"),
  subject: yup.string().required("subject is required"),
  content: yup.string().required("content required"),
});

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
});

export default connect(mapStateToProps)(InboxComposeDialog);
