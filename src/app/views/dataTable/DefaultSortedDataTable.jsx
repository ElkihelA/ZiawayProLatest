import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { SimpleCard } from "@gull";
import axios from "axios";
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class DefaultSortedDataTable extends Component {
  state = {
    userList: []
  };

  defaultSorted = [
    {
      dataField: "nom",
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
      this.setState( this.props.users );
    });
  }

  columns = [
    {
      dataField: "id",
      text: "ID"
    },
    {
      dataField: "nom",
      text: "User Name"
    },
    {
      dataField: "email",
      text: "Email"
    },
    {
      dataField: "prenom",
      text: "Prénom"
    },
    {
      dataField: "plan",
      text: "Plan",
      align: "center",
      headerAlign: "center"
    },
  ];

  sortableColumn = [
    {
      dataField: "id",
      text: "ID",
      sort: true
    },
    {
      dataField: "nom",
      text: "User Name",
      sort: true
    },
    {
      dataField: "email",
      text: "Email",
      sort: true
    },
    {
      dataField: "prenom",
      text: "Prénom",
      sort: true
    },
    {
      dataField: "plan",
      text: "Plan",
      align: "center",
      headerAlign: "center",
      sort: true
      
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
    let  userList =this.props.users ;
    let { SearchBar } = Search;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Dashboard", path: "/" },
            { name: "Data Table", path: "data-table" },
            { name: "Default Sorted Data Table" }
          ]}
        />
        {this.props.users &&  <SimpleCard title="Default Sorted Data Table">
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={userList}
            columns={this.sortableColumn}
            defaultSorted={this.defaultSorted}
            pagination={paginationFactory(this.paginationOptions)}
            noDataIndication={"Table is empty"}
          />
        </SimpleCard> }
       
      </div>
    );
  }
}

export default compose(
  firestoreConnect(() => ['users']), // or { collection: 'todos' }
  connect((state, props) => ({
    users: state.firestore.ordered.users
  }))
 )(DefaultSortedDataTable);
