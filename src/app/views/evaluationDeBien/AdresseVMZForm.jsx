import React, { useEffect, useState } from "react";
import { classList } from "@utils";
import AlgoliaPlaces from "algolia-places-react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import ReturnButton from "./ReturnButton";
import Autocomplete from "react-google-autocomplete";
// import { handleOnAddressChange } from "./formulaizeStateUpdater";

const provinces = ["QC", "Québec"];

const validate = (values) => {
  const errors = {};

  if (!values.address.StreetName) {
    errors.address = "L'adresse est requise";
  } else if (!values.address.postcode) {
    errors.address = "Le code postal est requis";
  } else if (provinces.indexOf(values.address.state.short_name) == -1) {
    errors.address =
      "Notre service est limité à la province de Québec seulement";
  }

  return errors;
};

function placeToAddress(place) {
  var address = {};
  if (place.address_components) {
    address.value = place.formatted_address;
    address.latlng = place.geometry && {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    place.address_components.forEach(function (c) {
      switch (c.types[0]) {
        case "street_number":
          address.StreetNumber = c;
          break;
        case "route":
          address.StreetName = c;
          break;
        case "neighborhood":
        case "locality": // North Hollywood or Los Angeles?
          address.city = c.long_name;
          break;
        case "administrative_area_level_1": //  Note some countries don't have states
          address.state = c;
          break;
        case "postal_code":
          address.postcode = c.short_name;
          break;
        case "country":
          address.Country = c;
          break;
        /*
         *   . . .
         */
      }
    });
  }
  return address;
}

const AdresseVMZForm = ({
  // handleOnAdresseChange,
  nextStep,
  previousStep,
  currentStep,
  isActive,
  t,
  location,
  state,
  setState,
  handleOnAdresseChange,
}) => {
  const formik = useFormik({
    initialValues: {
      address: "",
    },
    validate,
    onSubmit: (values) => {
      if (isActive) {
        console.log("AdressVMZForm onSubmit", values.address);
        handleOnAdresseChange(values.address, state, setState);
        nextStep();
      }
    },
  });

  return (
    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-xs-12">
      <form onSubmit={formik.handleSubmit}>
        {/** 
        <AlgoliaPlaces
          className={classList({
            "form-control form-control-lg text-center": true,
            "valid-field": !formik.errors.address,
            "invalid-field": formik.errors.address,
          })}
          placeholder="Inscrire une adresse ici"
          options={{
            appId: "plDSJICNC741",
            apiKey: "89a1934f1d4c7552a50407d841394f19",
            language: "fr",
            countries: ["ca"],
            type: "address",
            useDeviceLocation: false,
            // Other options from https://community.algolia.com/places/documentation.html#options
          }}
          onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
            console.log("AlgoliaPlaces onChange", suggestion);
            formik.setFieldValue("address", suggestion);
          }}
          onSuggestions={({ rawAnswer, query, suggestions }) => {}}
          onCursorChanged={({
            rawAnswer,
            query,
            suggestion,
            suggestonIndex,
          }) => {}}
          onClear={() => {
            console.log("AlgoliaPlaces onClear");
            formik.setFieldValue("address", {});
          }}
          onLimit={({ message }) =>
            console.log("Fired when you reached your current rate limit.")
          }
          onError={({ message }) =>
            console.log(
              "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
            )
          }
        />
*/}
        {console.log("error", formik.errors)}
        <Autocomplete
          defaultValue={location?.value}
          style={{
            backgroundImage: "url(/assets/icons/pin.png)",
            backgroundPosition: "left",
            paddingLeft: "30px",
            backgroundSize: "20px",
            backgroundRepeat: "no-repeat",
          }}
          placeholder="Saisissez l’adresse de la propriété à évaluer..."
          className={classList({
            "form-control form-control-lg text-center": true,
            "valid-field": !formik.errors.address,
            "invalid-field": formik.errors.address,
          })}
          onPlaceSelected={(place) => {
            console.log(place);
            console.log("place to adress", placeToAddress(place));
            formik.setFieldValue("address", placeToAddress(place));
          }}
          types={["address"]}
          componentRestrictions={{ country: "ca" }}
        />
        <div className="text-danger">
          {formik.errors.address ? formik.errors.address : "    "}
        </div>
        <div className="mt-4">
          <Button type="submit" variant="outline-primary">
            {t("Estimate.8")}
          </Button>
        </div>
      </form>
      {/* {currentStep !== 1 && (
        <ReturnButton previousStep={previousStep} isActive={isActive} />
      )} */}
    </div>
  );
};

export default AdresseVMZForm;
