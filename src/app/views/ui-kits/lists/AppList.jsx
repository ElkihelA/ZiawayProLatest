import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class AppList extends Component {
  state = {};
  randomText = `Cupidatat quis ad sint excepteur laborum in esse qui. Et
  excepteur consectetur ex nisi eu do cillum ad laborum.
  Mollit et eu officia dolore sunt Lorem culpa qui commodo
  velit ex amet id ex. Officia anim incididunt laboris
  deserunt anim aute dolor incididunt veniam aute dolore
  do exercitation. Dolor nisi culpa ex ad irure in elit eu
  dolore. Ad laboris ipsum reprehenderit irure non commodo
  excepteur consectetur ex nisi eu do cillum ad laborum.
  Mollit et eu officia dolore sunt Lorem culpa qui commodo
  velit ex amet id ex. Officia anim incididunt laboris
  deserunt anim aute dolor incididunt veniam aute dolore
  do exercitation. Dolor nisi culpa ex ad irure in elit eu
  dolore. Ad laboris ipsum reprehenderit irure non commodo
  enim culpa commodo veniam incididunt veniam ad.`;

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Lists" }
          ]}
        ></Breadcrumb>

        <div className="row mb-4">
          <div className="col-md-6">
            <p>
              List groups are a flexible and powerful component for displaying a
              series of content. Modify and extend them to support just about
              any content within.
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4 mb-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">Basic example</h4>
                <p>
                  The most basic list group is an unordered list with list items
                  and the proper classes.
                </p>
                <ul className="list-group">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4  mb-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">
                  Basic example with Active items
                </h4>
                <p>
                  Add .active to a .list-group-item to indicate the current
                  active selection.
                </p>
                <ul className="list-group">
                  <li className="list-group-item active">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">
                  Basic example with Disabled items
                </h4>
                <p>
                  Add .disabled to a .list-group-item to make it appear disabled
                </p>
                <ul className="list-group">
                  <li className="list-group-item disabled">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4  mb-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">Links</h4>
                <p>
                  Use <code>'anchor tag'</code> to create actionable list group
                  items with hover, disabled, and active states by adding
                  .list-group-item-action
                  <span className="text-warning">
                    Be sure to not use the standard .btn classes here.
                  </span>
                </p>
                <div className="list-group">
                  <span className="list-group-item list-group-item-action active">
                    Cras justo odio
                  </span>
                  <span className="list-group-item list-group-item-action">
                    Dapibus ac facilisis in
                  </span>
                  <span className="list-group-item list-group-item-action">
                    Morbi leo risus
                  </span>
                  <span className="list-group-item list-group-item-action">
                    Porta ac consectetur ac
                  </span>
                  <span className="list-group-item list-group-item-action disabled">
                    Vestibulum at eros
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4  mb-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">buttons list items</h4>
                <p>
                  With <code>button tag</code>, you can also make use of the
                  disabled attribute instead of the .disabled class.
                  <span className="text-warning">
                    Be sure to not use the standard .btn classes here.
                  </span>
                </p>
                <div className="list-group">
                  <button
                    type="button"
                    className="list-group-item list-group-item-action active"
                  >
                    Cras justo odio
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                  >
                    Dapibus ac facilisis in
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                  >
                    Morbi leo risus
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                  >
                    Porta ac consectetur ac
                  </button>
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    disabled
                  >
                    Vestibulum at eros
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">Flush</h4>
                <p>
                  Add .list-group-flush to remove some borders and rounded
                  corners to render list group items edge-to-edge in a parent
                  container
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4  mb-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">Contextual classes</h4>
                <p>
                  Use contextual classes to style list items with a stateful
                  background and color
                </p>
                <ul className="list-group">
                  <li className="list-group-item">Dapibus ac facilisis in</li>

                  <li className="list-group-item list-group-item-primary">
                    A simple primary list group item
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    A simple secondary list group item
                  </li>
                  <li className="list-group-item list-group-item-success">
                    A simple success list group item
                  </li>
                  <li className="list-group-item list-group-item-danger">
                    A simple danger list group item
                  </li>
                  <li className="list-group-item list-group-item-warning">
                    A simple warning list group item
                  </li>
                  <li className="list-group-item list-group-item-info">
                    A simple info list group item
                  </li>
                  <li className="list-group-item list-group-item-light">
                    A simple light list group item
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    A simple dark list group item
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4  mb-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">Contextual Action</h4>
                <p>
                  Contextual classes also work with .list-group-item-action.
                  Note the addition of the hover styles here not present in the
                  previous example. Also supported is the .active state; apply
                  it to indicate an active selection on a contextual list group
                  item.
                </p>
                <div className="list-group">
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Dapibus ac facilisis in
                  </Link>

                  <Link
                    to="/"
                    className="list-group-item list-group-item-action list-group-item-primary"
                  >
                    A simple primary list group item
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action list-group-item-secondary"
                  >
                    A simple secondary list group item
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action list-group-item-success"
                  >
                    A simple success list group item
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action list-group-item-danger"
                  >
                    A simple danger list group item
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action list-group-item-warning"
                  >
                    A simple warning list group item
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action list-group-item-info"
                  >
                    A simple info list group item
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action list-group-item-light"
                  >
                    A simple light list group item
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action list-group-item-dark"
                  >
                    A simple dark list group item
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">List With Badges</h4>
                <p>
                  Add .list-group-flush to remove some borders and rounded
                  corners to render list group items edge-to-edge in a parent
                  container
                </p>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge badge-primary badge-pill">4</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-info badge-pill">2</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-success badge-pill">1</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-warning badge-pill">1</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-danger badge-pill">1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4  mb-4">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">Custom content</h4>
                <p>
                  Add nearly any HTML within, even for linked list groups like
                  the one below, with the help of flexbox utilities.
                </p>
                <div className="list-group">
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action flex-column align-items-start active"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1 text-white">
                        List group item heading
                      </h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small>Donec id elit non mi porta.</small>
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title mb-2">
                  List With JavaScript behavior
                </h4>
                <p>Use the tab from react-bootstrap</p>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className="row no-gutter">
                    <div className="col-md-4">
                      <Nav variant="pills" className="d-flex flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Message</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fourth">Contact</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div className="col-md-8">
                      <Tab.Content className="p-0">
                        <Tab.Pane eventKey="first">
                          {this.randomText.slice(0, 1000)}
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          {this.randomText.slice(0, 500)}
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          {this.randomText.slice(0, 750)}
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          {this.randomText.slice(0, 850)}
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </div>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppList;
