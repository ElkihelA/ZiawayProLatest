import "../fake-db";
import React, { Suspense, useEffect, useState } from "react";

import "../styles/app/app.scss";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import AppContext from "./appContext";
import history from "@history";
import firebase from "./services/firebase/firebase";
import routes from "./RootRoutes";
import { Store } from "./redux/Store";
import { renderRoutes } from "react-router-config";
import Auth from "./auth/Auth";
import RootRoutes from "./RootRoutes";
import { Loading } from "@gull";
import { createFirestoreInstance } from "redux-firestore";
import Landing from "./views/landing/landing";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./views/pages/home/components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import AcceptCallModal from "../app/views/videoCall/AcceptCallModal";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: Store.dispatch,
  createFirestoreInstance,
};

const CallingTest = () => {
  const [call, setCall] = useState(false);
  const profile = useSelector((state) => state.firebase.profile.email);
  const Meetings = useSelector((state) => state.firestore.ordered.Meetings);
  console.log("app", profile);
  useFirestoreConnect([
    {
      collection: "Meetings",
      // where: ["RecieverEmail", "==", profile],
    },
  ]);
  useEffect(() => {
    if (Meetings && Meetings.length !== 0 && profile) {
      console.log("meeting Started", Meetings);
      if (Meetings.some((v) => v.RecieverEmail === profile)) {
        setCall(true);
      }
    }
  }, [Meetings, profile]);

  return <AcceptCallModal show={call} setShow={setCall} data={Meetings} />;
};

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("sp");
  }, []);

  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          {/* <Router history={history}>
            <ScrollToTop />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/contact" component={ContactUsPage} />
            <Route exact path="/faq" component={FaqPage} />
          </Router> */}
          <Router history={history}>
            <Auth>
              <Suspense fallback={<Loading></Loading>}>
                  <ScrollToTop />
                  <ToastContainer />
                  <CallingTest />
                  <Route exact path="/landing" component={Landing} />
                  {renderRoutes(RootRoutes)}
              </Suspense>
            </Auth>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
