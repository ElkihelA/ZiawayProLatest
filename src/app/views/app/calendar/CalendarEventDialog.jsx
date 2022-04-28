import React from "react";
import {
  Modal,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Col,
  Card,
  Button
} from "react-bootstrap";
import { Formik } from "formik";
import DatePicker from "react-datepicker";
import { CirclePicker } from "react-color";
import * as yup from "yup";

const CalendarEventDialog = ({
  open,
  eventObject,
  handleSubmit,
  handleDeleteEvent,
  closeDialog
}) => {
  const handleFormSubmit = values => {
    handleSubmit(values);
  };

  return (
    <Modal
      show={open}
      centered={true}
      size="lg"
      className="d-flex justify-content-center mx-auto"
      style={{ maxWidth: "500px" }}
      onHide={closeDialog}
    >
      <Formik
        enableReinitialize={true}
        initialValues={eventObject}
        onSubmit={handleFormSubmit}
        validationSchema={eventSchema}
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
        }) => {
          return (
            <Card>
              <Card.Header className="bg-primary text-white d-flex flex-wrap justify-content-between align-items-center">
                <h4 className="m-0 text-white">New Event</h4>
                <i
                  className="i-Close-Window cursor-pointer text-18"
                  onClick={closeDialog}
                ></i>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormControl
                      type="text"
                      name="title"
                      className="mb-3"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      isInvalid={errors.title && touched.title}
                    />
                  </FormGroup>
                  <Form.Row>
                    <FormGroup as={Col}>
                      <FormLabel>Start Date</FormLabel>
                      <DatePicker
                        className="form-control mb-1 w-100"
                        dateFormat="dd/MM/yyyy"
                        selected={
                          values.start ? new Date(values.start) : new Date()
                        }
                        onChange={date => {
                          setFieldValue("start", date);
                        }}
                      />
                    </FormGroup>
                    <FormGroup as={Col}>
                      <FormLabel>End Date</FormLabel>
                      <DatePicker
                        className="form-control mb-1"
                        dateFormat="dd/MM/yyyy"
                        selected={
                          values.end ? new Date(values.end) : new Date()
                        }
                        onChange={date => {
                          setFieldValue("end", date);
                        }}
                      />
                    </FormGroup>
                  </Form.Row>
                  <p>
                    <label className="checkbox checkbox-primary">
                      <input
                        type="checkbox"
                        name="allDay"
                        value={values.allDay}
                        checked={values.allDay}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // required
                      />
                      <span>All day</span>
                      <span className="checkmark"></span>
                    </label>
                  </p>
                  <CirclePicker
                    className="w-100 mb-4"
                    color={values.color}
                    onChangeComplete={({ hex }) => setFieldValue("color", hex)}
                  />
                  <div className="d-flex justify-content-between">
                    <Button type="submit" variant="primary">
                      Save
                    </Button>
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() => handleDeleteEvent(values.id)}
                    >
                      <i className="i-Delete-File"> </i>
                      Delete
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          );
        }}
      </Formik>
    </Modal>
  );
};

const eventSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  start: yup.string().required("Start date is required")
});

export default CalendarEventDialog;
