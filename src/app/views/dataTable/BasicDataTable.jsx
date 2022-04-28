import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { SimpleCard } from "@gull";
import axios from "axios";

class BasicDataTable extends Component {
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
          routeSegments={[
            { name: "Dashboard", path: "/" },
            { name: "Data Table", path: "data-table" },
            { name: "Basic Data Table" }
          ]}
        />
        <SimpleCard title="Basic Data Table">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={userList}
            columns={this.columns}
            pagination={paginationFactory(this.paginationOptions)}
            noDataIndication={"Table is empty"}
          />
        </SimpleCard>
      </div>
    );
  }
}

export default BasicDataTable;
