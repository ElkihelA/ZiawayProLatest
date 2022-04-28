import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  ObtenirMethodesPaiements,
  ObtenirAbonnements,
  ObtenirFactures,
} from "app/redux/actions/AbonnementActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CurrencyFormat from "react-currency-format";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardUpdate from "./CardUpdate";
import CheckoutForm from "./CheckoutForm";
import Forfait from "./Forfait";
import { truncate } from "lodash";
import { AnnulerAbonnement } from "app/redux/actions/AbonnementActions";
import swal from "sweetalert2";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      fontSize: "12px",
      color: "#424770",
      letterSpacing: "0.025em",
      fontFamily: "Source Code Pro, monospace",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

const InjectedCheckoutForm = (props) => (
  <ElementsConsumer>
    {({ stripe, elements, fncSubmit }) => (
      <CheckoutForm
        stripe={stripe}
        elements={elements}
        submit={fncSubmit}
        clientInfo={props.clientInfo}
      />
    )}
  </ElementsConsumer>
);
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_live_j1kzjRe8JQK4HuIIDTdUwrDy00pWwQGoC1");

class Abonnements extends Component {
  state = { composeDialogOpen: false };

  closeDialog = () => {
    this.setState({ composeDialogOpen: false });
  };
  openDialog = () => {
    this.setState({ composeDialogOpen: true });
  };

  annulerAbonnement = () => {
    swal
      .fire({
        title: "Êtes-vous sûr?",
        text: "Êtes-vous sûr de vouloir annuler votre abonnement ?",
        icon: "warning",
        type: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, annuler l'abonnement!",
        cancelButtonText: "Non",
      })
      .then((result) => {
        if (result.value) {
          this.props.AnnulerAbonnement({
            customerId: this.props.user.customerId,
            oldSubscriptionId: this.props.subscriptions[0].id,
          });
        } else {
        }
      });
  };

  customTabHeader = (title, icon) => (
    <div className="d-flex align-items-center">
      <span className="mr-2">
        <i className={icon}></i>
      </span>
      <span>{title}</span>
    </div>
  );
  secondsToISOString(seconds) {
    const date = new Date(seconds * 1000);
    let formatted_date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return formatted_date;
  }
  getCardBrand(brand) {
    switch (brand) {
      case "mastercard":
        return (
          <img
            className="mr-1"
            src="/assets/images/master-card.png"
            alt="master card"
            srcSet=""
          />
        );

      case "visa":
        return (
          <img
            className="mr-1"
            src="/assets/images/visa.png"
            alt="master card"
            srcSet=""
          />
        );
      default:
        return null;
    }
  }

