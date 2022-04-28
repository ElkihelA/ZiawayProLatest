import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

class ProductList extends Component {
  state = {};

  handlePageClick = data => {
    let currentPage = data.selected;
    this.setState({ currentPage });
  };

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Ecommerce", path: "/ecommerce" },
            { name: "Product List" }
          ]}
        ></Breadcrumb>
        <section className="product-cart">
          <div className="row list-grid mb-4">
            <div className="list-item col-md-3">
              <div className="card o-hidden mb-4 d-flex flex-column">
                <div className="list-thumb d-flex">
                  <img alt="" src="/assets/images/products/speaker-1.jpg" />
                </div>
                <div className="flex-grow-1 d-bock">
                  <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                    <Link className="w-40 w-sm-100" to="/">
                      <div className="item-title">
                        Wireless Bluetooth V4.0 Portable Speaker with HD Sound
                        and Bass
                      </div>
                    </Link>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      Gadget
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      $32.00 <del className="text-secondary">$54.00</del>
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                      <span className="badge badge-info">20% off</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item  col-md-3   ">
              <div className="card o-hidden mb-4 d-flex flex-column">
                <div className="list-thumb d-flex">
                  <img alt="" src="/assets/images/products/speaker-2.jpg" />
                </div>
                <div className="flex-grow-1 d-bock">
                  <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                    <Link className="w-40 w-sm-100" to="/">
                      <div className="item-title">
                        Portable Speaker with HD Sound
                      </div>
                    </Link>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      Gadget
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      $25.00 <del className="text-secondary">$43.00</del>
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                      <span className="badge badge-primary">Sale</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item  col-md-3   ">
              <div className="card o-hidden mb-4 d-flex flex-column">
                <div className="list-thumb d-flex">
                  <img alt="" src="/assets/images/products/headphone-2.jpg" />
                </div>
                <div className="flex-grow-1 d-bock">
                  <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                    <Link className="w-40 w-sm-100" to="/">
                      <div className="item-title">
                        Lightweight On-Ear Headphones - Black
                      </div>
                    </Link>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      Gadget
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      $29.00 <del className="text-secondary">$55.00</del>
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                      <span className="badge badge-info">-40%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item  col-md-3   ">
              <div className="card o-hidden mb-4 d-flex flex-column">
                <div className="list-thumb d-flex">
                  <img alt="" src="/assets/images/products/watch-1.jpg" />
                </div>
                <div className="flex-grow-1 d-bock">
                  <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                    <Link className="w-40 w-sm-100" to="/">
                      <div className="item-title">
                        Automatic-self-wind mens Watch 5102PR-001 (Certified
                        Pre-owned)
                      </div>
                    </Link>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      Gadget
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      $33.00 <del className="text-secondary">$58.00</del>
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                      <span className="badge badge-info">10% off</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item  col-md-3   ">
              <div className="card o-hidden mb-4 d-flex flex-column">
                <div className="list-thumb d-flex">
                  <img alt="" src="/assets/images/products/watch-2.jpg" />
                </div>
                <div className="flex-grow-1 d-bock">
                  <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                    <Link className="w-40 w-sm-100" to="/">
                      <div className="item-title">
                        Automatic-self-wind mens Watch 5102PR-001
                      </div>
                    </Link>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      Gadget
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      $38.00 <del className="text-secondary">$50.00</del>
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                      <span className="badge badge-info">4% off</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item  col-md-3   ">
              <div className="card o-hidden mb-4 d-flex flex-column">
                <div className="list-thumb d-flex">
                  <img alt="" src="/assets/images/products/headphone-3.jpg" />
                </div>
                <div className="flex-grow-1 d-bock">
                  <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                    <Link className="w-40 w-sm-100" to="/">
                      <div className="item-title">
                        On-Ear Headphones - Black
                      </div>
                    </Link>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      Gadget
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      $38.00 <del className="text-secondary">$54.00</del>
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                      <span className="badge badge-success">$4 off</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item  col-md-3   ">
              <div className="card o-hidden mb-4 d-flex flex-column">
                <div className="list-thumb d-flex">
                  <img alt="" src="/assets/images/products/headphone-4.jpg" />
                </div>
                <div className="flex-grow-1 d-bock">
                  <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                    <Link className="w-40 w-sm-100" to="/">
                      <div className="item-title">In-Ear Headphone</div>
                    </Link>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      Gadget
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      $31.00 <del className="text-secondary">$58.00</del>
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                      <span className="badge badge-primary">$5 off</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item  col-md-3   ">
              <div className="card o-hidden mb-4 d-flex flex-column">
                <div className="list-thumb d-flex">
                  <img alt="" src="/assets/images/products/iphone-2.jpg" />
                </div>
                <div className="flex-grow-1 d-bock">
                  <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                    <Link className="w-40 w-sm-100" to="/">
                      <div className="item-title">
                        Duis exercitation nostrud anim
                      </div>
                    </Link>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      Gadget
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                      $22.00 <del className="text-secondary">$44.00</del>
                    </p>
                    <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges">
                      <span className="badge badge-red"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </section>
      </div>
    );
  }
}

export default ProductList;
