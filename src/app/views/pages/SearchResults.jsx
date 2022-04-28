import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";

class SearchResults extends Component {
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/pages" },
            { name: "Search Results" }
          ]}
        ></Breadcrumb>

        <section className="ul-search-result">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="ul-search-result__bar mb-4">
                    <div className="card-title">Search Here</div>
                    <input
                      type="search"
                      className="form-control col-8"
                      placeholder="Vue.js"
                    />

                    <h4 className="font-weight-300 mt-5">
                      Search Result For "Vue.js"
                    </h4>
                    <small className="text-muted">
                      About 16,789 result ( 0.20 seconds)
                    </small>
                  </div>

                  <div className="ul-search-result__list">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <h3>Vue.js</h3>
                        <a
                          href="https://vuejs.org/"
                          className="text-15 text-success"
                        >
                          https://vuejs.org/
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, minima autem quam exercitationem eos,
                          obcaecati aperiam delectus quia sapiente, deserunt
                          quis atque dolorem ducimus recusandae perspiciatis
                          mollitia excepturi ea rerum?
                        </p>
                      </li>
                      <li className="list-group-item">
                        <h3>Vue.js lightweight-framework></h3>
                        <a
                          href="https://vuejs.org/lightweight-framework"
                          className="text-15 text-success"
                        >
                          https://vuejs.org/lightweight-framework
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, minima autem quam exercitationem eos,
                          obcaecati aperiam delectus quia sapiente, deserunt
                          quis atque dolorem ducimus recusandae perspiciatis
                          mollitia excepturi ea rerum?
                        </p>
                      </li>
                      <li className="list-group-item">
                        <h3>Vue.js</h3>
                        <a
                          href="https://vuejs.org/"
                          className="text-15 text-success"
                        >
                          https://vuejs.org/
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, minima autem quam exercitationem eos,
                          obcaecati aperiam delectus quia sapiente, deserunt
                          quis atque dolorem ducimus recusandae perspiciatis
                          mollitia excepturi ea rerum?
                        </p>
                      </li>
                      <li className="list-group-item">
                        <h3>Vue.js lightweight-framework</h3>
                        <a
                          href="https://vuejs.org/lightweight-framework"
                          className="text-15 text-success"
                        >
                          https://vuejs.org/lightweight-framework
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, minima autem quam exercitationem eos,
                          obcaecati aperiam delectus quia sapiente, deserunt
                          quis atque dolorem ducimus recusandae perspiciatis
                          mollitia excepturi ea rerum?
                        </p>
                      </li>
                      <li className="list-group-item">
                        <h3>Vue.js</h3>
                        <a
                          href="https://vuejs.org/"
                          className="text-15 text-success"
                        >
                          https://vuejs.org/
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, minima autem quam exercitationem eos,
                          obcaecati aperiam delectus quia sapiente, deserunt
                          quis atque dolorem ducimus recusandae perspiciatis
                          mollitia excepturi ea rerum?
                        </p>
                      </li>
                      <li className="list-group-item">
                        <h3>Vue.js lightweight-framework</h3>
                        <a
                          href="https://vuejs.org/lightweight-framework"
                          className="text-15 text-success"
                        >
                          https://vuejs.org/lightweight-framework
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptate, minima autem quam exercitationem eos,
                          obcaecati aperiam delectus quia sapiente, deserunt
                          quis atque dolorem ducimus recusandae perspiciatis
                          mollitia excepturi ea rerum?
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SearchResults;
