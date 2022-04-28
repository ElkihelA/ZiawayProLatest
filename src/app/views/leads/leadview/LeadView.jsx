import React, { useEffect, useState } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const dataColOne = [
  { title: "date Creation", data: "2020-12-15" },
  { title: "municipality", data: "Des Châtels" },
  { title: "address", data: "11660 Rue Ravel, Québec, QC G2B 4S3, Canada" },
  { title: "Postal Code", data: "G2B 4S3" },
  { title: "land area", data: "909" },
  { title: "category", data: "UNI" },
  { title: "rooms", data: "3" },
];

const dataColTwo = [
  { title: "genre Proprietes", data: "Single storey house" },
  { title: "year Construction", data: "1984" },
  { title: "type Batiment", data: "Detached (detached)" },
  { title: "Zia Estimation", data: "247782.9375" },
  { title: "Customer Reviews", data: "Top" },
  { title: "parking", data: "0" },
  { title: "baths", data: "2" },
];

export const LeadView = ({ userId }) => {
  const [property, setProperty] = useState(null);
  useFirestoreConnect("estimated_properties");
  const properties = useSelector(
    (state) => state.firestore.ordered.estimated_properties
  );
  console.log(userId, properties);

  useEffect(() => {
    if (properties !== undefined) {
      let filtered = [];
      filtered = properties.filter((property) => property.userID === userId);
      setProperty(filtered);
    }
  }, [properties]);

  return (
    <>
      {property === null ? (
        <div className=" d-flex justify-content-center align-items-center">
          <div className="spinner-bubble spinner-bubble-primary m-5"></div>
        </div>
      ) : property.length === 0 ? (
        <h2>No Lead Found</h2>
      ) : (
        property.map((property) => (
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Date Creation
                </span>
                <span>{property.dateCreation}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Municipality
                </span>
                <span>{property.municipalite}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Address
                </span>
                <span>{property.adresse}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Postal Code
                </span>
                <span>{property.PostalCode}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Land Area
                </span>
                <span>{property.superficieTerrain}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Category
                </span>
                <span>{property.categorie}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Bedrooms
                </span>
                <span>{property.chambres}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Baths
                </span>
                <span>{property.bains}</span>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Construction Year
                </span>
                <span>{property.anneeConstruction}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Building Type
                </span>
                <span>{property.typeBatiment}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Genre Properties
                </span>
                <span>{property.genreProprietes}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Parking
                </span>
                <span>{property.stationnement === 0 ? "yes" : "no"}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Ziaway Estimation
                </span>
                <span>{property.ZiaEstimation}</span>
              </div>
              <div className="d-flex mb-2 ">
                <span className="text-primary font-weight-bold mr-2 text-capitalize">
                  Customer Review
                </span>
                <span>{property.avisClient}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