  componentDidMount() {
    if (this.props.customerId) {
      this.props.ObtenirMethodesPaiements({
        customerId: this.props.customerId,
      });

      this.props.ObtenirAbonnements({
        customerId: this.props.customerId,
      });
      this.props.ObtenirFactures({
        customerId: this.props.customerId,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.customerId !== this.props.customerId) {
      this.props.ObtenirMethodesPaiements({
        customerId: this.props.customerId,
      });

      this.props.ObtenirAbonnements({
        customerId: this.props.customerId,
      });
      this.props.ObtenirFactures({
        customerId: this.props.customerId,
      });
    }
  }

  render() {
    const dataTablePage = 0;
    const dataTablePerPage = 10;
    let factures = this.props.factures ? this.props.factures : [];
    let methodePaiements = this.props.methodePaiements
      ? this.props.methodePaiements
      : [];
      let subscriptions = this.props.subscriptions
      ? this.props.subscriptions
      : [];
    let { composeDialogOpen } = this.state;
    const { loadingSubscriptions } = this.props;
    return (
      <div>
        <Forfait open={composeDialogOpen} handleClose={this.closeDialog} />
        <section className="chekout-page">
          <div className="row">
            <div className="col-lg-4 mb-4">
              {this.props.subscriptions && (
                <div className="mb-4 text-center">
                  <button
                    onClick={this.openDialog}
                    type="button"
                    className="btn btn-success m-1"
                  >
                    Modifier votre abonnement
                  </button>
                  <button
                    onClick={this.annulerAbonnement}
                    type="button"
                    className="btn btn-warning m-1"
                  >
                    Annuler
                  </button>
                </div>
              )}
              {loadingSubscriptions ? (
                <div className="spinner-bubble spinner-bubble-primary m-5 align-items-center">
                  {" "}
                </div>
              ) : (subscriptions.length  == 0) ? (
                <div className="card mb-4" >
                  <div className="card-body">
                    <div className="card-title">Abonnement</div>
                    <span className="text-muted"></span>

                    <h3 className="heading text-primary text-center text-capitalize">
                      <span>Plan découverte</span>
                    </h3>

                  </div>
                </div>
              ) : (
               subscriptions.map((plan, indx) => {
                  return (
                    <div className="card mb-4" key={indx}>
                      <div className="card-body">
                        <div className="card-title">Abonnement</div>
                        <span className="text-muted"></span>

                        <h3 className="heading text-primary text-center text-capitalize">
                          <span>{plan.plan.nickname}</span>
                        </h3>

                        <div className="row ">
                          <div className="col-lg-12 mt-5">
                            <div className="ul-product-cart__invoice">
                              <div className="card-title">
                                <h4 className="heading text-primary">
                                  Paiement total
                                </h4>
                              </div>
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <th scope="row" className="text-16">
                                      Sous-total
                                    </th>
                                    <td className="text-16 text-success font-weight-700">
                                      <CurrencyFormat
                                        value={(plan.plan.amount / 100).toFixed(
                                          2
                                        )}
                                        displayType={"text"}
                                        isNumericString={true}
                                        thousandSeparator={" "}
                                        thousandSpacing={"3"}
                                        fixedDecimalScale={true}
                                        prefix={"$"}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="text-16">
                                      Taxes
                                    </th>
                                    <td>
                                      <ul className="list-unstyled mb-0">
                                        <li>
                                          <div className="">
                                            <label
                                              className=" radio-primary"
                                              checked=""
                                            >
                                              <span>
                                                TPS :{" "}
                                                <CurrencyFormat
                                                  value={(
                                                    (plan.plan.amount / 100) *
                                                    0.05
                                                  ).toFixed(2)}
                                                  displayType={"text"}
                                                  isNumericString={true}
                                                  thousandSeparator={" "}
                                                  thousandSpacing={"3"}
                                                  fixedDecimalScale={true}
                                                  prefix={"$"}
                                                />
                                              </span>
                                              <span className="checkmark"></span>
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="">
                                            <label className=" radio-primary">
                                              <span>
                                                TVQ :{" "}
                                                <CurrencyFormat
                                                  value={(
                                                    (plan.plan.amount / 100) *
                                                    0.09975
                                                  ).toFixed(2)}
                                                  displayType={"text"}
                                                  isNumericString={true}
                                                  thousandSeparator={" "}
                                                  thousandSpacing={"3"}
                                                  fixedDecimalScale={true}
                                                  prefix={"$"}
                                                />
                                              </span>
                                              <span className="checkmark"></span>
                                            </label>
                                          </div>
                                        </li>
                                        <li></li>
                                      </ul>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      scope="row"
                                      className="text-primary text-16"
                                    >
                                      Total:
                                    </th>
                                    <td className="font-weight-700 text-16">
                                      <CurrencyFormat
                                        value={(
                                          plan.plan.amount / 100 +
                                          (plan.plan.amount / 100) * 0.05 +
                                          (plan.plan.amount / 100) * 0.09975
                                        ).toFixed(2)}
                                        displayType={"text"}
                                        isNumericString={true}
                                        thousandSeparator={" "}
                                        thousandSpacing={"3"}
                                        fixedDecimalScale={true}
                                        prefix={"$"}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {" "}
                                      {plan.cancel_at_period_end && (
                                        <h4 className="text-danger">
                                          Annulé - se termine à la fin de la
                                          période
                                        </h4>
                                      )}{" "}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="card-title">Informations de paiements</div>
                  <Tabs defaultActiveKey="card">
                    <Tab
                      eventKey="card"
                      title={this.customTabHeader(
                        "Carte de crédit",
                        "i-Credit-Card"
                      )}
                    >
                      <div className="ul-widget-list__payment-method m-3">
                        {this.props.methodePaiements &&
                          this.props.methodePaiements.map((metho, indx) => {
                            console.log("metho", metho);
                            return (
                              <span key={indx}>
                                {" "}
                                <p className="text-primary mb-1">
                                  Inscrite au dossier :
                                </p>{" "}
                                {this.getCardBrand(metho.card.brand)} **** ****
                                **** {metho.card.last4}
                              </span>
                            );
                          })}
                      </div>
                      <div className="col-sm-10">
                        <p className="text-primary mb-1">
                          Mettre à jour le mode de paiement :
                        </p>
                        <Elements stripe={stripePromise}>
                          <InjectedCheckoutForm clientInfo={this.state} />
                        </Elements>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
                <div className="card-footer">
                  <div className="row text-right">
                    <div className="col-lg-12 "></div>
                  </div>
                </div>
              </div>
              <div className="card h-100">
                <div className="card-body">
                  <div className="ul-widget__head border-0 mb-2">
                    <div className="ul-widget__head-label">
                      <h3 className="ul-widget__head-title pb-2">Factures</h3>
                    </div>
                  </div>

                  <div className="ul-widget-body">
                    <div className="ul-widget3">
                      <div className="ul-widget6__item--table">
                        <table className="table ">
                          <thead>
                            <tr className="ul-widget6__tr--sticky-th">
                              <th scope="col">Numéro</th>
                              <th scope="col">Date</th>
                              <th scope="col">Montant payé</th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {factures
                              .slice(
                                dataTablePage * dataTablePerPage,
                                dataTablePerPage * (dataTablePage + 1)
                              )
                              .map((facture, ind) => (
                                <tr key={ind}>
                                  <td>
                                    <span>
                                      <div className="ul-widget_user-card">
                                        <div className="ul-widget4__img">
                                          {facture.number}
                                        </div>
                                      </div>
                                    </span>
                                  </td>
                                  <td>
                                    {this.secondsToISOString(facture.created)}
                                  </td>
                                  <td>
                                    <span
                                      className={`badge badge-pill badge-outline-success p-2 m-1`}
                                    >
                                      <CurrencyFormat
                                        value={(
                                          facture.amount_paid / 100
                                        ).toFixed(2)}
                                        displayType={"text"}
                                        isNumericString={true}
                                        thousandSeparator={" "}
                                        thousandSpacing={"3"}
                                        fixedDecimalScale={true}
                                        prefix={"$"}
                                      />
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      className=" text-primary ul-widget4__title d-block"
                                      href={facture.hosted_invoice_url}
                                      target="_blank"
                                    >
                                      Voir la facture{" "}
                                    </a>
                                  </td>
                                  <td>
                                    <a
                                      className="button text-primary ul-widget4__title d-block"
                                      href={facture.invoice_pdf}
                                      target="_blank"
                                    >
                                      Télécharger la facture{" "}
                                    </a>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                      <nav aria-label="Page navigation example">
                        <ReactPaginate
                          previousLabel={"Précédent"}
                          nextLabel={"Suivant"}
                          breakLabel={"..."}
                          breakClassName={"break-me"}
                          pageCount={Math.ceil(
                            factures.length / dataTablePerPage
                          )}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={3}
                          onPageChange={this.handlePageClick}
                          containerClassName={"pagination"}
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active"}
                        />
                      </nav>
                    </div>
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
  ObtenirMethodesPaiements: PropTypes.func.isRequired,
  ObtenirAbonnements: PropTypes.func.isRequired,
  AnnulerAbonnement: PropTypes.func.isRequired,
  ObtenirFactures: PropTypes.func.isRequired,
  methodePaiements: state.abonnement.metho_paiements,
  subscriptions: state.abonnement.subscriptions,
  loadingSubscriptions: state.abonnement.loadingAbonnements,
  factures: state.abonnement.factures,
  user: state.firebase.profile,
});

export default connect(mapStateToProps, {
  ObtenirMethodesPaiements,
  ObtenirAbonnements,
  ObtenirFactures,
  AnnulerAbonnement,
})(Abonnements);
