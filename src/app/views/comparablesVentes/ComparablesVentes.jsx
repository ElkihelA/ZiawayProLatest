import React, { Component, Fragment } from "react";
import { ObtenirEvaluation } from "app/redux/actions/RapportEvaluationActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Media, Badge } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
const img =
  "https://previews.123rf.com/images/kawpoon/kawpoon1803/kawpoon180300053/97678896-blurred-house-for-background-usage.jpg";

class ComparablesVentes extends Component {
  componentDidMount() {
    console.log("params comparables ", this.props.comparables);
  }
  obtenirComparables() {
    console.log("params comparables ", this.props.comparables);
  }
  render() {

    console.log("comparables ventes",this.props.comparables);
    let ventes =JSON.parse(this.props.comparables);
    console.log(" ventes",ventes);
    return (
      <Fragment>
        <div className="">
         
          {(ventes.length ===0) ? (
            //si
            <div className="">
              <div className="table-responsive">
                <table id="user_table" className="table  text-center">
                  <thead>
                    <tr>
                      <th scope="col">Pas de comparables</th>
                      <th scope="col">
                        <Button>
                          <span>Demander l'avis d'un professionnel</span>
                        </Button>
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          ) : (
            //sinon
            <div className="ml-1">
              <ul className="list-unstyled">
                {ventes &&
                  ventes.map((element, index) => {
                    return (
                      <Media as="li" className="mb-5" key={index}>
                        <img
                          width={130}
                          height={120}
                          className="mr-3 ml-3"
                          src={img}
                          alt="Generic placeholder"
                        />
                        <Media.Body>
                          <Badge
                            
                            pill
                            className="badge-outline-primary p-2 m-1"
                          >
                            {element.genreProprietes}
                          </Badge>
                          <Badge
                       
                            pill
                            className="badge-outline-primary p-2 m-1"
                          >
                                {element.nbrPieces} Pièces
                          </Badge>
                          <Badge
                       
                            pill
                            className="badge-outline-primary p-2 m-1"
                          >
                            {element.nbrChambres} chambres
                          </Badge>
                          <div className="mt-1 ml-2">
                          <h6>
                           
                            Vendu :{" "}
                            <CurrencyFormat
                              value={element.prixVente}
                              displayType={"text"}
                              isNumericString={true}
                              thousandSeparator={" "}
                              thousandSpacing={"3"}
                              fixedDecimalScale={true}
                              prefix={"$"}
                            />
                          </h6> <p>{element.adresse}</p>
                          </div>
                         
                      
                        </Media.Body>
                      </Media>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  ObtenirEvaluation: PropTypes.func.isRequired,
});
export default connect(mapStateToProps, { ObtenirEvaluation })(ComparablesVentes);
