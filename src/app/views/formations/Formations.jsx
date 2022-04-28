import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { withFirestore, populate } from "react-redux-firebase";
import ReactPlayer from "react-player";
import { withTranslation } from "react-i18next";

const collection = "formations";
class Formations extends Component {
  state = {};

  handlePageClick = (data) => {
    let currentPage = data.selected;
    this.setState({ currentPage });
  };

  render() {
    console.log(
      "formations :",
      this.props.formations && this.props.formations.length
    );

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Accueil", path: "/" },
            { name: this.props.t("videos.1") },
          ]}
        ></Breadcrumb>
        <section className="product-cart">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 list-grid mb-4">
            {this.props.formations ? (
              this.props.formations.map((element) => {
                return (
                  <div className="list-item col d-flex flex-column">
                    <div className="card o-hidden mb-4 d-flex flex-column flex-fill">
                      <div className="list-thumb d-flex">
                        <ReactPlayer
                          url={element.url}
                          controls={true}
                          light={true}
                          height="250px"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <div className="h-100 p-4 align-self-center d-flex flex-column">
                          <Link
                            className=" w-sm-100"
                            to={"/formation/" + element.id}
                          >
                            <h4 className="">{element.titre}</h4>
                          </Link>
                          <p className="mb-0 text-muted text-small w-15 w-sm-100 pb-1">
                            {element.description}
                          </p>
                          <p className="mb-0 mt-auto text-muted pt-2">
                            <span className="badge badge-primary text-12 p-2">
                              {" "}
                              {element.categorie}{" "}
                            </span>
                          </p>
                          <p className="item-badges">
                            <span className="badge badge-info p-2">
                              {" "}
                              {element.categorie}{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="loader-bubble loader-bubble-primary m-5"></div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default compose(
  withFirestore,
  lifecycle({
    componentDidMount() {
      this.props.firestore.get({ collection });
    },
  }), // or { collection: 'todos' }
  connect(({ firestore }) => ({
    formations: firestore.ordered.formations,
  }))
)(withTranslation()(Formations));
