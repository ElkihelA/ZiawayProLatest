import React, { Component } from "react";
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { MettreAJourAbonnements } from "app/redux/actions/AbonnementActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SweetAlert from "sweetalert2-react";

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`btn btn-primary ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Validation en cours..." : children}
  </button>
);

class Forfait extends Component {
  constructor(props) {
    super(props);
    this.state = { composeDialogOpen: false, warning: false, success: false,loading:false };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}
  setSubscriptionInfo = (value) => {
    if (this.props.subscriptions.length < 2) {
      this.props.MettreAJourAbonnements({
        customerId: this.props.user.customerId,
        planId: value.plan,
        oldSubscriptionId: this.props.subscriptions[0].id,
        paymentMethodId: this.props.methodePaiements[0].id,
      });
    } else {
      //notification
      console.log("subscriptions", this.props.subscriptions.length);
      this.toggleAlert("warning");
    }
  };

  toggleAlert = (name) => {
    this.setState({ [name]: !this.state[name] });
  };

  closeAlert = (name) => {
    this.setState({ [name]: false });
  };

  render() {
    let {
      nextStep,
      previousStep,
      lastStep,
      firstStep,
      currentStep,
      totalSteps,
    } = this.props;
    const { warning, success,loading } = this.state;
    let { open, handleClose } = this.props;
    return (
      <Modal show={open} onHide={handleClose} size="lg" centered>
        <div className="row" style={{ margin: 20 }}>
          <div className="col-lg-4 col-xl-4 m-0 p-0">
            <div className="ul-pricing__table-1">
              <div className="ul-pricing__header">
                <div className="ul-pricing__main-number m-0">
                  <div className="pt-4"></div>
                </div>
                <div className="ul-pricing__main-number m-0">
                  <h1 className="heading text-primary t-font-boldest">
                    {" "}
                    <div style={{ minHeight: 70 }}></div>
                  </h1>
                </div>
                <div className="ul-pricing__month">
                  <small className="text-purple-100"> </small>
                </div>
              </div>
              <div className="ul-pricing__title pt-8">
                <h2 className="heading text-primary">
                  Offre de lancement
                </h2>
              </div>
              <div className="ul-pricing__table-listing mb-4">
                <ul>
                  <li className="t-font-bolder">
                    (Réservée aux particuliers)
                    <br />
                    <br />
                    <h3>Vous auriez tort de vous en priver ! </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4 m-0 p-0">
            <div className="ul-pricing__table-2 ">
              <div className="ul-pricing__header">
                <div className="ul-pricing__image text-warning m-0">
                  <div className="pt-4"></div>
                </div>
                <div className="ul-pricing__main-number m-0">
                  <h1 className="heading text-warning t-font-boldest">
                    <strike>$19.99</strike>
                  </h1>
                  0$ par mois
                </div>
                <div className="ul-pricing__month">
                  <small className="text-purple-100">
                    {" "}
                    Offre de lancement <br />
                  </small>
                </div>
              </div>
              <div className="ul-pricing__title">
                <h2 className="heading text-warning">Prémium</h2>
              </div>
              <div className="ul-pricing__table-listing mb-4">
                <ul>
                  <li className="t-font-bolder">Espace personnel</li>
                  <li className="t-font-bolder">Valeur marchande Ziaway</li>
                  <li className="t-font-bolder">Articles spécialisés</li>
                  <li className="t-font-bolder">Vidéos de formation</li>
                  <li className="t-font-bolder">
                    Prix de ventes réels <br />
                    des biens comparables
                  </li>
                  <li className="t-font-bolder">
                    Recommandation et <br /> performance des courtiers
                  </li>
                  <li className="text-mute">
                    Visite privée avant <br />
                    la mise sur le marché
                  </li>
                </ul>
              </div>

              <button
                type="button"
                className="btn btn-lg btn-warning btn-rounded m-1"
                onClick={() =>
                  this.setSubscriptionInfo({
                    plan_unit: "1",
                    plan: "price_1HyJh2Bdgxbr2FVS8od79oOl",
                    titre_plan: "Plan Prémium",
                    prix_plan: "0",
                  })
                }
              >
                Souscrire
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4 m-0 p-0">
            <div className="ul-pricing__table-2 ">
              <div className="ul-pricing__header">
                <div className="ul-pricing__image text-danger m-0">
                  <div className="pt-4"></div>
                </div>
                <div className="ul-pricing__main-number m-0">
                  <h1 className="heading text-danger t-font-boldest">
                    <strike>$49.99</strike>{" "}
                  </h1>
                  0$ par mois
                </div>
                <div className="ul-pricing__month">
                  <small className="text-purple-100">
                    {" "}
                    Offre de lancement <br />
                  </small>
                </div>
              </div>
              <div className="ul-pricing__title">
                <h2 className="heading text-danger">Privilège</h2>
              </div>
              <div className="ul-pricing__table-listing mb-4">
                <ul>
                  <li className="t-font-bolder">Espace personnel</li>
                  <li className="t-font-bolder">Valeur marchande Ziaway</li>
                  <li className="t-font-bolder">Articles spécialisés</li>
                  <li className="t-font-bolder">Vidéos de formation</li>
                  <li className="t-font-bolder">
                    Prix de ventes réels <br />
                    des biens comparables
                  </li>
                  <li className="t-font-bolder">
                    Recommandation et <br /> performance des courtiers
                  </li>
                  <li className="t-font-bolder">
                    Visite privée avant <br />
                    la mise sur le marché
                  </li>
                </ul>
              </div>

              <button
                type="button"
                className="btn btn-lg btn-danger btn-rounded m-1"
                onClick={() =>
                  this.setSubscriptionInfo({
                    plan_unit: "1",
                    plan: "price_1I5tXuBdgxbr2FVSWQJwxUzR",
                    titre_plan: "Plan Privilège",
                    prix_plan: "0",
                  })
                }
              >
                Souscrire
              </button>
            </div>
          </div>
        </div>
        <SweetAlert
          show={warning}
          title="Oups !"
          text="Vous avez deux abonnements en cours.Veuillez contacter le service à la clientèle pour plus de détails"
          onConfirm={() => this.toggleAlert("warning")}
        />
        <SweetAlert
          show={success}
          title="Félicitations !"
          text="Votre abonnement à été mis à jour"
          onConfirm={() => this.toggleAlert("success")}
        />
         <SweetAlert
          show={loading}
          title="Mise à jour en cours"
          text="Veuillez patienter, la mise à jour de votre abonnement est en cours"
        />
      </Modal>
    );
  }
}
const mapStateToProps = (state) => ({
  MettreAJourAbonnements: PropTypes.func.isRequired,
  methodePaiements: state.abonnement.metho_paiements,
  subscriptions: state.abonnement.subscriptions,
  updateSuccess: state.abonnement.updateAbonnementSuccess,
  updateError: state.abonnement.updateAbonnementError,
  user: state.firebase.profile,
});

export default connect(mapStateToProps, {
  MettreAJourAbonnements,
})(Forfait);
