import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./style.scss"
import { createSubscription, setSubscriptionData } from "app/redux/actions/SubscriptionActions";
import { Loading } from "@gull";
import { useFormik } from "formik";
import * as yup from "yup";
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
    const { subscription = {}, dispatch } = props
    const [error, setError] = useState(false)
    const stripe = useStripe();
    const elements = useElements();

    const formik = useFormik({
        initialValues: {name: ''},
        validationSchema: validationSchema,
        onSubmit: (values) => {
            submitPayment(values)
        },
    });

    const submitPayment = async (values) => {
        if (!stripe || !elements) {
            return;
        }
        setError(false)
        dispatch(setSubscriptionData({ loading: true }));
        const cardElement = elements.getElement(CardNumberElement);
        const { token, error } = await stripe.createToken(cardElement)
        if (error) {
            console.log('[error]', error);
            setError(error.message);
            dispatch(setSubscriptionData({ loading: true }));
        } else {
            console.log('[PaymentMethod]', token);
            dispatch(createSubscription({source: token.id, plan: subscription.plan, user: subscription.current, cardName: values.name}, props.goToStep))
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
                        
                        <div className="cardNubmer mb-3">
                            <CardNumberElement options={ELEMENT_OPTIONS} />
                        </div>
                        <div className="cvc-data-container">
                            <CardExpiryElement options={ELEMENT_OPTIONS} />
                            <CardCvcElement options={ELEMENT_OPTIONS} />
                        </div>
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
}
const mapStateToProps = (state) => ({
    subscription: state.subscription
})
export default connect(mapStateToProps)(Payment)