import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import {
  getAllUser,
  deleteUser,
  addNewUser,
  updateUser
} from "./contactService";
import ReactPaginate from "react-paginate";
import { Dropdown } from "react-bootstrap";
import { MdMoreVert } from "react-icons/md";
import ContactEditor from "./ContactEditor";
import swal from "sweetalert2";

class ContactTable extends Component {
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
            { name: "Contact Table" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header  gradient-purple-indigo  0-hidden pb-80">
                <div className="pt-4">
                  <div className="row">
                    <h4 className="col-md-4 text-white">Contacts</h4>
                    <input
                      type="text"
                      className="form-control form-control-rounded col-md-4 ml-3 mr-3"
                      placeholder="Search Contacts..."
                      onChange={this.handleSearch}
                      values={searchQuery}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="ul-contact-list-body">
                  <div className="ul-contact-main-content">
                    <div className="ul-contact-left-side">
                      <div className="card">
                        <div className="card-body">
                          <div className="ul-contact-list">
                            <div className="contact-close-mobile-icon float-right mb-2">
                              <i className="i-Close-Window text-15 font-weight-600"></i>
                            </div>
                            {/* <!-- modal  --> */}
                            <button
                              type="button"
                              className="btn btn-outline-secondary btn-block mb-4"
                              onClick={this.toggleEditorDialog}
                            >
                              ADD CONTACT
                            </button>

                            {/* <!-- end:modal  --> */}

                            <div
                              className="list-group"
                              id="list-tab"
                              role="tablist"
                            >
                              <span
                                className="list-group-item list-group-item-action border-0 active"
                                id="list-home-list"
                                data-toggle="list"
                                href="#list-home"
                                role="tab"
                                aria-controls="home"
                              >
                                <i className="nav-icon i-Business-Mens"> </i>
                                Contact List
                              </span>
                              <span
                                className="list-group-item list-group-item-action border-0"
                                id="list-profile-list"
                                data-toggle="list"
                                href="#list-profile"
                                role="tab"
                                aria-controls="profile"
                              >
                                <i className="nav-icon i-Conference"> </i>
                                Conected
                              </span>
                              <span
                                className="list-group-item list-group-item-action border-0"
                                id="list-settings-list"
                                data-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="settings"
                              >
                                <i className="nav-icon i-Pen-2"> </i>
                                Settings
                              </span>

                              <label
                                htmlFor=""
                                className="text-muted font-weight-600 py-8"
                              >
                                MEMBERS
                              </label>

                              <span
                                className="list-group-item list-group-item-action border-0 "
                                id="list-home-list"
                                data-toggle="list"
                                href="#list-home"
                                role="tab"
                                aria-controls="home"
                              >
                                <i className="nav-icon i-Arrow-Next"> </i>
                                Contact List
                              </span>
                              <span
                                className="list-group-item list-group-item-action border-0"
                                id="list-profile-list"
                                data-toggle="list"
                                href="#list-profile"
                                role="tab"
                                aria-controls="profile"
                              >
                                <i className="nav-icon i-Arrow-Next"> </i>
                                Conected
                              </span>
                              <span
                                className="list-group-item list-group-item-action border-0"
                                id="list-settings-list"
                                data-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="settings"
                              >
                                <i className="nav-icon i-Arrow-Next"> </i>
                                Settings
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ul-contact-content">
                      <div className="card">
                        <div className="card-body">
                          <div className="float-left">
                            <i className="nav-icon i-Align-Justify-All text-25 ul-contact-mobile-icon"></i>
                          </div>
                          <div
                            className="tab-content ul-contact-list-table--label"
                            id="nav-tabContent"
                          >
                            {/* <!-- all-contact  --> */}
                            <div className="tab-pane fade show active">
                              <div className=" text-left">
                                <div className="table-responsive">
                                  <table
                                    id="contact_list_table"
                                    className="display table  table-borderless ul-contact-list-table w-100"
                                  >
                                    <thead>
                                      <tr className="border-bottom">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {userList
                                        .slice(
                                          rowsPerPage * page,
                                          rowsPerPage * (page + 1)
                                        )
                                        .map((user, ind) => (
                                          <tr key={ind}>
                                            <td>
                                              <img
                                                className="rounded-circle m-0 avatar-sm-table "
                                                src={user.imgUrl}
                                                alt=""
                                              />
                                              {user.name}
                                            </td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td valign="middle">
                                              <Dropdown alignRight>
                                                <Dropdown.Toggle
                                                  as="span"
                                                  className="cursor-pointer toggle-hidden"
                                                >
                                                  <MdMoreVert
                                                    size={18}
                                                  ></MdMoreVert>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                  <Dropdown.Item
                                                    onClick={() =>
                                                      this.handleEditContact(
                                                        user
                                                      )
                                                    }
                                                  >
                                                    <i className="nav-icon i-Pen-2 text-success font-weight-bold mr-2"></i>
                                                    Edit Contact
                                                  </Dropdown.Item>
                                                  <Dropdown.Item
                                                    onClick={() => {
                                                      swal
                                                        .fire({
                                                          title:
                                                            "Are you sure?",
                                                          text:
                                                            "You won't be able to revert this!",
                                                          icon: "warning",
                                                          type: "question",
                                                          showCancelButton: true,
                                                          confirmButtonColor:
                                                            "#3085d6",
                                                          cancelButtonColor:
                                                            "#d33",
                                                          confirmButtonText:
                                                            "Yes, delete it!",
                                                          cancelButtonText: "No"
                                                        })
                                                        .then(result => {
                                                          if (result.value) {
                                                            this.handleDeleteContact(
                                                              user
                                                            );
                                                          } else {
                                                            swal.fire(
                                                              "Cancelled!",
                                                              "Permission denied.",
                                                              "error"
                                                            );
                                                          }
                                                        });
                                                    }}
                                                  >
                                                    <i className="nav-icon i-Close-Window text-danger font-weight-bold mr-2"></i>
                                                    Delete Contact
                                                  </Dropdown.Item>
                                                </Dropdown.Menu>
                                              </Dropdown>
                                            </td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <ReactPaginate
                              previousLabel={"Previous"}
                              nextLabel={"Next"}
                              breakLabel={"..."}
                              breakClassName={"break-me"}
                              pageCount={Math.ceil(
                                userList.length / rowsPerPage
                              )}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactEditor
          show={showEditorDialog}
          toggleEditorDialog={this.toggleEditorDialog}
          initialValues={dialogValues}
          handleFormSubmit={this.handleFormSubmit}
        ></ContactEditor>
      </div>
    );
  }
}

export default ContactTable;
