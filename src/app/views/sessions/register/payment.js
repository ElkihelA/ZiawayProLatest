import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./style.scss"
import { createSubscription, setSubscriptionData } from "app/redux/actions/SubscriptionActions";
import { Loading } from "@gull";
import DropDown from "react-dropdown-select";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import styled from "@emotion/styled";
import * as yup from "yup";
import axios from "axios";
import DropdownList from "react-widgets/DropdownList";

const ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: '18px',
            color: '#424770',
            letterSpacing: '0.025em',
            height: "50px",
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: "5px",
            '::placeholder': {
                color: '#e3e3e3',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
};

const validationSchema = (t) =>
    yup.object().shape({
        name: yup.string().required("Please put the name on card"),
    });

function Payment(props) {
    const { subscription = {}, dispatch } = props;
    const {t} = useTranslation();
    const [error, setError] = useState(false);
    const [brokers, setBrokers] = useState([]);
    const [selectData, setSelectData] = useState([]);
    const [searchV, setSearchV] = useState();
    const stripe = useStripe();
    const elements = useElements();

    const formik = useFormik({
        initialValues: {name: ''},
        validationSchema: validationSchema,
        onSubmit: (values) => {
            submitPayment(values)
        },
    });

    useEffect(() => {
        axios
        .get("https://us-central1-ziaapp-ac0eb.cloudfunctions.net/GetAllBrokers")
        .then((res) => {
            setBrokers(res.data);
        })
      .catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        if(elements) {
            elements.getElement(CardNumberElement).on('change', event => {
                if(event.error) {
                    document.getElementById('CardNumberElementERROR').textContent = event.error.message;
                } else{
                    document.getElementById('CardNumberElementERROR').textContent = '';
                } 
            })
            elements.getElement(CardCvcElement).on('change', event => {
                if(event.error) {
                    document.getElementById('CardCvcElementERROR').textContent = event.error.message;
                } else{
                    document.getElementById('CardCvcElementERROR').textContent = '';
                } 
            });
            elements.getElement(CardExpiryElement).on('change', event => {
                if(event.error) {
                    document.getElementById('CardExpiryElementERROR').textContent = event.error.message;
                } else{
                    document.getElementById('CardExpiryElementERROR').textContent = '';
                } 
            });
        }
    }, [elements])

    const brokerSelected = (v)  => {
        setSearchV(v);
        document.getElementById("BorkerERROR").textContent = "";
    }

    const submitPayment = async (values) => {
        if (!stripe || !elements) {
            return;
        }
        if(!searchV) {
            document.getElementById("BorkerERROR").textContent = "Please Select Your License Id";
            return;
        }
        setError(false)
        dispatch(setSubscriptionData({ loading: true }));
        const cardElement = elements.getElement(CardNumberElement);
        const { token, error } = await stripe.createToken(cardElement);
        if (error) {
            console.log('[error]', error);
            setError(error.message);
            dispatch(setSubscriptionData({ loading: false }));
        } else {
            console.log('[PaymentMethod]', token);
            dispatch(createSubscription({source: token.id, plan: subscription.plan, user: subscription.current, cardName: values.name, licenseId: searchV.numeroPermis}, props.goToStep, t))
        }

    };
    return (
        <>
            {subscription.loading && <Loading /> }
            <div className="row p-3 payment-form">
                <div className="col-md-6">
                    Some additional informations
                </div>
                <div className="col-md-6">
                    {formik && <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                                <label htmlFor="name">
                                    Name On Card*
                                </label>
                                <input
                                    className="form-control form-control-rounded"
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <div className="text-danger mt-1 ml-2">
                                        {formik.errors.name}
                                    </div>
                                )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="licenseId">License No*</label>
                            <DropdownList
                                data={brokers}
                                textField='numeroPermis'
                                dataKey='numeroPermis'
                                onSelect={brokerSelected}
                                />
                            <div className="text-danger mt-1 ml-2" id="BorkerERROR" />
                        </div>
                        
                        <div className="cardNubmer mb-3">
                            <CardNumberElement options={ELEMENT_OPTIONS} />
                            <div className="text-danger mt-1 ml-2" id="CardNumberElementERROR" />
                        </div>
                        <div className="cvc-data-container">
                            <CardExpiryElement options={ELEMENT_OPTIONS} />
                            <CardCvcElement options={ELEMENT_OPTIONS} />
                        </div>
                        <div className="text-danger mt-1 ml-2" id="CardExpiryElementERROR" />
                        <div className="text-danger mt-1 ml-2" id="CardCvcElementERROR" />
                        <div>
                            <button
                                className="btn btn-primary btn-block btn-rounded mt-3"
                                onClick={submitPayment}
                                disabled={subscription.loading}
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>}
                </div>
            </div></>
    )
};
const Items = styled.div`
  overflow: auto;
  min-height: 10px;
  max-height: 200px;
`;

const Item = styled.div`
  display: flex;
  margin: 10px;
  align-items: baseline;
  cursor: pointer;
  border-bottom: 1px dotted transparent;

  :hover {
    border-bottom: 1px dotted #ccc;
  }

  ${({ disabled }) =>
    disabled
      ? `
  	opacity: 0.5;
  	pointer-events: none;
  	cursor: not-allowed;
  `
      : ""}
`;

const ItemLabel = styled.div`
  margin: 5px 10px;
`;


const dropdownRenderer = ({ props, state, methods }) => {
    const regexp = new RegExp(state.search, "i");
    return (
      <Items>
            {props.options
              .filter(item =>
                regexp.test(item[props.searchBy] || item[props.labelField])
              ).slice(0,3)
              .map(option => {
                return (
                  <Item
                    key={option[props.valueField]}
                    onClick={() => methods.addItem(option)}
                  >
                    <ItemLabel>{option[props.label]}</ItemLabel>
                  </Item>
                );
              })}
      </Items>
    )
  }
const mapStateToProps = (state) => ({
    subscription: state.subscription
})
export default connect(mapStateToProps)(Payment)