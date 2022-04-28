import React, { Component } from "react";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { MiseAjourCarte } from "app/redux/actions/LoginActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const DEFAULT_STATE = {
  error: null,
  cardComplete: false,
  processing: false,
  paymentMethod: null,
  show: false,
  email: "",
  phone: "",
  name: "",
};
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

const CardField = ({ onChange }) => (
  <CardElement options={CARD_OPTIONS} onChange={onChange} />
);

class CardUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
    console.log("state", this.state);
  }

  onChange(event) {
    console.log("event", event);
    console.log("props", this.props);
    if (event.complete) {
    }
  }
  submit() {
    const methodePaiements = this.props.paiements
      ? this.props.methodePaiements
      : [];
    if (methodePaiements.length > 0) {
      this.props.MiseAjoutCarte({
        card: this.props.elements.getElement(CardElement),
        id: methodePaiements[0].id,
      });
    }
  }
  render() {
    return (
      <div className="form-group row">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          <h4> Carte de crédit</h4>
        </label>
        <div className="col-sm-10">
          <CardField onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  MiseAjourCarte: PropTypes.func.isRequired,
  paiements: state.abonnement.metho_paiements,
});

export default connect(mapStateToProps)(CardUpdate);
