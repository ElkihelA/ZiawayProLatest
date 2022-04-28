import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import LineChart4 from "app/views/charts/echarts/LineChart4";
import DoughnutChart from "app/views/charts/echarts/Doughnut";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { classList } from "@utils";

class Dashboard2 extends Component {
  state = {
    cardList: [
      {
        icon: "i-Data-Download",
        subtitle: "Today's Upload",
        title: "21"
      },
      {
        icon: "i-Add-User",
        subtitle: "new users",
        title: "53"
      },
      {
        icon: "i-Money-2",
        subtitle: "total sales",
        title: "4031"
      },
      {
        icon: "i-Money-2",
        title: "4031"
      },
      {
        icon: "i-Gear",
        title: "4031"
      },
      {
        icon: "i-Bell",
        title: "4031"
      }
    ],
    topAuthorList: [
      {
        name: "David Hopkins",
        description: "Lorem ipsum dolor sit amet consectetur.",
        photoUrl: "/assets/images/faces/2.jpg"
      },
      {
        name: "James Mitchell",
        description: "Lorem ipsum dolor sit amet consectetur.",
        photoUrl: "/assets/images/faces/3.jpg"
      },
      {
        name: "Jessica Mitchell",
        description: "Lorem ipsum dolor sit amet consectetur.",
        photoUrl: "/assets/images/faces/4.jpg"
      }
    ],
    lastMonthSummery: [
      {
        name: "Portable Speaker",
        status: "+ $1200"
      },
      {
        name: "Portable Headphe",
        status: "In Stock"
      },
      {
        name: "Speaker",
        status: "Out of Stock"
      },
      {
        name: "Watch",
        status: "Low Stock"
      }
    ],
    newUserList: [
      {
        name: "David Hopkins",
        email: "hopkins@gmail.com",
        photoUrl: "/assets/images/faces/2.jpg",
        status: "active"
      },
      {
        name: "James Mitchell",
        email: "petter@gmail.com",
        photoUrl: "/assets/images/faces/3.jpg",
        status: "pending"
      },
      {
        name: "Jessica Mitchell",
        email: "johndoe@gmail.com",
        photoUrl: "/assets/images/faces/4.jpg",
        status: "inactive"
      }
    ],
    topProductList: [
      {
        name: "Watch",
        date: "12-10-2019",
        price: 30,
        status: "delivered"
      },
      {
        name: "Iphone",
        date: "24-10-2019",
        price: 350,
        status: "pending"
      },
      {
        name: "Headphone",
        date: "11-11-2019",
        price: 10,
        status: "not delivered"
      }
    ]
  };

  handlePageClick = data => {
    let pageNumber = data.selected;
    let offset = Math.ceil(pageNumber * this.props.perPage);
    this.setState({ offset: offset }, () => {
      console.log(data);
    });
  };

  getUserStatusClass = status => {
    switch (status) {
      case "active":
        return "badge-success";
      case "delivered":
        return "badge-success";
      case "inactive":
        return "badge-warning";
      case "not delivered":
        return "badge-warning";
      case "pending":
        return "badge-primary";
      default:
        break;
    }
  };

  getStatusTextColor = status => {
    switch (status) {
      case "In Stock":
        return "text-success";
      case "Low Stock":
        return "text-warning";
      case "Out of Stock":
        return "text-danger";
      default:
        return "text-primary";
    }
  };

  render() {
    let {
      cardList = [],
      lastMonthSummery = [],
      topAuthorList = [],
      newUserList = [],
      topProductList = []
    } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Dashboard", path: "/dashboard" },
            { name: "Version 2" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              {cardList.map((card, index) => (
                <div key={index} className="col-md-4">
                  <div className="card card-icon-big mb-4">
                    <div className="card-body text-center">
                      <i className={card.icon}></i>
                      <p className="text-muted mt-2 mb-0 text-capitalize">
                        {card.subtitle}
                      </p>
                      <p className="lead text-18 mt-2 mb-0 text-capitalize">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="card mb-4">
              <div className="card-body p-0">
                <h5 className="card-title m-0 p-3">Sales</h5>
                <LineChart4 height="300px"></LineChart4>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <SimpleCard title="Last Month Summary" className="mb-4">
              <div className="row">
                <div className="col-md-6">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lastMonthSummery.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td className={this.getStatusTextColor(item.status)}>
                            {item.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6">
                  <DoughnutChart height="200px"></DoughnutChart>
                </div>
              </div>
            </SimpleCard>
          </div>

          <div className="col-lg-6 col-md-12">
            <SimpleCard title="Top Authors" className="mb-4">
              {topAuthorList.map((author, index) => (
                <div
                  key={index}
                  className={classList({
                    "d-flex align-items-center border-bottom-dotted-dim": true,
                    "mb-3 pb-3": index !== topAuthorList.length - 1
                  })}
                >
                  <img
                    className="avatar-md rounded mr-3"
                    src={author.photoUrl}
                    alt=""
                  />
                  <div className="flex-grow-1">
                    <h6 className="m-0">{author.name}</h6>
                    <p className="m-0 text-small text-muted">
                      {author.description}
                    </p>
                  </div>
                  <div>
                    <button className="btn btn-outline-primary btn-rounded btn-sm">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </SimpleCard>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card o-hidden mb-4">
              <div className="card-header d-flex card-title align-items-center mb-0">
                <h3 className="w-50 float-left m-0">New Users</h3>
              </div>

              <div className="table-responsive">
                <Table
                  hover
                  id="user_table"
                  className="table dataTable-collapse text-center"
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
                </Table>
                <div className="px-3 pb-3 mt-3 d-flex flex-row justify-content-end">
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={5}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card o-hidden mb-4">
              <div className="card-header d-flex card-title m-0 align-items-center">
                <h3 className="w-50 float-left card-title m-0">Total Sales</h3>
              </div>

              <div className="table-responsive">
                <Table
                  hover
                  id="sales_table"
                  className="table dataTable-collapse text-center"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product</th>
                      <th scope="col">Date</th>

                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProductList.map((product, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.name}</td>
                        <td>{product.date}</td>
                        <td>${product.price}</td>
                        <td>
                          <span
                            className={`badge ${this.getUserStatusClass(
                              product.status
                            )}`}
                          >
                            {product.status}
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
                </Table>
                <div className="px-3 pb-3 mt-3 d-flex flex-row justify-content-end">
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={5}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard2;
