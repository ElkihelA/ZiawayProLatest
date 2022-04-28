import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import axios from "axios";
import { SimpleCard } from "@gull";
import { Row, Col } from "react-bootstrap";

class AppDataTable extends Component {
  state = {
    userList: []
  };

  defaultSorted = [
    {
      dataField: "name",
      order: "asc"
    }
  ];

  componentDidMount() {
    axios.get("/api/user/all").then(({ data }) => {
      let userList = data.map(
        ({ id, name, email, age, company, balance }, ind) => ({
          id,
          name,
          email,
          age,
          balance,
          company,
          index: ind + 1
        })
      );
      this.setState({ userList });
    });
  }

  columns = [
    {
      dataField: "index",
      text: "No"
    },
    {
      dataField: "name",
      text: "User Name"
    },
    {
      dataField: "email",
      text: "User Email"
    },
    {
      dataField: "company",
      text: "Company"
    },
    {
      dataField: "balance",
      text: "Balance",
      align: "center",
      headerAlign: "center"
    },
    {
      dataField: "age",
      text: "Age",
      align: "center",
      headerAlign: "center"
    }
  ];

  sortableColumn = [
    {
      dataField: "index",
      text: "No",
      sort: true
    },
    {
      dataField: "name",
      text: "User Name",
      sort: true
    },
    {
      dataField: "email",
      text: "User Email",
      sort: true
    },
    {
      dataField: "company",
      text: "Company",
      sort: true
    },
    {
      dataField: "balance",
      text: "Balance",
      sort: true,
      align: "center",
      headerAlign: "center"
    },
    {
      dataField: "age",
      text: "Age",
      sort: true,
      align: "center",
      headerAlign: "center"
    }
  ];

  paginationOptions = {
    // custom: true,
    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    totalSize: this.state.userList.length
  };

  render() {
    let { userList } = this.state;
    let { SearchBar } = Search;

    return (
      <div>
        <Breadcrumb
          routeSegments={[{ name: "Home", path: "/" }, { name: "Data Table" }]}
        />
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
            <SimpleCard title="Simple Data Table">
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={userList}
                columns={this.columns}
                pagination={paginationFactory(this.paginationOptions)}
                noDataIndication={"Table is empty"}
              />
            </SimpleCard>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
            <SimpleCard title="Default Sorted Data Table">
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={userList}
                columns={this.sortableColumn}
                defaultSorted={this.defaultSorted}
                pagination={paginationFactory(this.paginationOptions)}
                noDataIndication={"Table is empty"}
                striped
              />
            </SimpleCard>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
            <SimpleCard title="Multi-column ordering">
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={userList}
                columns={this.sortableColumn}
                pagination={paginationFactory(this.paginationOptions)}
                noDataIndication={"Table is empty"}
                striped
              />
            </SimpleCard>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
            <SimpleCard title="Searchable Data Table">
              <ToolkitProvider
                striped
                keyField="id"
                data={userList}
                columns={this.sortableColumn}
                search
              >
                {props => (
                  <>
                    <div className="d-flex justify-content-end align-items-center">
                      <span className="mb-2 mr-1">Search:</span>
                      <SearchBar {...props.searchProps} className="mb-0" />
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4
                      pagination={paginationFactory(this.paginationOptions)}
                      noDataIndication={"Table is empty"}
                    />
                  </>
                )}
              </ToolkitProvider>
            </SimpleCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppDataTable;
