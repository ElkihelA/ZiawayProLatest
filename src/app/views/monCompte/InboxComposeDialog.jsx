import React, { Component } from "react";
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import { RichTextEditor } from "@gull";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";

class InboxComposeDialog extends Component {
  state = {
    nom:"",
    email: "",
    telephone:"",
    subject: "",
    content: "",
    attachment: null
  };

  componentDidMount(){

    if(this.props.profile){

      this.setState({email:this.props.profile.email,telephone:this.props.profile.telephone,nom:this.props.profile.displayName});

    }
  }
  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };

  handleContentChange = contentHtml => {
    this.setState({
      content: contentHtml
    });
  };

  render() {
    let { telephone,email, subject, content, attachment } = this.state;
    let { open, handleClose } = this.props;

    return (
      <Modal show={open} onHide={handleClose} size="lg" centered>
        <Formik
          initialValues={this.state}
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
            setFieldValue
          }) => (
            <form onSubmit={handleSubmit} className="inbox-form p-4">
                <FormGroup className="mb-2">
                <FormLabel>De</FormLabel>
                <FormControl
                  type="nom"
                  name="nom"
                  placeholder={this.props.profile && this.props.profile.displayName}
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
                  placeholder={this.props.profile && this.props.profile.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.email && touched.email}
                  value={values.email}
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <FormLabel>Téléphone</FormLabel>
                <FormControl
                  type="number"
                  name="telephone"
                  placeholder={this.props.profile && this.props.profile.telephone}
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
                handleContentChange={val => setFieldValue("content", val)}
                placeholder="Bonjour, j'aimerai prendre contact avec vous par rapport au bien .."
              />
              <div className="mt-3 d-flex flex-wrap justify-content-between">
                <Button type="button" onClick={handleClose} variant="secondary">
                  Annuler
                </Button>

                <div className="d-flex align-items-center">
                  {values.attachment && (
                    <p className="mr-4">{values.attachment.name}</p>
                  )}
                  <label htmlFor="attachment" className="mb-0">
                    <Button
                      type="button"
                      className="mr-2 "
                      as="span"
                      variant="secondary"
                    >
                      <i className="i-Mail-Attachement"></i>
                    </Button>
                  </label>
                  <input
                    onChange={event =>
                      setFieldValue("attachment", event.target.files[0])
                    }
                    className="d-none"
                    id="attachment"
                    type="file"
                  />
                  <Button
                    className="btn-rounded"
                    variant="primary"
                    type="submit"
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
  to: yup
    .string()
    .email("Invalid email")
    .required("email is required"),
  subject: yup.string().required("subject is required"),
  content: yup.string().required("content required")
});


const mapStateToProps = (state) => ({
  profile: state.firebase.profile
});

export default connect(mapStateToProps)
(InboxComposeDialog);