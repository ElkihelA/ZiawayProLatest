import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import swal from "sweetalert2";
import { format } from "date-fns";
import ReactPaginate from "react-paginate";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  getAllUser,
  deleteUser,
  addNewUser,
  updateUser
} from "./contactService";
import ContactEditor2 from "./ContactEditor2";

class ContactList extends Component {
  state = {
    rowsPerPage: 10,
    page: 0,
    userList: [],
    showEditorDialog: false,
    searchQuery: "",
    dialogValues: null
  };

  updatePageData = () => {
    getAllUser().then(({ data }) => this.setState({ userList: [...data] }));
  };

  handleSearch = ({ target: { value } }) => {
    this.setState({ searchQuery: value });
  };

  handlePageClick = data => {
    let page = data.selected;
    this.setState({ page });
  };

  toggleEditorDialog = arg => {
    if (arg && arg.toString())
      this.setState({ showEditorDialog: arg, dialogValues: null });
    else
      this.setState({
        showEditorDialog: !this.state.showEditorDialog,
        dialogValues: null
      });
  };

  handleEditContact = dialogValues => {
    this.setState({ dialogValues, showEditorDialog: true });
  };

  handleDeleteContact = values => {
    deleteUser(values).then(({ data: userList }) => {
      this.setState({ userList });
      swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        type: "success",
        icon: "success",
        timer: 1500
      });
    });
  };

  handleFormSubmit = async values => {
    console.log(values);

    let { dialogValues } = this.state;
    let res;
    if (!dialogValues) {
      res = await addNewUser(values);
    } else {
      res = await updateUser({ ...dialogValues, ...values });
    }
    this.setState({ userList: res.data });
    this.toggleEditorDialog(false);
  };

  getBadgeColor = role => {
    switch (role) {
      case "developer":
        return "primary";

      case "manager":
        return "success";

      case "designer":
        return "warning";

      default:
        return "primary";
    }
  };

  componentDidMount() {
    this.updatePageData();
  }

  render() {
    let {
      rowsPerPage,
      page,
      userList = [],
      dialogValues,
      searchQuery,
      showEditorDialog
    } = this.state;

    userList = userList.filter(user =>
      user.name.toLowerCase().match(searchQuery.toLowerCase())
    );

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
            { name: "Contact List" }
          ]}
        ></Breadcrumb>

        <section className="contact-list">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="card text-left">
                <div className="card-header text-right bg-transparent">
                  <button
                    type="button"
                    className="btn btn-primary btn-md m-1"
                    onClick={this.toggleEditorDialog}
                  >
                    <i className="i-Add-User text-white mr-2"></i> Add Contact
                  </button>
                </div>

                <div className="row px-4 mt-3">
                  <div className="col-sm-12 col-md-6 mb-2">
                    <div className="d-flex align-items-center">
                      <span className="mr-1">Show</span>
                      <div className="mr-1">
                        <select
                          className="form-control"
                          onChange={({ target: { value } }) => {
                            this.setState({ rowsPerPage: value });
                          }}
                        >
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>
                      </div>
                      <span>entries</span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 mb-2">
                    <div className="d-flex justify-content-lg-end align-items-center">
                      <span className="mr-1">Search:</span>
                      <div className="mr-1">
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder=""
                          onChange={this.handleSearch}
                          aria-controls="ul-contact-list"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-1">
                  <div className="table-responsive">
                    <table id="ul-contact-list" className="display table w-100">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Role</th>
                          <th>Age</th>
                          <th>Joining Date</th>
                          <th>Salary</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userList
                          .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                          .map((user, ind) => (
                            <tr key={ind}>
                              <td valign="middle">
                                <Link to="">
                                  <div className="ul-widget-app__profile-pic">
                                    <img
                                      className="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                                      src={user.imgUrl}
                                      alt=""
                                    />
                                    {user.name}
                                  </div>
                                </Link>
                              </td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td valign="middle">
                                <div
                                  className={`badge badge-${this.getBadgeColor(
                                    user.role
                                  )} p-2 text-capitalize`}
                                >
                                  {user.role ? user.role : "Developer"}
                                </div>
                              </td>
                              <td>{user.age}</td>
                              <td>
                                {format(
                                  new Date(
                                    user.bd ? user.bd : new Date()
                                  ).getTime(),
                                  "dd MMM, yyyy"
                                )}
                              </td>
                              <td>${user.balance}</td>
                              <td>
                                <div className="d-flex">
                                  <div className="cursor-pointer mr-3">
                                    <MdEdit
                                      className="text-success"
                                      size={18}
                                      onClick={() =>
                                        this.handleEditContact(user)
                                      }
                                    ></MdEdit>
                                  </div>
                                  <div className="cursor-pointer">
                                    <MdDelete
                                      className="text-danger"
                                      size={18}
                                      onClick={() => {
                                        swal
                                          .fire({
                                            title: "Are you sure?",
                                            text:
                                              "You won't be able to revert this!",
                                            icon: "warning",
                                            type: "question",
                                            showCancelButton: true,
                                            confirmButtonColor: "#3085d6",
                                            cancelButtonColor: "#d33",
                                            confirmButtonText:
                                              "Yes, delete it!",
                                            cancelButtonText: "No"
                                          })
                                          .then(result => {
                                            if (result.value) {
                                              this.handleDeleteContact(user);
                                            } else {
                                              swal.fire({
                                                title: "Cancelled!",
                                                text: "Permission denied.",
                                                type: "error",
                                                icon: "error",
                                                timer: 1500
                                              });
                                            }
                                          });
                                      }}
                                    ></MdDelete>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-end mr-lg-4">
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={Math.ceil(userList.length / rowsPerPage)}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={3}
                      onPageChange={this.handlePageClick}
                      containerClassName={"pagination pagination-lg"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactEditor2
          show={showEditorDialog}
          toggleEditorDialog={this.toggleEditorDialog}
          initialValues={dialogValues}
          handleFormSubmit={this.handleFormSubmit}
        ></ContactEditor2>
      </div>
    );
  }
}

export default ContactList;
