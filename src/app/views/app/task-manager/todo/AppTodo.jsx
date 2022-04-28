import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TodoList from "./TodoList";
import TodoEditor from "./TodoEditor";
import { MdSearch } from "react-icons/md";

class AppTodo extends Component {
  search = null;
  state = {
    query: ""
  };

  handleQueryChange = event => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        if (this.search) this.search(this.state.query);
      }
    );
  };

  render() {
    let { query } = this.state;

    return (
      <div className="todo">
        <div className="todo__search-box-holder">
          <div className="d-flex flex-column justify-content-start mb-4">
            <div className="todo__search-box d-flex align-items-center pl-2 pr-3">
              <MdSearch size="24" className="text-primary search-icon">
                search
              </MdSearch>
              <input
                className="h-100 pl-5 pr-3 flex-grow-1"
                type="text"
                name="query"
                value={query}
                onChange={this.handleQueryChange}
              />
            </div>
          </div>
        </div>
        <div className="todo__content">
          <Switch>
            <Route path="/todo/list/:id" component={TodoEditor} />
            <Route
              exact
              path="/todo/list"
              render={props => (
                <TodoList
                  {...props}
                  setSearchFunction={searchFunction =>
                    (this.search = searchFunction)
                  }
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppTodo;
