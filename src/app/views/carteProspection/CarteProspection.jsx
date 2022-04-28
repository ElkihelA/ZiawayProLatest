import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@gull";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { SimpleCard } from "@gull";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose, lifecycle } from "recompose";
import { withFirestore, populate } from "react-redux-firebase";
import Map from "./Map";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Badge, Row, Col, Button } from "react-bootstrap";

import filterFactory, {
  textFilter,
  Comparator,
} from "react-bootstrap-table2-filter";
import _ from "lodash";
import CurrencyFormat from "react-currency-format";
import { ObtenirEvaluations } from "app/redux/actions/CarteProspectionActions";
import AlgoliaPlaces from "algolia-places-react";
import PriceSlider from "./PriceSlider";
import { withTranslation } from "react-i18next";

const populates = [
  { child: "userId", root: "users" }, //
];
const collection = "RapportsEvaluations";

let map;
let bounds;
let sub_area;
let coordinates = [];
let color = [
  "#FF0000",
  "#4286f4",
  "#ffff00",
  "#ff00b2",
  "#bb00ff",
  "#00ffff",
  "#26ff00",
  "#00ff87",
];

class CarteProspection extends Component {
  constructor(props) {
    super(props);

    this._handleSearch = this._handleSearch.bind(this);
    this.state = {
      userList: [],
      selectedMarker: false,
      options: [],
      selectedOptions: [],
      isLoading: false,
      coordinates: [],
      genreProprietes: "",
      raison: "",
      typeBien: "",
      secteur: "",
      prix: "",
    };

    this.filterEvent = this.filterEvent.bind(this);
    this.filterProspect = this.filterProspect.bind(this);
    this.filterPrix = this.filterPrix.bind(this);
  }
  defaultSorted = [
    {
      dataField: "nom",
      order: "asc",
    },
  ];

  handleDelete(value) {
    this.props.firestore
      .collection("RapportsEvaluations")
      .doc(value)
      .delete()
      .then(() => window.location.reload());
  }

