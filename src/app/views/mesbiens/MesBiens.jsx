import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Link } from "react-router-dom";
import { Table, Button, Card } from "react-bootstrap";
import { classList } from "@utils";
import swal from "sweetalert2";
import { compose, lifecycle } from "recompose";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";

const collection = "demandeEvaluationProd";

export class MesBiens extends Component {
  state = {
    mesBiens: [
      {
        id: 1,
        type: "unifamiliale",
        adresse: "3289 rue le corbusier",
        estimation: "1 250 000 $",
        alerte: "prix revise a la baisse",
      },
      {
        id: 2,
        type: "condo",
        adresse: "123-03 rue la patate",
        estimation: "249 000 $",
        alerte: "1 client interesse",
      },
      {
        id: 3,
        type: "terrain",
        adresse: "22 nowhere land",
        estimation: "152 000 $",
        alerte: "projet d'amenagement",
      },
      {
        id: 4,
        type: "chalet",
        adresse: "345 rue la detente, elhih",
        estimation: "189 000 $",
        alerte: "augmentation des taxes",
      },
    ],
  };

  render() {
    let { mesBiens = [] } = this.state;
    let { user = [] } = this.props;
    console.log("user", user.slice(0, 3));
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Accueil", path: "/" },
            { name: "Biens estimés", path: "/mes-biens" },
          ]}
        ></Breadcrumb>
        <Link to="#" className="d-flex justify-content-end">
          <Button className="mb-3" variant="primary">
            Ajouter un bien
          </Button>
        </Link>
        <Card elevation={6} className="w-100 overflow-auto">
          <Table style={{ minWidth: 750 }}>
            <thead>
              <tr>
                <th className="pl-sm-24">Type</th>
                <th className="px-0">Adresse</th>
                <th className="px-0">Estimation</th>
                <th className="px-0">Alertes</th>
                <th className="px-0">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mesBiens &&
                mesBiens.map((bien, index) => (
                  <tr key={index}>
                    <td className="pl-sm-24 capitalize" align="left">
                      {bien.type.charAt(0).toUpperCase() + bien.type.slice(1)}
                    </td>
                    <td className="pl-0 capitalize" align="left">
                      {bien.adresse}
                    </td>
                    <td className="pl-0 capitalize" align="left">
                      {bien.estimation}
                    </td>
                    <td className="pl-0 capitalize">
                      <small
                        className={classList({
                          "badge rounded-pill text-white px-8 py-2": true,
                          "bg-success": bien.alerte === "projet d'amenagement",
                          "bg-warning": bien.alerte === "1 client interesse",
                          "bg-danger":
                            bien.alerte === "prix revise a la baisse" ||
                            bien.alerte === "augmentation des taxes",
                        })}
                      >
                        {bien.alerte.charAt(0).toUpperCase() +
                          bien.alerte.slice(1)}
                      </small>
                    </td>
                    <td className="pl-0">
                      <button
                        type="button"
                        className="btn btn-outline-primary mr-3"
                        onClick={() => this.handeViewClick(bien.id)}
                      >
                        Details
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => {
                          swal
                            .fire({
                              title: "Are you sure?",
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              type: "question",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, delete it!",
                              cancelButtonText: "No",
                            })
                            .then((result) => {
                              if (result.value) {
                                this.handleDeleteInvoice(bien);
                              }
                            });
                        }}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default compose(
  withFirestore,
  lifecycle({
    componentDidMount() {
      this.props.firestore.get({ collection });
    },
  }), // or { collection: 'todos' }
  connect(({ firestore }) => ({
    user: firestore.ordered.demandeEvaluationProd,
  }))
)(MesBiens);
