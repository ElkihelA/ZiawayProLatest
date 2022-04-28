import React, { Component } from "react";
import { Button, Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { withRouter } from "react-router-dom";
import LaddaButton from "react-ladda";
import { inscriptionMembre } from "app/redux/actions/LoginActions";
import { updateProfile } from "app/redux/actions/UserActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CurrencyFormat from "react-currency-format";
class FactureView extends Component {
  state = { loading: false };
  subTotalCost = 0;

  componentDidMount(prevProps, prevState, snapshot) {
    console.log("staut", this.props);
    console.log(this.props.item[0].plan.planId);
   
  }

  confirmerInscription = () => {
    
    this.setState({ loading: true });
    
 
    const values = {
      planId: (this.props.item[0].plan.planId !== '') ?this.props.item[0].plan.planId :"gratuit" ,
      customerId: this.props.user.customerId,
    };
    this.props.inscriptionMembre(values);
  };
  render() {
    this.subTotalCost = 0;
    let {
      orderNo,
      clientInfo,
      seller,
      item: invoiceItemList = [],
      status,
      vat,
      date,
    } = this.props;
    console.log(this.props);
    return (
      <div className="invoice-viewer py-16">
        <div id="print-area" className="px-3">
          <div className="mt-3 mb-4 ">
            <h1 className="mb-3 text-18">Confirmation de votre commande</h1>
          </div>
          <div className="row mb-5 border-top ">
            <div className="col-md-12 mt-3">
              <h5 className="font-weight-bold">Facturé à</h5>
              <p>{clientInfo ? clientInfo.displayName : null}</p>
              <span className="white-space-pre-line">
                {clientInfo ? clientInfo.email : null}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 table-responsive">
              <table className="table table-hover mb-4">
                <thead className="bg-gray-300">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Forfait</th>
                    <th scope="col">Prix unitaire</th>
               
                  </tr>
                </thead>
                <tbody>
                  {invoiceItemList.map((item, index) => {
                    this.subTotalCost +=
                      item.plan.plan_unit * item.plan.prix_plan;
                    return (
                      <tr key={index}>
                        <td className="text-capitalize">{index + 1}</td>
                        <td className="text-capitalize">
                          {item.plan.titre_plan}
                        </td>
                        <td className="text-capitalize">
                          <CurrencyFormat
                            value={item.plan.prix_plan}
                            displayType={"text"}
                            isNumericString={true}
                            thousandSeparator={" "}
                            thousandSpacing={"3"}
                            fixedDecimalScale={true}
                            prefix={"$"}
                          />
                        </td>
                     
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="col-md-12">
              <div className="invoice-summary">
                <p>
                  Sous-total:{" "}
                  <span>
              
                    <CurrencyFormat
                      value={this.props.item[0].plan.plan_unit * this.props.item[0].plan.prix_plan}
                      displayType={"text"}
                      isNumericString={true}
                      thousandSeparator={" "}
                      thousandSpacing={"3"}
                      fixedDecimalScale={true}
                      prefix={"$"}
                    />
                  </span>
                </p>
                <p>
                  TPS:
                  <span>
                    <CurrencyFormat
                      value={(
                        (this.props.item[0].plan.plan_unit * this.props.item[0].plan.prix_plan) * 0.05).toFixed(2)}
                      displayType={"text"}
                      isNumericString={true}
                      thousandSeparator={" "}
                      thousandSpacing={"3"}
                      fixedDecimalScale={true}
                      prefix={"$"}
                    />
                  </span>
                </p>
                <p>
                  TVQ:{" "}
                  <span>
                    {" "}
                    <CurrencyFormat
                      value={(
                        (this.props.item[0].plan.plan_unit * this.props.item[0].plan.prix_plan) * 0.09975
                      ).toFixed(2)}
                      displayType={"text"}
                      isNumericString={true}
                      thousandSeparator={" "}
                      thousandSpacing={"3"}
                      fixedDecimalScale={true}
                      prefix={"$"}
                    />
                  </span>
                </p>
                <h5 className="font-weight-bold">
                  Grand Total:
                  <span>
                    <p>
                      <CurrencyFormat
                        value={(
                          this.props.item[0].plan.plan_unit * this.props.item[0].plan.prix_plan+
                          this.props.item[0].plan.plan_unit * this.props.item[0].plan.prix_plan* 0.05 +
                          this.props.item[0].plan.plan_unit * this.props.item[0].plan.prix_plan * 0.09975
                        ).toFixed(2)}
                        displayType={"text"}
                        isNumericString={true}
                        thousandSeparator={" "}
                        thousandSpacing={"3"}
                        fixedDecimalScale={true}
                        prefix={"$"}
                      />
                    </p>
                  </span>
                </h5>
              </div>
            </div>
            <div className="col-md-12">
              <LaddaButton
                className={`btn btn-primary border-0 mr-2 mb-2 btn-lg position-relative`}
                loading={this.state.loading}
                onClick={this.confirmerInscription}
                data-style="expand-right"
              >
                Confirmer l'inscription
              </LaddaButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inscriptionMembre: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  user: state.user,
  secret: state.secret,
});

export default connect(mapStateToProps, { inscriptionMembre, updateProfile })(
  FactureView
);
