import React, { Component, Fragment } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import { Formik, FieldArray } from "formik";
import DatePicker from "react-datepicker";
import * as yup from "yup";

import { getInvoiceById, addInvoice, updateInvoice } from "./InvoiceService";
import { withRouter } from "react-router-dom";

class InvoiceEditor extends Component {
  state = {
    id: "",
    orderNo: "",
    buyer: {
      name: "",
      address: ""
    },
    seller: {
      name: "",
      address: ""
    },
    item: [],
    status: "",
    vat: "",
    date: new Date(),
    currency: "$",
    loading: false
  };

  subTotalCost = 0;

  componentDidMount() {
    if (!this.props.isNewInvoice)
      getInvoiceById(this.props.match.params.id).then(res => {
        this.setState({ ...res.data });
      });
    else {
      this.generateRandomId();
    }
  }

  generateRandomId = () => {
    let tempId = Math.random().toString();
    let id = tempId.substr(2, tempId.length - 1);
    this.setState({ id });
  };

  handleSubmit = (values, { setSubmitting }) => {
    let { id } = this.state;
    this.setState({ loading: true });
    setSubmitting(true);

    console.log(values);

    if (this.props.isNewInvoice)
      addInvoice({ id, ...values }).then(() => {
        this.setState({ loading: false });
        this.props.history.push(`/invoice/${id}`);
        this.props.toggleInvoiceEditor();
      });
    else
      updateInvoice(values).then(() => {
        this.setState({ loading: false });
        this.props.toggleInvoiceEditor();
      });
  };

  calculateSubTotal = values => {
    this.subTotalCost = values.item.reduce(
      (total, item) => total + item.price * item.unit,
      0
    );
  };

