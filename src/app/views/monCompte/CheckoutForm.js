import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { ObtenirMethodesPaiements } from "app/redux/actions/AbonnementActions";
import { PaiementIntentSecret } from "app/redux/actions/LoginActions";
import { updateProfile } from "app/redux/actions/UserActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DangerAlert from "./DangerAlert";
import { MiseAjourCarte } from "app/redux/actions/LoginActions";
import SweetAlert from "sweetalert2-react";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

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

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`btn btn-primary ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Validation en cours..." : children}
  </button>
);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

const ResetButton = ({ onClick }) => (
  <button type="button" className="ResetButton" onClick={onClick}>
    <svg width="32px" height="32px" viewBox="0 0 32 32">
      <path
        fill="#FFF"
        d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      />
    </svg>
  </button>
);

const DEFAULT_STATE = {
  error: null,
  cardComplete: false,
  processing: false,
  paymentMethod: null,
  show: false,
  email: "",
  phone: "",
  name: "",
  warning: false,
  success: false,
};

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.updateSuccess != this.props.updateSuccess) {
      if (this.props.updateSuccess) {
        this.toggleAlert("success");
        this.setState({ processing: false });
      }
    }
  }
  toggleAlert = (name) => {
    this.setState({ [name]: !this.state[name] });
  };

  closeAlert = (name) => {
    this.setState({ [name]: false });
  };
  handleSubmit = async (event) => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    const {
      email,
      phone,
      name,
      error,
      cardComplete,
      titre_plan,
      prix_plan,
    } = this.state;

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      this.setState({ processing: true });
    }

    //const card = elements.getElement(CardElement);

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        email,
        phone,
        name,
      },
    });

    if (payload.error) {
      console.log("stripe error", payload.error);
      this.setState({ error: payload.error.message });
      this.setState({ show: true });
    } else {
      console.log("maj carte", payload);

      this.props.MiseAjourCarte({
        subscriptionId: this.props.abonnement[0].id,
        customerId: this.props.user.customerId,
        newPaymentMethod: payload.paymentMethod,
        oldPaymentMethod: this.props.methodePaiements[0],
      });
      this.props.ObtenirMethodesPaiements({
        customerId: this.props.user.customerId,
      });
    }
  };

  reset = () => {
    this.setState(DEFAULT_STATE);
  };

  render() {
    const {
      error,
      processing,
      paymentMethod,
      name,
      email,
      phone,
      address,
      warning,
      success,
    } = this.state;

    const { stripe } = this.props;
    return paymentMethod ? (
      <div className="Result">
        <div className="ResultTitle" role="alert">
          Payment successful
        </div>
        <div className="ResultMessage">
          Thanks for trying Stripe Elements. No money was charged, but we
          generated a PaymentMethod: {paymentMethod.id}
        </div>
        <ResetButton onClick={this.reset} />
      </div>
    ) : (
      <form className="Form" onSubmit={this.handleSubmit}>
        <div className="card-body">
          <p className="text-primary">Informations de facturation</p>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Nom et prénom
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="name"
                required
                type="text"
                placeholder="Jane Doe"
                required
                autoComplete="name"
                value={this.state.name}
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                required
                placeholder="Email"
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">
              Téléphone
            </label>
            <div className="col-sm-10">
              <PhoneInput
                className="form-control"
                defaultCountry="CA"
                id="phone"
                value={this.state.phone}
                onChange={(value) => {
                  this.setState({ phone: value });
                }}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Carte de crédit
            </label>
            <div className="col-sm-10">
              <CardField
                onChange={(event) => {
                  this.setState({
                    error: event.error,
                    cardComplete: event.complete,
                  });
                }}
              />
              
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                  required
                />
                <label className="form-check-label ml-3" htmlFor="gridCheck1">
                  <a href="/" target="_blank">
                    Accepter les conditions d'utilisations
                  </a>
                </label>
              </div>
            </div>
          </div>
          <div className="col-sm-10">
            <DangerAlert
              show={this.state.show}
              error={this.state.error}
            ></DangerAlert>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
              <SubmitButton
                processing={processing}
                error={error}
                disabled={!stripe}
              >
                Mettre à jour
              </SubmitButton>
            </div>
          </div>
        </div>

        <fieldset className="form-group"></fieldset>
        <SweetAlert
          show={warning}
          title="Oups !"
          text="Vous avez deux abonnements en cours.Veuillez contacter le service à la clientèle pour plus de détails"
          onConfirm={() => this.toggleAlert("warning")}
        />
        <SweetAlert
          show={success}
          title="Succès !"
          text="Votre mode de paiement a été mis à jour."
          onConfirm={() => this.toggleAlert("success")}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  MiseAjourCarte: PropTypes.func.isRequired,
  ObtenirMethodesPaiements: PropTypes.func.isRequired,
  user: state.firebase.profile,
  abonnement: state.abonnement.subscriptions,
  methodePaiements: state.abonnement.metho_paiements,
  updateSuccess: state.login.updateProfile,
  secret: state.secret,
});

export default connect(mapStateToProps, {
  MiseAjourCarte,
  ObtenirMethodesPaiements,
})(CheckoutForm);
