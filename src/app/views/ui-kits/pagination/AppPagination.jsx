import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import ReactPaginate from "react-paginate";
import SimpleCard from "@gull/components/cards/SimpleCard";

class AppPagination extends Component {
  state = {};

  handlePageClick = data => {
    let pageNumber = data.selected;
    console.log(pageNumber);
  };

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Pagination" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-6 col-sm-12 mb-4">
            <p>
              use a large block of connected links for our pagination, making
              links hard to miss and easily scalable—all while providing large
              hit areas. Pagination is built with list HTML elements so screen
              readers can announce the number of available links. Use a wrapping
              <code>nav</code> element to identify it as a navigation section to
              screen readers and other assistive technologies.
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <SimpleCard title="Basic pagination">
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
            </SimpleCard>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <SimpleCard title="pagination with icons">
              <ReactPaginate
                previousLabel={<i className="i-Previous"></i>}
                nextLabel={<i className="i-Next1"></i>}
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
            </SimpleCard>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <SimpleCard title="Pagination With initial state">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                initialPage={2}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </SimpleCard>
          </div>
          <div className="col-md-6 col-sm-12 mb-4">
            <SimpleCard title="large pagination">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination pagination-lg"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </SimpleCard>
          </div>
          <div className="col-md-6 col-sm-12 mb-4">
            <SimpleCard title="small pagination">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination pagination-sm"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </SimpleCard>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <SimpleCard title="pagination align left">
              <div className="d-flex justify-content-start">
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
            </SimpleCard>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <SimpleCard title="pagination align center">
              <div className="d-flex justify-content-center">
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
            </SimpleCard>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <SimpleCard title="pagination align right">
              <div className="d-flex justify-content-end">
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
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AppPagination;
