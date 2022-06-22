import React, {
  Component,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  KmlLayer,
  Polygon,
} from "react-google-maps";
import { Badge, Row, Col } from "react-bootstrap";
import { FaBed, FaBath, FaDollarSign } from "react-icons/fa";
import CurrencyFormat from "react-currency-format";

const Map = compose(
  withScriptjs,
  withGoogleMap
)((props) => {
  const [path, setPath] = useState([
    { lat: 46.52549080781086, lng: -74.398118538856465 },
    { lat: 46.48578559055679, lng: -74.36653284549709 },
    { lat: 46.48871246221608, lng: -74.44618372440334 },
  ]);
  const [options, setOptions] = useState();
  const [isloading, setIsloading] = useState(false);

  //Fonction a refaire trop harcodé
  const urlSetter = (data) => {
    if (data.ouiContacterParProfessionnel === "oui") {
      return { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" };
    } else {
      return {
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      };
    }
  };

  const getUrlIcon = (raison, proprietaire) => {
    switch (raison) {
      case "Je souhaite connaître sa valeur":
        return {
          url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
        };

        break;
      case "Je souhaite acheter pour investir":
      case "Je souhaite acheter pour habiter":
        return {
          url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
        };

        break;
      case "Non, je viens de le vendre":
      case "Non, je n'ai pas de projet de vente":
        return { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" };
        break;
      case "Je souhaite vendre":
      case "Oui, d'ici 6 mois":
      case "Oui, dès que possible":
      case "Oui, d'ici 3 mois":
      case "Oui, dans plus de 6 mois":
      case "Oui, j'ai déjà commencé la vente":
        let variant = "primary";
        if (proprietaire) {
          return {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
          };
        } else {
          return {
            url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
          };
        }

        break;
      default:
        return { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" };
        break;
    }
  };

  return (
    <div>
      {console.log("markers", props?.markers)}
      <GoogleMap
        defaultZoom={7}
        defaultCenter={{ lat: 46.1908572, lng: -74.5489687 }}
      >
        <KmlLayer
          url="https://www.donneesquebec.ca/recherche/fr/dataset/8dba5a63-49b2-4d20-8333-f99df764ce10/resource/d7166ada-eb9d-413f-9d12-f019402eb950/download/vdq-reseaucyclable.kml"
          options={{ preserveViewport: true }}
        />

        <Polygon
          // Make the Polygon editable / draggable
          editable
          draggable
          path={props.polygon}
        />
        {props?.markers?.map((marker) => {
          const onClick = props.onClick.bind(this, marker);
          return (
            <Marker
              key={marker.id}
              onClick={onClick}
              icon={urlSetter(marker)}
              position={{
                lat: marker.location.latlng.lat,
                lng: marker.location.latlng.lng,
              }}
            >
              {props.selectedMarker === marker && (
                <InfoWindow>
                  <div className="card-body">
                    <h5 className="mt-1">
                      {" "}
                      <Badge variant="primary" className="">
                        {marker.genreProprietes}
                      </Badge>
                      <Badge variant="warning" className="ml-1">
                        {marker.anneeConstruction}
                      </Badge>
                    </h5>
                    <p style={{ maxWidth: 300 }} className="card-text">
                      {/* {marker.location.value} */}
                      {marker?.location?.StreetName?.short_name},{" "}
                      {marker?.location?.city},{" "}
                      {marker?.location?.state?.short_name}{" "}
                      {marker?.location?.postcode},{" "}
                      {marker?.location?.Country?.long_name}
                    </p>
                    <Row className="mt-1">
                      <Col xs={1}>
                        <FaBed />
                      </Col>
                      <Col xs={2}>{marker.chambres}</Col>
                      <Col xs={1}>
                        <FaBath />
                      </Col>
                      <Col xs={2}>{marker.bains}</Col>
                    </Row>
                    <Row className="mt-3">
                      <Col xs={5}>
                        <h6>Estimation : </h6>
                      </Col>
                      <Col xs={7}>
                        <CurrencyFormat
                          value={marker.ziaEstimation.prediction.toFixed(0)}
                          displayType={"text"}
                          isNumericString={true}
                          thousandSeparator={" "}
                          thousandSpacing={"3"}
                          fixedDecimalScale={true}
                          prefix={"CAD "}
                        />
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col className="mt-1" xs={12}>
                        <Link to={"/vmz/" + marker.id} className="card-link">
                          Voir la fiche
                        </Link>
                      </Col>
                    </Row> */}
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })}
      </GoogleMap>
    </div>
  );
});

export default Map;
