import React, { Component } from "react";
import { Button, Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getInvoiceById } from "./InvoiceService";
import { format } from "date-fns";
import { withRouter } from "react-router-dom";

class InvoiceViewer extends Component {
  state = {};
  subTotalCost = 0;

  componentDidMount() {
    getInvoiceById(this.props.match.params.id).then(res => {
      this.setState({ ...res.data });
    });
  }

  render() {
    this.subTotalCost = 0;
    let {
      orderNo,
      buyer,
      seller,
      item: invoiceItemList = [],
      status,
      vat,
      date
    } = this.state;

    return (
      <div className="invoice-viewer py-16">
        <div className="viewer_actions px-3 mb-3 d-flex align-items-center justify-content-between">
          <Link to="/invoice/list">
            <i className="i-Left1 text-20 font-weight-700"> </i>
          </Link>
          <div>
            <Button
              className="mr-3 py-2"
              variant="primary"
              onClick={() => this.props.toggleInvoiceEditor()}
            >
              Edit Invoice
            </Button>
            <Button
              onClick={() => window.print()}
              className="py-2"
              variant="warning"
            >
              Print Invoice
            </Button>
          </div>
        </div>

        <div id="print-area" className="px-3">
          <div className="row">
            <div className="col-md-6">
              <h4 className="font-weight-bold">Order Info</h4>
              <p>#{orderNo}</p>
            </div>
            <div className="col-md-6 text-sm-right">
              <p className="text-capitalize">
                <strong>Order status:</strong> {status}
              </p>
              <p>
                <strong>Order date: </strong>
                <span>
                  {date
                    ? format(new Date(date).getTime(), "MMMM dd, yyyy")
                    : ""}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-3 mb-4 border-top"></div>
          <div className="row mb-5">
            <div className="col-md-6 mb-3 mb-sm-0">
              <h5 className="font-weight-bold">Bill From</h5>
              <p>{seller ? seller.name : null}</p>
              <span className="white-space-pre-line">
                {seller ? seller.address : null}
              </span>
            </div>
            <div className="col-md-6 text-sm-right">
              <h5 className="font-weight-bold">Bill To</h5>
              <p>{buyer ? buyer.name : null}</p>
              <span className="white-space-pre-line">
                {buyer ? buyer.address : null}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 table-responsive">
              <table className="table table-hover mb-4">
                <thead className="bg-gray-300">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceItemList.map((item, index) => {
                    this.subTotalCost += item.unit * item.price;
                    return (
                      <tr key={index}>
                        <td className="text-capitalize">{index + 1}</td>
                        <td className="text-capitalize">{item.name}</td>
                        <td className="text-capitalize">{item.price}</td>
                        <td className="text-capitalize">{item.unit}</td>
                        <td>{item.unit * item.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="col-md-12">
              <div className="invoice-summary">
                <p>
                  Sub total: <span>${this.subTotalCost}</span>
                </p>
                <p>
                  Vat(%): <span>{vat}</span>
                </p>
                <h5 className="font-weight-bold">
                  Grand Total:
                  <span>
                    ${(this.subTotalCost += (this.subTotalCost * vat) / 100)}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(InvoiceViewer);
