import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { withFirestore, populate } from "react-redux-firebase";
import ReactPlayer from "react-player";
import { FaBed,FaBath } from "react-icons/fa";

const collection = "courtiersMembres";
class BiensCourtiers extends Component {
  state = {};

  handlePageClick = (data) => {
    let currentPage = data.selected;
    this.setState({ currentPage });
  };

  render() {
    console.log(
      "formations :",
      this.props.courtier && this.props.courtier.length
    );
    let proprietes=[];
    if(this.props.courtier){
      if(this.props.vendu){

        proprietes = this.props.courtier[0].proprietesVendus;
      }else {

        proprietes = this.props.courtier[0].proprietes

      }
       

    }
    return (
      <div>
        <section className="product-cart">
          <div className="row list-grid mb-4">
            {this.props.courtier ? (
             proprietes.map((element) => {
                return (
                  <div className="list-item col-md-4">
                    <div className="card o-hidden mb-4 d-flex flex-column">
                      <div className="list-thumb d-flex">
                     
                        <img src={element.imageUrl} />
                      </div>
                      <div className="flex-grow-1 d-bock">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                        <span className="badge badge-primary text-12 mb-3">
                          
                          {element.type}
                        </span>
                          <a
                            className=" w-sm-100"
                            href={element.url}
                            target="_blank"
                          >
                            <h4 className="">{element.ville}</h4>
                          </a>
                          <p className="m-0 text-muted text-small w-15 w-sm-100 pb-1">
                            {element.adresse}
                          </p>
                         

                          <div className="row mt-1">
                            <div className="col-md-6">
                            <p className=" text-muted">
                            <h4 className="">{element.prix_demande}</h4>
                         </p>
                         
                            </div>
                            <div className="col-md-3 text-center">
                            <p className=" text-muted">
                            <h6 className=""><FaBed /> 6 </h6>         </p>
                            </div>
                            <div className="col-md-3 text-center">
                            <p className=" text-muted">
                             <h6 className=""><FaBath size="1em" /> 2 </h6></p>
                            </div>
                          </div>
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
    courtier: firestore.ordered.courtiersMembres,
  }))
)(BiensCourtiers);
