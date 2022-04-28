import React, { Component, Fragment } from "react";
import { ObtenirEvaluation } from "app/redux/actions/RapportEvaluationActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Media, Badge } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import Rating from "react-rating";
import {
  MdStarBorder,
  MdStar,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";

const img =
  "https://previews.123rf.com/images/kawpoon/kawpoon1803/kawpoon180300053/97678896-blurred-house-for-background-usage.jpg";

class Comparables extends Component {
  componentDidMount() {
    console.log("params comparables ", this.props.comparables);
  }
  obtenirComparables() {
    console.log("params comparables ", this.props.comparables);
  }

  render() {
    let comparablesData =
      this.props.comparables && this.props.comparables === "OK"
        ? []
        : this.props.comparables;
    const { t } = this.props;
    return (
      <Fragment>
        <div className="">
          {comparablesData && comparablesData.length == 0 ? (
            //si
            <div className="">
              <div className="table-responsive">
                <table id="user_table" className="table  text-center">
                  <thead>
                    <tr>
                      <th scope="col">{t("Report_res.38")}</th>
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
                {this.props.comparables &&
                  this.props.comparables.map((element, index) => {
                    return (
                      <Media as="li" className="mb-5" key={index}>
                        <div className="row">
                          {" "}
                          <div className="col-md-3 mb-3">
                            <img
                              width={170}
                              height={155}
                              className="mr-3 ml-3"
                              src={img}
                              alt="Generic placeholder"
                            />
                          </div>
                          <div className="col-md-9">
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
                                {element.nbrPieces} {t("Report_res.39")}
                              </Badge>
                              <Badge
                                pill
                                className="badge-outline-primary p-2 m-1"
                              >
                                {element.nbrChambres} {t("Report_res.40")}
                              </Badge>
                              <Badge
                                pill
                                className="badge-outline-primary p-2 m-1"
                              >
                                {element.superficieTerrain} {t("Report_res.41")}
                              </Badge>
                              <Badge
                                pill
                                className="badge-outline-primary p-2 m-1"
                              >
                                {element.salleBains} {t("Report_res.42")}
                              </Badge>
                              <div className="mt-1 ml-2">
                                <h6>
                                  {t("Report_res.43")} :{" "}
                                  <CurrencyFormat
                                    value={element.prixVente}
                                    displayType={"text"}
                                    isNumericString={true}
                                    thousandSeparator={" "}
                                    thousandSpacing={"3"}
                                    fixedDecimalScale={true}
                                    prefix={"$"}
                                  />
                                </h6>{" "}
                                <p>{element.adresse}</p>
                                <p className="pt-0 text-primary bold-text">
                                  {t("Report_res.44")} :{" "}
                                  {parseInt(element.score * 100)} %
                                </p>
                                <p>
                                  {" "}
                                  <Rating
                                    className="text-primary"
                                    readonly
                                    emptySymbol={
                                      <MdStarBorder size={20}></MdStarBorder>
                                    }
                                    fullSymbol={
                                      <MdStar
                                        className="text-warning"
                                        size={20}
                                      ></MdStar>
                                    }
                                    initialRating={
                                      parseInt(element.score * 10) / 2
                                    }
                                  />
                                </p>
                              </div>
                            </Media.Body>
                          </div>
                        </div>
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
export default connect(mapStateToProps, { ObtenirEvaluation })(Comparables);
