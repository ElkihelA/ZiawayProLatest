import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import ReactPaginate from "react-paginate";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class TaskManagerList extends Component {
  state = {
    taskList: [
      {
        title: "Update User profile page",
        link: "/"
      },
      {
        title: "Not Update User profile page",
        link: "/"
      }
    ]
  };

  handlePageClick = data => {
    let currentPage = data.disabled;
    this.setState({ currentPage });
  };

  render() {
    let { taskList } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Task Manager List" }
          ]}
        ></Breadcrumb>

        <div id="task-manager-list">
          {/* <!-- content area --> */}
          <div className="content">
            {/* <!-- task manager table --> */}
            <div className="card" id="card">
              <div className="card-header bg-transparent ul-task-manager__header-inline">
                <h6 className="card-title task-title">Task Manager</h6>
              </div>

              <div className="card-body" id="card-body">
                <div className="search ul-task-manager__search-inline align-items-center">
                  <nav className="navbar">
                    <form className="form-inline">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label mr-2"
                      >
                        Filter:
                      </label>
                      <input
                        className="form-control mr-sm-2"
                        id="filterInput"
                        type="search"
                        placeholder="type to filter"
                        aria-label="Search"
                      />
                    </form>
                  </nav>

                  <label>
                    <span>Show:</span>
                    <select>
                      <option value="15">15</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="75">75</option>
                      <option value="100">100</option>
                    </select>
                  </label>
                </div>

                <div className="table-responsive">
                  <table
                    id="names"
                    className=" table table-bordered custom-sm-width"
                  >
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task Description</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Latest Update</th>
                        <th scope="col">Status</th>
                        <th scope="col">Assigned Users</th>
                        <th scope="col">
                          <span className="checkmarks">
                            <div className="checkmark_stem"></div>
                            <div className="checkmark_kick"></div>
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <thead className="thead-light">
                      <tr>
                        <th colSpan="7">Last Week</th>
                      </tr>
                    </thead>
                    <tbody id="names">
                      {taskList.map((task, ind) => (
                        <tr key={ind} id="names">
                          <th scope="row" className="head-width">
                            #{ind + 1}
                          </th>
                          <td className="collection-item">
                            <div className="font-weight-bold">
                              <Link to={task.link}>{task.title}</Link>
                            </div>
                            <div className="text-muted">
                              A small river named Duden flows by their place and
                              supplies it..
                            </div>
                          </td>
                          <td className="custom-align">
                            <div className="btn-group ">
                              <Dropdown>
                                <Dropdown.Toggle
                                  as="div"
                                  className="toggle-hidden"
                                >
                                  <button
                                    className="btn btn-danger custom-btn  btn-sm dropdown-toggle"
                                    type="button"
                                  >
                                    Blocker
                                  </button>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <span className="ul-task-manager__dot bg-primary mr-2"></span>
                                    Blocker
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <span className="ul-task-manager__dot bg-danger mr-2"></span>
                                    High Priority
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <span className="ul-task-manager__dot bg-warning mr-2"></span>
                                    Normal Priority
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <span className="ul-task-manager__dot bg-success mr-2 "></span>
                                    Low Priority
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </td>

                          <td className="custom-align">
                            <div className="d-inline-flex align-items-center calendar align-middle">
                              <i className="i-Calendar-4"></i>
                              <span className="">12 January 2015</span>
                            </div>
                          </td>
                          <td className="custom-align">
                            <select
                              className="custom-select task-manager-list-select"
                              id="inputGroupSelect01"
                            >
                              <option disabled>Choose...</option>
                              <option value="1">Open</option>
                              <option value="2">On hold</option>
                              <option value="3">Resolved</option>
                              <option value="3">Duplicate</option>
                              <option value="3">Invalid</option>
                              <option value="3">Wontfix</option>
                              <option value="3">Closed</option>
                            </select>
                          </td>
                          <td className="custom-align">
                            <img
                              className="rounded-circle m-0 ul-task-manager__avatar "
                              src="/assets/images/faces/1.jpg"
                              alt=""
                            />
                            <img
                              className="rounded-circle m-0 ul-task-manager__avatar "
                              src="/assets/images/faces/1.jpg"
                              alt=""
                            />
                            <i className="i-Add text-24 text-primary font-weight-500 cursor-pointer align-middle font-custom-table"></i>
                          </td>
                          <td className="custom-align" valign="middle">
                            <Dropdown>
                              <Dropdown.Toggle
                                as="div"
                                className="toggle-hidden cursor-pointer"
                              >
                                <i
                                  data-toggle="dropdown"
                                  className="i-Align-Right custom-font-down-arrow"
                                ></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>Check In</Dropdown.Item>
                                <Dropdown.Item>
                                  Attach Screenshot 2
                                </Dropdown.Item>
                                <Dropdown.Item>Reassign</Dropdown.Item>
                                <Dropdown.Item>Edit Task</Dropdown.Item>
                                <Dropdown.Item>Remove</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}

                      <tr className="thead-light">
                        <th colSpan="12">10 Days Ago</th>
                      </tr>

                      {/* <!-- table row 3 --> */}
                      <tr>
                        <th scope="row">#3</th>
                        <td className="collection-item">
                          <div className="font-weight-bold">
                            <Link to="/">Update User profile page</Link>
                          </div>
                          <div className="text-muted">
                            A small river named Duden flows by their place and
                            supplies it..
                          </div>
                        </td>
                        <td className="custom-align">
                          <Dropdown>
                            <Dropdown.Toggle as="div" className="toggle-hidden">
                              <button
                                className="btn btn-warning custom-btn  btn-sm dropdown-toggle"
                                type="button"
                              >
                                High
                              </button>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>
                                <span className="ul-task-manager__dot bg-primary mr-2"></span>
                                Blocker
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <span className="ul-task-manager__dot bg-danger mr-2"></span>
                                High Priority
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <span className="ul-task-manager__dot bg-warning mr-2"></span>
                                Normal Priority
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <span className="ul-task-manager__dot bg-success mr-2 "></span>
                                Low Priority
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>

                        <td className="custom-align">
                          <div className="d-inline-flex align-items-center calendar">
                            <i className="i-Calendar-4"></i>
                            <span>12 January 2015</span>
                          </div>
                        </td>
                        <td className="custom-align">
                          <select
                            className="custom-select task-manager-list-select"
                            id="inputGroupSelect01"
                          >
                            <option disabled>Choose...</option>
                            <option value="1">Open</option>
                            <option value="2">On hold</option>
                            <option value="3">Resolved</option>
                            <option value="3">Duplicate</option>
                            <option value="3">Invalid</option>
                            <option value="3">Wontfix</option>
                            <option value="3">Closed</option>
                          </select>
                        </td>
                        <td className="custom-align">
                          <img
                            className="rounded-circle m-0 ul-task-manager__avatar "
                            src="/assets/images/faces/1.jpg"
                            alt=""
                          />
                          <img
                            className="rounded-circle m-0 ul-task-manager__avatar "
                            src="/assets/images/faces/1.jpg"
                            alt=""
                          />
                          <i className="i-Add text-24 text-primary font-weight-500 cursor-pointer align-middle font-custom-table"></i>
                        </td>
                        <td className="custom-align">
                          <Dropdown>
                            <Dropdown.Toggle
                              as="div"
                              className="toggle-hidden cursor-pointer"
                            >
                              <i
                                data-toggle="dropdown"
                                className="i-Align-Right custom-font-down-arrow"
                              ></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>Check In</Dropdown.Item>
                              <Dropdown.Item>Attach Screenshot 2</Dropdown.Item>
                              <Dropdown.Item>Reassign</Dropdown.Item>
                              <Dropdown.Item>Edit Task</Dropdown.Item>
                              <Dropdown.Item>Remove</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                      {/* <!-- end of table row 3 --> */}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card-footer text-muted">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-1">
                  <span> Showing 1 to 25 of 25 entries</span>
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={5}
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
            {/* <!-- end of task manager table --> */}
          </div>
          {/* <!-- end of content area --> */}
        </div>
      </div>
    );
  }
}

export default TaskManagerList;
