import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Tabs, Tab, ProgressBar } from "react-bootstrap";
import { ObtenirInfoCourtier } from "app/redux/actions/CarteProspectionActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import ContactCourtier from "./ContactCourtier";
import BiensCourtiers from "./BiensCourtiers";
import AppRating from "./AppRating";

const agenceMembre = "Nichita Bobic";

class ContactDetails extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const nomcourtier = this.props.location.courtier;
    this.props.ObtenirInfoCourtier({ nom: nomcourtier });
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const { infoCourtier } = this.props;
    const nomCourtier = this.props.location.courtier;
    const agence = "Nichita Bobic";

    const ventesTotal = this.props.location.ventesTotal;

    let loading = this.props.loading;
    console.log(infoCourtier);
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Accueil", path: "/" },
            { name: "Profil courtier" },
          ]}
        ></Breadcrumb>
        {loading ? (
          <div className="spinner-bubble spinner-bubble-primary m-5 align-items-center">
            {" "}
            Chargement du dossier OACIQ du courtier
          </div>
        ) : !infoCourtier ? (
          <div></div>
        ) : (
          <section className="ul-contact-detail">
            <div className="row">
              <div className="col-lg-3 col-xl-3">
                <div className="card o-hidden justify-content-center">
                  <Image src={infoCourtier.image} rounded={true} />
                  <div className="card-body">
                    <div className="ul-contact-detail__info">
                      <div className="row">
                        <div className="col-12 text-center">
                          <div className="ul-contact-detail__info-1">
                            <h5>{nomCourtier} </h5>
                            <span></span>
                          </div>
                          {/* <ContactCourtier /> */}
                        </div>

                        <div className="col-12 text-center">
                          <div className="ul-contact-detail__social">
                            <div className="ul-contact-detail__social-1">
                              <button
                                type="button"
                                className="btn btn-facebook btn-icon m-1"
                              >
                                <span className="ul-btn__icon">
                                  <i className="i-Facebook-2"></i>
                                </span>
                              </button>
                              <span className="t-font-boldest ul-contact-detail__followers"></span>
                            </div>
                            <div className="ul-contact-detail__social-1">
                              <button
                                type="button"
                                className="btn btn-twitter btn-icon m-1"
                              >
                                <span className="ul-btn__icon">
                                  <i className="i-Twitter"></i>
                                </span>
                              </button>
                              <span className="t-font-boldest ul-contact-detail__followers"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-xl-9">
                <div className="card mb-4">
                  <div className="card-header bg-transparent"></div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                      <div className="card-body text-center">
                        <i className="i-Home-4"></i>

                        <div className="content">
                          {/* <p className="text-muted text-24 text-center  mt-4 mb-0">
                          14
                          </p> */}
                          <p className="text-primary text-24 line-height-1 mb-2">
                            {ventesTotal}
                          </p>
                        </div>
                      </div>
                      <p className="text-center text-muted  mt-0 ml-5">
                        *vendus sur les 12 derniers mois
                      </p>
                    </div>
                  </div>
                  <div className="card-body">
                    <Tabs>
                      {agence === agenceMembre && (
                        <Tab eventKey="Biensvente" title="Propriétés en ventes">
                          <BiensCourtiers vendu={false} />
                        </Tab>
                      )}
                      {agence === agenceMembre && (
                        <Tab eventKey="Biensvendus" title="Propriétés vendus">
                          <BiensCourtiers vendu={true} />
                        </Tab>
                      )}
                      {agence === agenceMembre && (
                        <Tab eventKey="reviews" title="Commentaires">
                          <AppRating />
                        </Tab>
                      )}
                      <Tab eventKey="Profile" title="Profil OACIQ">
                        <div className="row">
                          <div className="col-lg-12 col-xl-12">
                            <div className="mt-4">
                              <div className="ul-contact-detail__inner-profile">
                                <h4 className="heading">Numéro de permis </h4>
                                <span className="tetx-muted">
                                  {infoCourtier.numPermis}
                                </span>
                              </div>
                              <div className="custom-separator"></div>
                              <div className="ul-contact-detail__inner-profile">
                                <h4 className="heading">Statut du permis</h4>
                                <span className="tetx-muted">
                                  {infoCourtier.statut}
                                </span>
                              </div>
                              <div className="custom-separator"></div>
                              <div className="ul-contact-detail__inner-profile">
                                <h4 className="heading">
                                  {" "}
                                  Avis et mentions disciplinaires
                                </h4>
                                <span className="tetx-muted">
                                  {infoCourtier.avis}
                                </span>
                              </div>
                            </div>
                            <div className="custom-separator"></div>
                          </div>
                          <div className="col-lg-12 col-xl-12">
                            <div className="">
                              <div className="ul-contact-detail__inner-profile">
                                <h4 className="heading">
                                  {" "}
                                  Catégorie de permis
                                </h4>
                                <span className="tetx-muted">
                                  {infoCourtier.categorie}
                                </span>
                              </div>
                              <div className="custom-separator"></div>
                              <div className="ul-contact-detail__inner-profile">
                                <h4 className="heading">
                                  Champ de pratique autorisé
                                </h4>
                                <span className="tetx-muted">
                                  {infoCourtier.expertise}
                                </span>
                              </div>
                              <div className="custom-separator"></div>
                              <div className="ul-contact-detail__inner-profile">
                                <h4 className="heading">Mode d'exercice</h4>
                                <span className="tetx-muted">
                                  {infoCourtier.mode}
                                </span>
                              </div>
                            </div>
                            <div className="custom-separator"></div>
                            <div className="ul-contact-detail__inner-profile">
                              <h4 className="heading">
                                Consulter la fiche OACIQ
                              </h4>
                              <span className="tetx-muted">
                                <a href={infoCourtier.urlFiche} target="_blank">
                                  Fiche OACIQ
                                </a>
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-12 col-xl-12">
                            <div className="ul-contact-dwtail__profile-swcription">
                              <p className="mt-3"></p>
                              <p></p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      {agence === agenceMembre && (
                        <Tab eventKey="equipe" title={nomCourtier}>
                          <div className="col-md-12 text-justify">
                            <h4> À PROPOS</h4>
                            <p>
                              Bien connue de la population de Lévis pour ses
                              qualités de femme de coeur et de carrière, son
                              énergie positive, sa sincérité et son honnêteté,
                              Reine a entrepris sa nouvelle carrière en
                              immobilier au côté de son conjoint avec tout son
                              dynamisme qu'on lui connaissait en tant
                              qu'optométriste propriétaire de trois cliniques.
                              En faisant affaire avec l'Equipe Blanchet St-Onge,
                              vous bénificierez des conseils de mise en marché
                              pour positionner adéquatement votre propriété sur
                              tous les réseaux sociaux, publicité hebdomadaire
                              dans le Journal de Lévis. Elle collabore
                              efficacement avec les courtiers des autres
                              bannières pour trouver votre acheteur peu importe
                              sa provenance. Son objectif sera de réaliser votre
                              vente aux meilleures conditions possibles. Reine
                              vous conseillera pour exploiter au maximum les
                              atouts de votre propriété : de la prise de photos,
                              à la présentation des caractérisitiques gagnantes
                              de votre propriété . Engagée à vous offrir une
                              grande disponibilité et reconnue pour atteindre
                              ses objectifs, elle vous offrira son dynamisme
                              pour réaliser vos projets. Vous souhaitez vendre,
                              choisissez les courtiers qui se démarquent au
                              nombre de transactions réalisées dans votre
                              secteur ! Nous sommes disponibles dès le premier
                              appel à vous rencontrer! Choisir cette équipe
                              c’est choisir deux courtiers soudés vers le même
                              objectif : réussir votre transaction de vente ou
                              d’achat au delà de vos attentes. Les références de
                              nos clients est la base de notre succès d’affaire
                              ! Suivez nous sur notre page professionnelle
                              Facebook Equipe Blanchet St-Onge pour vous en
                              convaincre! Nous nous ferons un plaisir de vous
                              servir !
                            </p>
                          </div>
                        </Tab>
                      )}
                      {/** 
                    <Tab eventKey="EditContact" title="EditContact">
                      <form className="mt-3">
                        <div className="form-group row">
                          <label
                            for="inputEmail3"
                            className="col-sm-2 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail3"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            for="inputPassword3"
                            className="col-sm-2 col-form-label"
                          >
                            Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword3"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <fieldset className="form-group">
                          <div className="row">
                            <div className="col-form-label col-sm-2 pt-0">
                              Radios
                            </div>
                            <div className="col-sm-10">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id="gridRadios1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label ml-3"
                                  for="gridRadios1"
                                >
                                  First radio
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id="gridRadios2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label ml-3"
                                  for="gridRadios2"
                                >
                                  Second radio
                                </label>
                              </div>
                              <div className="form-check disabled ">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gridRadios"
                                  id="gridRadios3"
                                  value="option3"
                                  disabled=""
                                />
                                <label
                                  className="form-check-label ml-3"
                                  for="gridRadios3"
                                >
                                  Third disabled radio
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div className="form-group row">
                          <div className="col-sm-2">Checkbox</div>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck1"
                              />
                              <label
                                className="form-check-label ml-3"
                                for="gridCheck1"
                              >
                                Example checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">
                              Sign in
                            </button>
                          </div>
                        </div>
                      </form>
                    </Tab>
                    */}
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ObtenirInfoCourtier: PropTypes.func.isRequired,
  infoCourtier: state.courtiers.infoCourtier,
  loading: state.courtiers.infoCourtierLoading,
});

export default connect(mapStateToProps, { ObtenirInfoCourtier })(
  ContactDetails
);
