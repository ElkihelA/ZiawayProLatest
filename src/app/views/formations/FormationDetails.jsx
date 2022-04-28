import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FacebookProvider, Comments } from "react-facebook";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { withFirestore, populate } from "react-redux-firebase";
import ReactPlayer from 'react-player'
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";

const collection = "formations";
class FormationDetails extends Component {
  state = {};
  render() {

    let {formation} = this.props;
    let url= "https://app.ziaway.ca/" +this.props.match && this.props.match.id
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Accueil", path: "/" },
            { name: "Toutes les vidéos", path: "/formations" },
            { name: this.props.formation && this.props.formation.titre, path: "/formation/" + this.props.match.params.id },
            { name: "",  path: "/" + this.props.match.params.id  },
          ]}
        ></Breadcrumb>
        <section className="ul-product-detail">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="ul-product-detail__image m-1">
                       
                        <ReactPlayer url={formation && formation.url} light={false} width="100%" controls={true}/>
                      </div>
                      <hr />
                      <h3 className="font-weight-700 text-primary m-1">
                         Commentaires

                        </h3>
                      <FacebookProvider appId="1264998607188728">
                          <Comments href={url} />
                        </FacebookProvider>
                    </div>
                    <div className="col-lg-6">
                   
                      <div className="ul-product-detail__brand-name m-4">
                      <div className="badge badge-primary text-18 mb-4 "> {formation && formation.categorie} </div>
                        <h2 className="heading text-primary"> {formation && formation.titre}</h2>
                        <span className=" text-14 mt-4">{formation && formation.description}</span>
                     
                       
                      </div>
                
                  

                    
                     

                     

                   
                    </div>
                  </div>
                  <div className="row">



                    
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
const mapStateToProps = (state) => ({
formation: state.firestore.data.formation
});

export default compose(
  firestoreConnect((props) => [
    {
      collection: collection,
      doc: props.match.params.id,
      storeAs: "formation",
    },
  ]),
  connect(mapStateToProps)
)(FormationDetails);