  componentDidMount() {
    if (this.props.profile) {
      this.props.firestore.get({
        collection,
        where: ["userID", "==", this.props.profile.userId],
        orderBy: [["dateCreation", "desc"]],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.users !== prevProps.users) {
      this.setState({ userList: this.props.users });
      this.setState({ selectedMarker: this?.props?.users[0] });
      console.log("users props has changed.", this.props.users);
    }
  }

  handleClick = (marker, event) => {
    console.log({ marker });
    this.setState({ selectedMarker: marker });
  };

  selectRowProp = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (value, row) => {
      console.log("hello", row);
      this.handleDetails(value, row);
    },
  };

  handleDetails = (marker) => {
    console.log("selected marker", marker);
    this.setState({ selectedMarker: marker });
  };

  sortableColumn = (t) => {
    return [
      {
        dataField: "id",
        text: `${t("estimate-table.10")}`,
        align: "center",
        headerAlign: "center",

        formatter: (value, row) => (
          <>
            <span>
              <Button
                variant="danger"
                onClick={() => this.handleDelete(row.id)}
              >
                <span>{this.props.t("estimate-table.3")}</span>
              </Button>
            </span>
            <span className="ml-2">
              <Link to={"/vmz/" + row.id}>
                <Button>
                  <span>{this.props.t("estimate-table.4")}</span>
                </Button>
              </Link>
            </span>
          </>
        ),
      },
      // {
      //   dataField: "",
      //   text: `${t("estimate-table.10")}`,
      //   align: "center",
      //   headerAlign: "center",

      //   formatter: (value, row) => (
      //     <span>
      //       <Link to={"/vmz/" + row.id}>
      //         <Button>
      //           <span>{t("estimate-table.4")}</span>
      //         </Button>
      //       </Link>
      //     </span>
      //   ),
      // },
      {
        dataField: "dateCreation",
        text: `${t("estimate-table.5")}`,
        sort: true,
      },
      {
        dataField: "genreProprietes",
        text: `${t("estimate-table.6")}`,
        sort: true,
      },
      {
        dataField: "location.value",
        text: `${t("estimate-table.7")}`,
        sort: true,
      },

      /*{
      dataField: "raison",
      text: "Type de projet",
      sort: true,
      formatter: (value, row) => (
        <span>{this.getUserStatusClass(value, row)}</span>
      ),
    },*/
      {
        dataField: "ziaEstimation.prediction",
        text: `${t("estimate-table.8")}`,
        sort: true,
        formatter: (value, row) => (
          <span>
            <CurrencyFormat
              value={value.toFixed(0)}
              displayType={"text"}
              isNumericString={true}
              thousandSeparator={" "}
              thousandSpacing={"3"}
              fixedDecimalScale={true}
              prefix={"$"}
            />
          </span>
        ),
      },
      {
        dataField: "location.city",
        text: `${t("estimate-table.9")}`,
        sort: true,
      },
      // {
      //   dataField: "id",
      //   text: "Remove",
      //   align: "center",
      //   headerAlign: "center",

      //   formatter: (value, row) => (
      //     <span>
      //       <Button onClick={() => this.handleDelete(row.id)}>
      //         <span>Supprimer</span>
      //       </Button>
      //     </span>
      //   ),
      // },
    ];
  };

  paginationOptions = (t) => ({
    // custom: true,
    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: t("estimate-table.11"),
    prePageText: t("estimate-table.12"),
    nextPageText: t("estimate-table.13"),
    lastPageText: t("estimate-table.14"),
    nextPageTitle: t("estimate-table.15"),
    prePageTitle: t("estimate-table.16"),
    firstPageTitle: t("estimate-table.17"),
    lastPageTitle: t("estimate-table.18"),
    hideSizePerPage: true,

    showTotal: false,
    totalSize: this.state ? this.state.userList.length : 0,
  });

  _handleSearch(query) {
    this.setState({ isLoading: true });
    if (!query) {
      return;
    }

    fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&polygon_geojson=1&format=json`
    )
      .then((resp) => resp.json())
      .then((data) => {
        let filterGeoJsonType = data.filter(function (data) {
          return (
            data.geojson.type === "MultiPolygon" ||
            data.geojson.type === "Polygon"
          );
        });
        this.setState({ options: filterGeoJsonType });
        //this.setState({selected: filterGeoJsonType});

        console.log("geojson", filterGeoJsonType);
      });
  }

  renderCoordinate(paths) {
    coordinates = [];
    let position = 0;
    paths.map((location) => {
      if (position % 10 === 0) {
        coordinates.push({ lat: location[1], lng: location[0] });
        coordinates.concat(this.state.coordinates);
        this.setState({ coordinates: coordinates });
        // bounds.extend({"lat": location[1], "lng": location[0]});
      }
      position++;
      return true;
    });
  }
  renderToMaps(selectedOptions) {
    selectedOptions.forEach((option) => {
      console.log("option", option);

      if (option.geojson.type === "MultiPolygon") {
        this.renderCoordinate(option.geojson.coordinates[0][0]);
      } else if (option.geojson.type === "Polygon") {
        this.renderCoordinate(option.geojson.coordinates[0]);
      } else {
        alert("option.geojson.type: MultiPolygon & Polygon");
      }
    });
  }

  filterEvent(event) {
    console.log("event", event);
    const tmpFiltres = [];
    this.setState({ filtres: ["location.city", "==", "Montréal"] });

    tmpFiltres.push("genreProprietes", event.target.value);
    //tmpFiltres.push(['location.city', '==', "Montréal"]);

    // this.setState({ filtres: tmpFiltres.concat(this.state.filtres) })

    if (event.target.value == "Tous") {
      this.updateFilter("toutProprietes");
    } else {
      this.updateFilter("typePropriete", event.target.value);
    }
  }
  filterPrix(event) {
    /*
        entre 10 000 et 50 000</option>
                     >entre 50 000 et 100 000
                        <option value='{begin:"10000",end:"50000"}'>entre 100 000 et 200 000</option>
                        <option value='{begin:"10000",end:"50000"}'>entre 200 000 et 300 000</option>
                        <option value='{begin:"10000",end:"50000"}'>entre 300 000 et 400 000</option>
                        <option value='{begin:"10000",end:"50000"}'>entre 500 000 et 1 000 000</option>
                        <option value='{begin:"10000",end:"50000"}'>entre 1 000 000 et plus</option>
                                 <option value="1">entre 10 000 et 50 000</option>
                    <option value="2">entre 50 000 et 100 000</option>
                    <option value="3">entre 100 000 et 200 000</option>
                    <option value="4">entre 200 000 et 300 000</option>
                    <option value="5">entre 300 000 et 400 000</option>
                    <option value="6">entre 400 000 et 500 000</option>
                    <option value="7">entre 500 000 et 1 000 000</option>
                    <option value="8">entre 1 000 000 et plus</option>
    */
    if (event.target.value) {
      switch (event.target.value) {
        case "1":
          this.updateFilter("prix", [
            ["ziaEstimation.prediction", ">=", 10000],
            ["ziaEstimation.prediction", "<=", 50000],
          ]);
          break;
        case "2":
          this.updateFilter("prix", [
            ["ziaEstimation.prediction", ">=", 50000],
            ["ziaEstimation.prediction", "<=", 100000],
          ]);
          break;
        case "3":
          this.updateFilter("prix", [
            ["ziaEstimation.prediction", ">=", 100000],
            ["ziaEstimation.prediction", "<=", 200000],
          ]);
          break;
        case "4":
          this.updateFilter("prix", [
            ["ziaEstimation.prediction", ">=", 200000],
            ["ziaEstimation.prediction", "<=", 300000],
          ]);
          break;
        case "5":
          this.updateFilter("prix", [
            ["ziaEstimation.prediction", ">=", 300000],
            ["ziaEstimation.prediction", "<=", 400000],
          ]);
          break;
        case "6":
          this.updateFilter("prix", [
            ["ziaEstimation.prediction", ">=", 400000],
            ["ziaEstimation.prediction", "<=", 500000],
          ]);
          break;
        case "7":
          this.updateFilter("prix", [
            ["ziaEstimation.prediction", ">=", 500000],
            ["ziaEstimation.prediction", "<=", 1000000],
          ]);
          break;
        case "8":
          this.updateFilter("prix", [
            "ziaEstimation.prediction",
            ">=",
            1000000,
          ]);
          break;
        default:
          this.updateFilter("toutPrix");
          return;
      }
    }
  }

  filterProspect(event) {
    console.log("event", event);
    const tmpFiltres = [];

    if (event.target.value == "Vendeur") {
      this.updateFilter("typeClient", [
        "Je souhaite vendre",
        "Oui, d'ici 6 mois",
        "Oui, dès que possible",
        "Oui, d'ici 3 mois",
        "Oui, dans plus de 6 mois",
        "Oui, j'ai déjà commencé la vente",
      ]);
      //this.props.firestore.get({ collection, where: tmpFiltres });
    } else if (event.target.value == "Acheteur") {
      this.updateFilter("typeClient", [
        "Je souhaite acheter pour investir",
        "Je souhaite acheter pour habiter",
      ]);
    } else if (event.target.value == "Tous") {
      this.updateFilter("toutClient");
    }
  }
  filterSecteur(secteur, index) {
    console.log("secteure", secteur);
    if (secteur) {
      this.updateFilter("secteur", ["location.city", "==", secteur.name]);
    } else {
      this.updateFilter("toutSecteur");
    }
  }

  updateData() {
    let tmpFiltres = [];

    if (this.state.raison.length > 0) {
      tmpFiltres.push(this.state.raison);
      console.log("ajout raison", tmpFiltres);
    }

    if (this.state.typeBien.length > 0) {
      tmpFiltres.push(this.state.typeBien);
      console.log("ajout type bien", tmpFiltres);
    }

    if (this.state.secteur.length > 0) {
      tmpFiltres.push(this.state.secteur);
      console.log("ajout secteur", tmpFiltres);
    }
    if (this.state.prix.length > 0) {
      tmpFiltres.push(this.state.prix);
      console.log("ajout secteur", tmpFiltres);
    }

    if (tmpFiltres.length > 0) {
      console.log("type de bien update", tmpFiltres);
      this.props.firestore.get({ collection, where: tmpFiltres });
    } else {
      this.props.firestore.get({ collection });
    }
  }

  updateFilter(type, filter) {
    let tmpfiltre = [];
    let finalFilter;
    switch (type) {
      case "typeClient":
        this.setState(
          {
            raison: ["raison", "in", filter],
          },
          () => this.updateData()
        );
        //tmpfiltre.push(['raison', "in", filter]);
        break;
      case "typePropriete":
        this.setState(
          {
            typeBien: ["genreProprietes", "==", filter],
          },
          () => this.updateData()
        );
        break;
      case "toutProprietes":
        this.setState(
          {
            typeBien: [],
          },
          () => this.updateData()
        );
      case "toutClient":
        this.setState(
          {
            raison: [],
          },
          () => this.updateData()
        );

        break;
      case "secteur":
        this.setState(
          {
            secteur: filter,
          },
          () => this.updateData()
        );

        break;
      case "toutSecteur":
        this.setState(
          {
            secteur: [],
          },
          () => this.updateData()
        );

        break;

      case "prix":
        this.setState(
          {
            prix: filter,
          },
          () => this.updateData()
        );

        break;
      case "toutPrix":
        this.setState(
          {
            prix: [],
          },
          () => this.updateData()
        );

        break;
      default:
        return;
    }

    console.log("raison", this.state.raison);
    console.log("type de bien", this.state.typeBien);
  }

  _handleChange(option) {
    this.renderToMaps(option);
  }
  expandComponent(row) {
    return <div>{row.expand}</div>;
  }

  /**Badge à modifier une fois le formulaire d'évaluation ajusté */

  getUserStatusClass = (cell, row) => {
    console.log("row", row);
    switch (cell) {
      case "Je souhaite vendre":
        return (
          <Badge variant="success" className="ml-1">
            {cell}
          </Badge>
        );
        break;
      case "Je souhaite connaître sa valeur":
        return (
          <Badge variant="warning" className="ml-1">
            {cell}
          </Badge>
        );
        break;
      case "Je souhaite acheter pour investir":
      case "Je souhaite acheter pour habiter":
        return (
          <Badge variant="primary" className="ml-1">
            {cell}
          </Badge>
        );
        break;
      case "Non, je viens de le vendre":
      case "Non, je n'ai pas de projet de vente":
        return (
          <Badge variant="danger" className="ml-1">
            {cell}
          </Badge>
        );
        break;
      case "Oui, d'ici 6 mois":
      case "Oui, dès que possible":
      case "Oui, d'ici 3 mois":
      case "Oui, dans plus de 6 mois":
      case "Oui, j'ai déjà commencé la vente":
        let variant = "primary";
        if (row.proprietaire) {
          variant = "success";
        }
        return (
          <Badge variant={variant} className="ml-1">
            {cell}
          </Badge>
        );
        break;
      default:
        return cell;
        break;
    }
  };

  render() {
    let userList = this.props.users;
    const { t } = this.props;
    let { SearchBar } = Search;

    return (
      <div>
        {console.log("data", userList)}
        <Breadcrumb
          routeSegments={[
            { name: `${t("estimate-table.1")}`, path: "/" },
            { name: `${t("estimate-table.2")}`, path: "mes-biens" },
          ]}
        />

        {/*<div className="row">
          <div className="col-md-12">
            <div className="app-footer">
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="picker1">Type de propriété</label>
                  <select onChange={this.filterEvent} className="form-control ">
                    <option>Tous</option>
                    <option>Maison à étages</option>
                    <option>Maison à un étage et demi</option>
                    <option>Maison de plain-pied</option>
                    <option>Appartement</option>
                  </select>
                </div>
               {/* <div className="col-md-3">
                  <label htmlFor="picker1">Profil du prospect</label>
                  <select
                    className="form-control"
                    onChange={this.filterProspect}
                  >
                    <option>Tous</option>
                    <option>Acheteur</option>
                    <option>Vendeur</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="picker1">Secteur</label>

                  <AlgoliaPlaces
                    className="form-control"
                    placeholder="Inscrire une adresse ici"
                    options={{
                      appId: "plDSJICNC741",
                      apiKey: "89a1934f1d4c7552a50407d841394f19",
                      language: "fr",
                      countries: ["ca"],
                      type: "city",

                      useDeviceLocation: false,
                      // Other options from https://community.algolia.com/places/documentation.html#options
                    }}
                    onChange={({
                      query,
                      rawAnswer,
                      suggestion,
                      suggestionIndex,
                    }) => this.filterSecteur(suggestion, suggestionIndex)}
                    onSuggestions={({ rawAnswer, query, suggestions }) =>
                      console.log(
                        "Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.",
                        suggestions
                      )
                    }
                    onCursorChanged={({
                      rawAnswer,
                      query,
                      suggestion,
                      suggestonIndex,
                    }) =>
                      console.log(
                        "Fired when arrows keys are used to navigate suggestions."
                      )
                    }
                    onClear={() => this.filterSecteur()}
                    onLimit={({ message }) =>
                      console.log(
                        "Fired when you reached your current rate limit."
                      )
                    }
                    onError={({ message }) =>
                      console.log(
                        "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
                      )
                    }
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="picker1">Prix</label>
                  <select className="form-control " onChange={this.filterPrix}>
                    <option>Tous</option>
                    <option value="1">entre 10 000 et 50 000</option>
                    <option value="2">entre 50 000 et 100 000</option>
                    <option value="3">entre 100 000 et 200 000</option>
                    <option value="4">entre 200 000 et 300 000</option>
                    <option value="5">entre 300 000 et 400 000</option>
                    <option value="6">entre 400 000 et 500 000</option>
                    <option value="7">entre 500 000 et 1 000 000</option>
                    <option value="8">entre 1 000 000 et plus</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {this.props.users && (
          <SimpleCard title="">
            {/*<div className="row">
              <AsyncTypeahead
                id="searchTypeHead"
                multiple={true}
                labelKey="display_name"
                isLoading={this.state.isLoading}
                selected={this.state.selected}
                onSearch={this._handleSearch.bind(this)}
                onChange={this._handleChange.bind(this)}
                options={this.state.options}
                placeholder="Search city, ex: tomang or jakarta selatan..."
                renderMenuItemChildren={(option, props, index) => (
                  <div>
                    <span>{option.display_name}</span>
                  </div>
                )}
              />
                </div>*/}

            <div className="row mt-0">
              <Map
                selectedMarker={this.state.selectedMarker}
                q
                markers={userList}
                onClick={this.handleClick}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCd2d_otf6zxLsyj9OVyzJoZVAPiGgpfsY&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `500px` }} />}
                containerElement={
                  <div style={{ height: `500px`, width: `100%` }} />
                }
                mapElement={<div style={{ height: `100%` }} />}
                polygon={this.state.coordinates}
                h
              />
            </div>
            <div className="row white-space-nowrap" style={{ margin: 20 }}>
              <BootstrapTable
                filterPosition="top"
                bootstrap4
                keyField="id"
                data={userList}
                columns={this.sortableColumn(t)}
                defaultSorted={this.defaultSorted}
                pagination={paginationFactory(this.paginationOptions(t))}
                noDataIndication={"Aucune information disponible"}
                wrapperClasses="table-responsive"
                expandableRow={true}
                expandComponent={this.expandComponent}
                selectRow={this.selectRowProp}
              />
            </div>
          </SimpleCard>
        )}
      </div>
    );
  }
}

export default compose(
  withFirestore,
  lifecycle({
    componentDidMount() {},
  }), // or { collection: 'todos' }
  connect((state) => ({
    users: state.firestore.ordered.RapportsEvaluations,
    profile: state.firebase.profile,
  }))
)(withTranslation()(CarteProspection));
