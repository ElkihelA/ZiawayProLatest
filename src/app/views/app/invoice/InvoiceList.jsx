import React, { Component } from "react";
import { Table, Button, Card } from "react-bootstrap";
import { getAllInvoice, deleteInvoice } from "./InvoiceService";
import { Link } from "react-router-dom";
import { classList } from "@utils";
import swal from "sweetalert2";
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class InvoiceList extends Component {
  state = {
    invoiceList: [],
    shouldShowConfirmationDialog: false
  };
 

  componentDidMount() {
    getAllInvoice().then(res => this.setState({ invoiceList: res.data }));
    this.setState({users:this.props.users});
    console.log("context",this.context);
  }

  handeViewClick = invoiceId => {
    this.props.history.push(`/invoice/${invoiceId}`);
    // getInvoiceById(invoiceId).then(res => console.log(res.data));
  };

  handleDeleteInvoice = invoice => {
    deleteInvoice(invoice).then(res => {
      swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        type: "success",
        icon: "success",
        timer: 1500
      });

      this.setState({
        invoiceList: res.data,
        shouldShowConfirmationDialog: false
      });
    });
  };

  handleDialogClose = () => {
    this.setState({ shouldShowConfirmationDialog: false });
  };

  render() {
    let invoiceList  = this.props.users;

    console.log(this.props.users);
    return (
      <div>
        <Link to="/invoice/create">
          <Button className="mb-3" variant="primary">
            Add Invoice
          </Button>
        </Link>
        <Card elevation={6} className="w-100 overflow-auto">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="pl-sm-24">Order No.</th>
                <th className="px-0">Bill From</th>
                <th className="px-0">Bill To</th>
                <th className="px-0">Status</th>
                <th className="px-0">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users && invoiceList.map((invoice, index) => (
                <tr key={invoice.id}>
                  <td className="pl-sm-24 capitalize" align="left">
                    {invoice.id}
                  </td>
                  <td className="pl-0 capitalize" align="left">
                    {invoice.nom}
                  </td>
                  <td className="pl-0 capitalize" align="left">
                    {invoice.prenom}
                  </td>
                  <td className="pl-0 capitalize">
                    <small
                      className={classList({
                        "badge rounded-pill text-white px-8 py-2": true,
                        "bg-success": invoice.plan === "Plan découverte",
                        "bg-warning": invoice.plan === "processing",
                        "bg-danger": invoice.plan === "pending"
                      })}
                    >
                      {invoice.plan}
                    </small>
                  </td>
                  <td className="pl-0">
                    <i
                      className="i-Arrow-Right mr-4 font-weight-900 text-primary cursor-pointer"
                      onClick={() => this.handeViewClick(invoice.id)}
                    ></i>
                    <i
                      className="i-Folder-Trash font-weight-900 text-danger cursor-pointer"
                      onClick={() => {
                        swal
                          .fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            type: "question",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                            cancelButtonText: "No"
                          })
                          .then(result => {
                            if (result.value) {
                              this.handleDeleteInvoice(invoice);
                            }
                          });
                      }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
        {/* <ConfirmationDialog
          open={this.state.shouldShowConfirmationDialog}
          onConfirmDialogClose={this.handleDialogClose}
          onYesClick={this.handleDeleteInvoice}
          text="Are you sure to delete?"
        /> */}
      </div>
    );
  }
}

export default compose(
  firestoreConnect(() => ['users']), // or { collection: 'todos' }
  connect((state, props) => ({
    users: state.firestore.ordered.users
  }))
 )(InvoiceList);
