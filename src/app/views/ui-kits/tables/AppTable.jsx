import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import SimpleCard from "@gull/components/cards/SimpleCard";

class AppTable extends Component {
  state = {
    newUserList: [
      {
        name: "Smith Doe",
        email: "Smith@gmail.com",
        status: "active",
        photoUrl: "/assets/images/faces/1.jpg"
      },
      {
        name: "Jhon Doe",
        email: "Jhon@gmail.com",
        status: "pending",
        photoUrl: "/assets/images/faces/2.jpg"
      },
      {
        name: "Alex",
        email: "Otttio@gmail.com",
        status: "inactive",
        photoUrl: "/assets/images/faces/3.jpg"
      }
    ]
  };

  getUserStatusClass = status => {
    switch (status) {
      case "active":
        return "badge-success";
      case "inactive":
        return "badge-warning";
      case "pending":
        return "badge-primary";
      default:
        break;
    }
  };

  render() {
    let { newUserList } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Table" }
          ]}
        ></Breadcrumb>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SimpleCard title="basic table">
              <div className="table-responsive">
                <table id="user_table" className="table  text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Basic Dark Table">
              <div className="table-responsive">
                <table
                  id="user_table"
                  className="table table-dark  text-center"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SimpleCard title="light table head">
              <p>
                Similar to tables and dark tables, use the modifier classes
                <code>.thead-light</code> to make <code>thead</code> appear
                light
              </p>
              <div className="table-responsive">
                <table id="user_table" className="table  text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Dark Table head">
              <p>
                Similar to tables and dark tables, use the modifier classes
                <code>.thead-dark</code> to make <code>thead</code> appear Dark
              </p>
              <div className="table-responsive">
                <table id="user_table" className="table  text-center">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SimpleCard title="Striped rows">
              <p>
                Use <code>.table-striped</code> to add zebra-striping to any
                table rowwithin the <code>&lt;tbody&gt;</code>.
              </p>
              <div className="table-responsive">
                <table
                  id="user_table"
                  className="table table-striped  text-center"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Dark Table head">
              <p>
                Use <code>.table-striped</code> to add zebra-striping to any
                table rowwithin the <code>&lt;tbody&gt;</code>.
              </p>
              <div className="table-responsive">
                <table
                  id="user_table"
                  className="table table-striped table-dark  text-center"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SimpleCard title="Light Bordered Table">
              <p>
                Add <code>.table-bordered</code> for borders on all sides of the
                table and cells.
              </p>
              <div className="table-responsive">
                <table
                  id="user_table"
                  className="table table-bordered  text-center"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Dark Bordered Table">
              <p>
                Add <code>.table-bordered</code> for borders on all sides of the
                table and cells.
              </p>
              <div className="table-responsive">
                <table
                  id="user_table"
                  className="table table-bordered table-dark"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SimpleCard title="Light Borderless Table">
              <p>
                Add <code>.table-borderless</code> for a table without borders.
              </p>
              <div className="table-responsive">
                <table
                  id="user_table"
                  className="table table-borderless  text-center"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Dark Bordereless Table">
              <p>
                Add <code>.table-borderless</code> for a table without borders.
              </p>
              <div className="table-responsive">
                <table
                  id="user_table"
                  className="table table-borderless table-dark"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SimpleCard title="Light hoverable Table">
              <p>
                Add <code>.table-hover</code> to enable a hover state on table
                rows within a <code>&lt;tbody&gt;</code>.
              </p>
              <div className="table-responsive">
                <table
                  id="user_table"
                  className="table table-hover  text-center"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Dark hoverable Table">
              <p>
                Add <code>.table-hover</code> to enable a hover state on table
                rows within a <code>&lt;tbody&gt;</code>.
              </p>
              <div className="table-responsive">
                <table id="user_table" className="table table-hover table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SimpleCard title="Light Small Table">
              <p>
                Add <code>.table-sm</code> to make tables more compact by
                cutting cell padding in half.
              </p>
              <div className="table-responsive">
                <table id="user_table" className="table table-sm  text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Dark Small Table">
              <p>
                Add <code>.table-sm</code> to make tables more compact by
                cutting cell padding in half.
              </p>
              <div className="table-responsive">
                <table id="user_table" className="table table-sm table-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SimpleCard title="Light Table With Contextual classes">
              <p>
                Use contextual classes to color table rows or individual cells.
              </p>
              <div className="table-responsive">
                <table className="table ">
                  <thead className="">
                    <tr className="table-primary">
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                      <th scope="col">Handle 2</th>
                      <th scope="col">Handle 3</th>
                      <th scope="col">Handle 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-success">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="table-active">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="table-info">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="table-warning">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="table-dark">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td className="table-active">...</td>

                      <td className="table-primary">...</td>
                      <td className="table-secondary">...</td>
                      <td className="table-success">...</td>
                      <td className="table-danger">...</td>
                      <td className="table-warning">...</td>
                      <td className="table-info">...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Dark Table With Background">
              <p>
                Regular table background variants are not available with the
                dark table, however, you may use text or background utilities to
                achieve similar styles.
              </p>
              <div className="table-responsive">
                <table className="table  table-dark ">
                  <thead className="">
                    <tr className="bg-primary">
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                      <th scope="col">Handle 2</th>
                      <th scope="col">Handle 3</th>
                      <th scope="col">Handle 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-success">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="bg-active">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="bg-info">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="bg-warning">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className="bg-dark">
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td className="bg-active">...</td>

                      <td className="bg-primary">...</td>
                      <td className="bg-secondary">...</td>
                      <td className="bg-success">...</td>
                      <td className="bg-danger">...</td>
                      <td className="bg-warning">...</td>
                      <td className="bg-info">...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SimpleCard title="light table with caption">
              <p>
                A <code>&lt;caption&gt;</code> functions like a heading for a
                table. It helps users with screen readers to find a table and
                understand what it’s about and decide if they want to read it.
              </p>
              <div className="table-responsive">
                <table id="user_table" className="table  text-center">
                  <caption>List of users</caption>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-3">
            <SimpleCard title="Dark Table with catption">
              <p>
                A <code>&lt;caption&gt;</code> functions like a heading for a
                table. It helps users with screen readers to find a table and
                understand what it’s about and decide if they want to read it.
              </p>
              <div className="table-responsive">
                <table
                  id="user_table"
                  className="table table-dark  text-center"
                >
                  <caption>List of users</caption>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Avatar</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newUserList.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>
                          <img
                            className="rounded-circle m-0 avatar-sm-table "
                            src={user.photoUrl}
                            alt=""
                          />
                        </td>

                        <td>{user.email}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td>
                          <span className="cursor-pointer text-success mr-2">
                            <i className="nav-icon i-Pen-2 font-weight-bold"></i>
                          </span>
                          <span className="cursor-pointer text-danger mr-2">
                            <i className="nav-icon i-Close-Window font-weight-bold"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AppTable;
