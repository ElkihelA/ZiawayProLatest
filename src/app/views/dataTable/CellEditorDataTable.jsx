import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";
import { SimpleCard } from "@gull";
import axios from "axios";

class CellEditorDataTable extends Component {
  state = {
    userList: []
  };

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
      text: "No",
      editable: false
    },
    {
      dataField: "name",
      text: "User Name"
    },
    {
      dataField: "email",
      text: "User Email",
      editable: false // disable editing
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
      headerAlign: "center",
      editable: (content, row, rowIndex, columnIndex) => content > 17
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

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Dashboard", path: "/" },
            { name: "Data Table", path: "data-table" },
            { name: "Cell Editor Data Table" }
          ]}
        />
        <SimpleCard title="Cell Editor Data Table">
          <p>
            <b>Note: </b> Age under 18 can't be edited
          </p>
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={userList}
            columns={this.columns}
            cellEdit={cellEditFactory({ mode: "click" })}
            pagination={paginationFactory(this.paginationOptions)}
            noDataIndication={"Table is empty"}
          />
        </SimpleCard>
      </div>
    );
  }
}

export default CellEditorDataTable;
