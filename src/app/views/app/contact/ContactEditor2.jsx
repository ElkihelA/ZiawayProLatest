import React from "react";
import {
  Modal,
  FormGroup,
  FormControl,
  FormLabel,
  Row,
  Form
} from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import DatePicker from "react-datepicker";

const ContactEditor2 = ({
  show,
  initialValues,
  toggleEditorDialog,
  handleFormSubmit
}) => {
  return (
    <Modal show={show} onHide={toggleEditorDialog} centered>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {initialValues ? "Update" : "New"} Contact
        </h5>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => toggleEditorDialog(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Formik
          initialValues={
            initialValues
              ? initialValues
              : {
                  name: "",
                  email: "",
                  phone: "",
                  note: "",
                  age: "",
                  balance: "",
                  bd: new Date(),
                  role: "developer"
                }
          }
          validationSchema={contactSchema}
          enableReinitialize={true}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
          }) => (
            <form onSubmit={handleSubmit} className="position-relative">
              <Form.Row className="mb-3">
                <FormLabel column sm={2}>
                  Name
                </FormLabel>
                <FormControl
                  className="col-sm-10"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.name && touched.name}
                  value={values.name}
                ></FormControl>
              </Form.Row>
              <Form.Row className="mb-3">
                <FormLabel column sm={2}>
                  Email
                </FormLabel>
                <FormControl
                  className="col-sm-10"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.email && touched.email}
                  value={values.email}
                ></FormControl>
              </Form.Row>
              <Form.Row className="mb-3">
                <FormLabel column sm={2}>
                  Phone
                </FormLabel>
                <FormControl
                  className="col-sm-10"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.phone && touched.phone}
                  value={values.phone}
                ></FormControl>
              </Form.Row>
              <Form.Row className="mb-3">
                <FormLabel column sm={2}>
                  Age
                </FormLabel>
                <FormControl
                  className="col-sm-10"
                  placeholder="Age"
                  name="age"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.age && touched.age}
                  value={values.age}
                ></FormControl>
              </Form.Row>
              <Form.Row className="mb-3">
                <FormLabel column sm={2}>
                  Balance
                </FormLabel>
                <FormControl
                  className="col-sm-10"
                  placeholder="$1230"
                  name="balance"
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.balance && touched.balance}
                  value={values.balance}
                ></FormControl>
              </Form.Row>
              <Form.Row>
                <FormLabel column sm={2}>
                  Join
                </FormLabel>
                ``
                <DatePicker
                  className="form-control mb-3"
                  dateFormat="dd/MM/yyyy"
                  selected={new Date(values.bd)}
                  onChange={date => {
                    setFieldValue("bd", date);
                  }}
                />
              </Form.Row>

              <fieldset className="form-group">
                <div className="row">
                  <div className="col-form-label col-sm-2 pt-0">Role</div>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="developer"
                        onChange={handleChange}
                        checked={"developer".match(values.role)}
                        id="developer"
                      />
                      <label
                        className="form-check-label ml-3"
                        htmlFor="developer"
                      >
                        Developer
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="designer"
                        onChange={handleChange}
                        checked={"designer".match(values.role)}
                        id="designer"
                      />
                      <label
                        className="form-check-label ml-3"
                        htmlFor="designer"
                      >
                        Designer
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="manager"
                        onChange={handleChange}
                        checked={"manager".match(values.role)}
                        id="manager"
                      />
                      <label
                        className="form-check-label ml-3"
                        htmlFor="manager"
                      >
                        Manager
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-success">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

const contactSchema = yup.object().shape({
  name: yup.string().required("title is required"),
  email: yup
    .string()
    .email()
    .required("note is required"),
  phone: yup.string().required("note is required"),
  age: yup.number().required("note is required"),
  balance: yup.number().required("note is required"),
  bd: yup.string().required("note is required"),
  role: yup.string().required("note is required")
});

export default ContactEditor2;