  render() {
    this.subTotalCost = 0;
    let { loading } = this.state;

    return (
      <div className="invoice-viewer py-3">
        <Formik
          initialValues={this.state}
          validationSchema={invoiceSchema}
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
          }) => {
            this.calculateSubTotal(values);
            return (
              <Fragment>
                <Form onSubmit={handleSubmit} className="px-3">
                  <div className="viewer_actions d-flex justify-content-end">
                    <div className="mb-4">
                      <Button
                        type="button"
                        className="mr-3 py-2"
                        variant="warning"
                        onClick={() => this.props.toggleInvoiceEditor()}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="py-2"
                        variant="primary"
                        disabled={loading}
                      >
                        Save
                      </Button>
                    </div>
                  </div>

                  <div className="row justify-content-between">
                    <div className="col-md-6">
                      <h4 className="font-weight-bold">Order Info</h4>
                      <FormGroup className="col-sm-4 mb-3 pl-0">
                        <FormLabel>Order Number</FormLabel>
                        <FormControl
                          type="text"
                          className="form-control"
                          name="orderNo"
                          placeholder="Enter order number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={errors.orderNo && touched.orderNo}
                          value={values.orderNo}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-3 text-right">
                      <label className="d-block text-12 text-muted">
                        Order Status
                      </label>
                      <div className="pr-0 mb-4">
                        <fieldset className="offset-md-6">
                          <label className="radio radio-danger">
                            <input
                              type="radio"
                              name="status"
                              checked={values.status === "pending"}
                              onChange={handleChange}
                              value="pending"
                            />
                            <span>Pending</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="radio check-reverse radio-warning">
                            <input
                              type="radio"
                              name="status"
                              checked={values.status === "processing"}
                              onChange={handleChange}
                              value="processing"
                            />
                            <span>Processing</span>
                            <span className="checkmark"></span>
                          </label>
                          <label className="radio radio-success">
                            <input
                              type="radio"
                              name="status"
                              checked={values.status === "delivered"}
                              onChange={handleChange}
                              value="delivered"
                            />
                            <span>Delivered</span>
                            <span className="checkmark"></span>
                          </label>
                        </fieldset>
                        {errors.status && touched.status && (
                          <small className="text-danger">
                            Minimum 1 item is required
                          </small>
                        )}
                      </div>
                      <div className="form-group mb-3">
                        <div className="mb-1">Order Date</div>
                        <DatePicker
                          className="form-control text-right"
                          dateFormat="dd/MM/yyyy"
                          selected={new Date(values.date)}
                          onChange={date => {
                            setFieldValue("date", date);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 mb-4 border-top"></div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <h5 className="font-weight-bold">Bill From</h5>
                      <FormGroup className="col-md-10 mb-3 pl-0">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="seller.name"
                          placeholder="Bill From"
                          value={values.seller.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={
                            errors.seller &&
                            errors.seller.name &&
                            touched.seller &&
                            touched.seller.name
                          }
                        />
                      </FormGroup>

                      <FormGroup className="col-md-10 mb-3 pl-0">
                        <FormControl
                          as="textarea"
                          placeholder="Bill From Address"
                          name="seller.address"
                          value={values.seller.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={
                            errors.seller &&
                            touched.seller &&
                            errors.seller.address &&
                            touched.seller.address
                          }
                        ></FormControl>
                      </FormGroup>
                    </div>

                    <div className="col-md-6 text-right">
                      <h5 className="font-weight-bold">Bill To</h5>
                      <FormGroup className="col-md-10 offset-md-2 mb-3 pr-0">
                        <FormControl
                          type="text"
                          className="text-right"
                          name="buyer.name"
                          placeholder="Bill From"
                          value={values.buyer.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={
                            errors.buyer &&
                            touched.buyer &&
                            errors.buyer.name &&
                            touched.buyer.name
                          }
                        />
                      </FormGroup>
                      <FormGroup className="col-md-10 offset-md-2 mb-3 pr-0">
                        <FormControl
                          as="textarea"
                          className="text-right"
                          placeholder="Bill From Address"
                          name="buyer.address"
                          value={values.buyer.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={
                            errors.buyer &&
                            touched.buyer &&
                            errors.buyer.address &&
                            touched.buyer.address
                          }
                        ></FormControl>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="row">
                    <FieldArray name="item">
                      {arrayHelpers => (
                        <div className="col-md-12 table-responsive">
                          <table className="table table-hover mb-3">
                            <thead className="bg-gray-300">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Cost</th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {values.item.map((item, ind) => (
                                <tr key={ind}>
                                  <th className="text-middle" scope="row">
                                    {ind + 1}
                                  </th>
                                  <td>
                                    <FormControl
                                      value={values.item[ind].name}
                                      name={`item[${ind}].name`}
                                      type="text"
                                      placeholder="Item Name"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      isInvalid={
                                        errors.item &&
                                        touched.item &&
                                        errors.item[ind] &&
                                        touched.item[ind] &&
                                        errors.item[ind].name &&
                                        touched.item[ind].name
                                      }
                                    />
                                  </td>
                                  <td>
                                    <FormControl
                                      value={values.item[ind].price}
                                      name={`item[${ind}].price`}
                                      type="number"
                                      placeholder="Unit Price"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      isInvalid={
                                        errors.item &&
                                        touched.item &&
                                        errors.item[ind] &&
                                        touched.item[ind] &&
                                        errors.item[ind].price &&
                                        touched.item[ind].price
                                      }
                                    />
                                  </td>
                                  <td>
                                    <FormControl
                                      value={values.item[ind].unit}
                                      name={`item[${ind}].unit`}
                                      type="number"
                                      placeholder="Unit"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      isInvalid={
                                        errors.item &&
                                        touched.item &&
                                        errors.item[ind] &&
                                        touched.item[ind] &&
                                        errors.item[ind].unit &&
                                        touched.item[ind].unit
                                      }
                                    />
                                  </td>
                                  <td className="text-middle">
                                    {values.item[ind].price *
                                      values.item[ind].unit}
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      onClick={() => arrayHelpers.remove(ind)}
                                      className="btn btn-outline-secondary float-right"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {values.item.length === 0 && (
                            <small className="text-danger">
                              Minimum 1 item is required
                            </small>
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              arrayHelpers.push({
                                name: "",
                                price: "",
                                unit: ""
                              })
                            }
                            className="btn btn-primary float-right mb-4"
                          >
                            Add Item
                          </button>
                        </div>
                      )}
                    </FieldArray>

                    <div className="col-md-12">
                      <div className="invoice-summary invoice-summary-input float-right">
                        <p>
                          Sub total:
                          <span>
                            {values.currency}
                            {this.subTotalCost}
                          </span>
                        </p>
                        <p className="d-flex align-items-center">
                          Vat(%):
                          <span>
                            <FormControl
                              type="text"
                              className="small-input"
                              name="vat"
                              value={values.vat}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={errors.vat && touched.vat}
                            />
                            {values.currency}
                            {(this.subTotalCost * values.vat) / 100}
                          </span>
                        </p>
                        <h5 className="font-weight-bold d-flex align-items-center">
                          Grand Total:
                          <span>
                            <FormControl
                              type="text"
                              className="small-input"
                              name="currency"
                              value={values.currency}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={errors.currency && touched.currency}
                            />
                            {values.currency}
                            {this.subTotalCost +
                              (this.subTotalCost * values.vat) / 100}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Form>
              </Fragment>
            );
          }}
        </Formik>
      </div>
    );
  }
}

const invoiceSchema = yup.object().shape({
  orderNo: yup.string().required("orderNo is required"),
  status: yup.string().required("status is required"),
  seller: yup.object().shape({
    name: yup.string().required("name is required"),
    address: yup.string().required("address is required")
  }),
  buyer: yup.object().shape({
    name: yup.string().required("name is required"),
    address: yup.string().required("address is required")
  }),
  item: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required("name is required"),
        price: yup.number().required("price is required"),
        unit: yup.number().required("unit is required")
      })
    )
    .min(1, "Minimum 1 item is required"),
  vat: yup.number().required("unit is required"),
  currency: yup.string().required("name is required")
});

export default withRouter(InvoiceEditor);
