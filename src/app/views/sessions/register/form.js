import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useDispatch, connect} from "react-redux";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { createNewAccount } from "../../../redux/actions/SubscriptionActions";
import { googleLogin, facebookLogin } from "app/redux/actions/LoginActions";
import { Loading } from "@gull";

import DangerAlert from "../DangerAlert";
import { useTranslation } from "react-i18next";
import { useFormik } from 'formik';
import GoogleLogin from "react-google-login";
import axios from "axios";
import Select from "react-select";


const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const SignupSchema = (t) =>
    yup.object().shape({
        username: yup.string().required("Le nom et prénom sont obligatoire"),
        phoneNumber: yup
            .string()
            .required("Le numéro de téléphone est requis")
            .matches(
                phoneRegExp,
                "Format non valide, XXX-XXX-XXXX est le bon format"
            ),
        email: yup
            .string()
            .email("E-mail invalide")
            .required("L'E-mail est requis"),
        password: yup
            .string()
            .min(8, "Le mot de passe doit contenir au minimum 8 caractères")
            .required("Le mot de passe est requis"),
        repassword: yup
            .string()
            .required("Répéter le mot de passe")
            .oneOf([yup.ref("password")], "Les mots de passe ne concordent pas"),

        acceptTerms: yup.bool().oneOf([true], "Sign_in.21"),
    });
const initialValues = {
    email: "",
    username: "",
    password: "",
    repassword: "",
    plan: "",
    policy: false,
    acceptTerms: false,
}
function Signup(props) {
    const { t } = useTranslation();
    const {subscription = {}} = props
    const [error, setError] = useState(false)
    const dispatch = useDispatch();
    const { goToStep } = props;
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            dispatch(createNewAccount(values, goToStep))
        },
    });

    const responseGoogle = (resp) => {
        props.googleLogin(t, resp, goToStep, true)
    }

    const responseFacebook = (resp) => {
        props.facebookLogin(t, resp, goToStep, true);
    }

    return (
        <>
            {subscription.loading && <Loading />}
            <div className="row">
                <div
                    className="col-md-6 text-center "
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: "url(/assets/images/photo-long-3.jpg)",
                    }}
                >
                    <div className="pl-3 auth-right">
                        <div className="auth-logo text-center mt-4">
                            <img src="/assets/images/logo.png" alt="" />
                        </div>
                        <div className="flex-grow-1"></div>
                        <div className="w-100 mb-4">
                            <Link
                                to="/session/signin"
                                className="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"
                            >
                                <i className="i-Mail-with-At-Sign"></i>{" "}
                                {t("Sign_up.1")}
                            </Link>
                        </div>
                        <GoogleLogin
                            clientId={"224379580293-ph903a84q69uobrocoemkoh3u5at2td6.apps.googleusercontent.com"}
                            onSuccess={responseGoogle}
                            onFailure={(err) => {
                            console.log(err);
                            }}
                            render={props => (
                            <Button
                                onClick={props.onClick}
                                className="btn btn-rounded btn-outline-google btn-block btn-icon-text"
                            >
                                <i className="i-Google-Plus"></i> {t("Sign_up.15")}
                            </Button>
                            )}
                        />
                        <FacebookLogin
                        appId={"448032760458177"}
                        callback={responseFacebook}
                        fields="name,email,picture"
                        scope="public_profile, email"
                        render={(renderProps) => (
                            <Button
                              onClick={renderProps.onClick}
                              className="btn btn-rounded btn-block btn-icon-text btn-outline-facebook"
                            >
                              <i className="i-Facebook-2"></i> {t("Sign_in.16")}
                            </Button>
                        )}
                      />
                        <div className="flex-grow-1"></div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4">
                        <h1 className="mb-3 text-18">{t("Sign_up.2")}</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">
                                    {t("Sign_up.3")}*
                                </label>
                                <input
                                    className="form-control form-control-rounded"
                                    name="username"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                />
                                {formik.errors.username && formik.touched.username && (
                                    <div className="text-danger mt-1 ml-2">
                                        {formik.errors.username}
                                    </div>
                                )}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="phoneNumber">
                                    {t("Sign_up.12")}*
                                </label>
                                <input
                                    className="form-control form-control-rounded"
                                    name="phoneNumber"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phoneNumber}
                                />
                                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                    <div className="text-danger mt-1 ml-2">
                                        {formik.errors.phoneNumber}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    {t("Sign_up.4")}*{" "}
                                </label>
                                <input
                                    name="email"
                                    className="form-control form-control-rounded"
                                    type="email"
                                    data-deltad-checkmail="1"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <div className="text-danger mt-1 ml-2">
                                        {formik.errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    {t("Sign_up.5")}*
                                </label>
                                <input
                                    name="password"
                                    className="form-control form-control-rounded"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <div className="text-danger mt-1 ml-2">
                                        {formik.errors.password}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="repassword">
                                    {t("Sign_up.6")}*
                                </label>
                                <input
                                    name="repassword"
                                    className="form-control form-control-rounded"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.repassword}
                                />
                                {formik.errors.repassword && formik.touched.repassword && (
                                    <div className="text-danger mt-1 ml-2">
                                        {formik.errors.repassword}
                                    </div>
                                )}
                            </div>
                            <div className="col-sm-10">
                                <DangerAlert
                                    show={error}
                                    error={error}
                                ></DangerAlert>
                            </div>
                            <div style={{ paddingLeft: "22px" }}>
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    onChange={formik.handleChange}
                                    checked={formik.values.acceptTerms}
                                    className={
                                        "form-check-input " +
                                        (formik.errors.acceptTerms && formik.touched.acceptTerms
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <label
                                    htmlFor="acceptTerms"
                                    className="form-check-label"
                                >
                                    {t("Sign_in.13")} <br />
                                    <a
                                        href="https://blog.ziaway.ca/politique-de-confidentialit%C3%A9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t("Sign_in.14")}
                                    </a>
                                </label>
                            </div>
                            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                                <small className="text-danger mt-1 ml-2">
                                    {t(formik.errors.acceptTerms)}
                                </small>
                            )}
                            <button
                                className="btn btn-primary btn-block btn-rounded mt-3"
                                type="submit"
                                // disabled={formik.isSubmitting && !error}
                            >
                                {subscription.isSubmitting && !error ? (
                                    <span>{t("Sign_up.7")}...</span>
                                ) : (
                                    <span>{t("Sign_up.8")}</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    subscription: state.subscription
});


export default connect(mapStateToProps,{
    googleLogin,
    facebookLogin
})(Signup)