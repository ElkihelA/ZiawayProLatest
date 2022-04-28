import React, { useState, useEffect } from "react";
import firebaseAuthService from "../../services/firebase/firebaseAuthService";
import history from "@history.js";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/UserActions";

const EmailVerfied = () => {
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();

  const sendEmail = () => {
    const user = firebaseAuthService.checkAuthStatus((user) => {
      if (user) {
        console.log(user);
        user.sendEmailVerification({
          url: "https://ziaway.ca/dashboard/v0",
        });
      } else {
        console.log("not logged in");
      }
    });
  };

  useEffect(() => {
    const user = firebaseAuthService.checkAuthStatus((user) => {
      if (user.emailVerified === true) {
        history.push("/dashboard/v0");
      }
    });
  }, []);

  return (
    <div
      className="auth-layout-wrap"
      style={{
        backgroundImage: "url(/assets/images/photo-wide-3.jpg)",
      }}
    >
      <div className="auth-content ">
        <div className="card o-hidden col-md-11 mx-auto">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 text-center ">
                  <div className="p-3 p-sm-4 p-md-5">
                    <div className="d-flex mr-auto">
                      <button
                        className="btn btn-rounded btn-outline-primary btn-outline-email  btn-icon-text"
                        onClick={() => dispatch(logoutUser())}
                      >
                        Go Back
                      </button>
                    </div>
                    <div className="auth-logo text-center mt-4">
                      <img
                        style={{ width: 80, height: 80 }}
                        className="d-block mx-auto"
                        src="/assets/images/logo-2.png"
                        alt=""
                      />
                    </div>
                    <h1
                      className="mt-3"
                      style={{ color: "#663399", paddingBottom: "10px" }}
                    >
                      VOUS Y ÊTES
                    </h1>
                    {/* <h3>TU ES PRESQUE LÀ!</h3> */}
                    <p className="font-weight-bold">
                      Pour accéder à votre évaluation, il vous suffit de valider
                      le courriel qui vient de vous être envoyé par{" "}
                      <span style={{ color: "#663399", fontSize: "20px" }}>
                        Ziaway.ca
                      </span>
                      .
                    </p>
                    <p className="font-weight-bold">
                      Vous ne trouvez pas votre courriel de confirmation ? Merci
                      de vérifier si vous ne l’avez pas reçu parmi vos
                      « courriers indésirables ou spam ».
                    </p>

                    <h5 className="mt-2 font-weight-bold">OU ALORS</h5>

                    <div className="px-0 col-12 col-md-6 col-lg-5 mx-auto mb-4">
                      {/* <p>Enter Your Email to send verification link again</p>
                      <div className="form-group">
                        <input
                          className="form-control form-control-rounded w-30"
                          type="text"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div> */}
                      <button
                        className="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"
                        onClick={sendEmail}
                      >
                        {" "}
                        Renvoyer le courriel d'identification
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerfied;
