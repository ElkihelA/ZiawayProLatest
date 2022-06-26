import React, { useState} from "react";
import { Tab, Nav } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { connect } from "react-redux";
import {
  getAllPlans,
  setSubscriptionData,
} from "../../../redux/actions/SubscriptionActions";
import { Loading } from "@gull";
import { withRouter } from "react-router-dom";

const PlansList = ({ subscription = {}, dispatch, location = {}, ...props }) => {
  const { loading = true, plans = {} } = subscription;
  const [period, setPeriod] = useState("month");
  React.useEffect(() => {
    const search = location.search;
    if(search && search.includes("?selected-plan-id=")) {
      dispatch(getAllPlans(search.split("?selected-plan-id=")[1]))
    } else {
      dispatch(getAllPlans());
    }
  }, []);

  const selectOffer = (plan) => {
    dispatch(setSubscriptionData({ plan }));
    props.nextStep();
  };
  return (
    <>
      {loading && <Loading />}
      <SimpleCard>
        <Tab.Container id="left-tabs-example" defaultActiveKey={period}>
          <Nav variant="pills" className="px-2 d-flex justify-content-center mb-5">
            <Nav.Item className="mr-2" onClick={() => setPeriod("week")}>
              <Nav.Link eventKey="week">Weekly</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-2" onClick={() => setPeriod("month")}>
              <Nav.Link eventKey="month">Monthly</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => setPeriod("year")}>
              <Nav.Link eventKey="year">Yearly</Nav.Link>
            </Nav.Item>
          </Nav>
          {plans && (
            <Tab.Content>
              <>
                {Object.entries(plans).map((elem) => {
                  return (
                    <Tab.Pane eventKey={elem[0]}>
                      <div className="row">
                        {elem[1].map((item, idx) => {
                          return (
                            <div
                              key={idx}
                              className={`col-md-12 col-lg-4 col-xl-4 ul-pricing__table-2 ${item.name === 'Performance' && item.interval === 'month' ? 'ul-pricing__table-2_selected':''}`}
                            >
                                {item.image && (
                                  <div className="ul-pricing__image text-primary m-0">
                                    <img style={{width: 100}} src={item.image} alt="price" />
                                  </div>
                                )}
                                <div className="ul-pricing__title">
                                  <h2 className="heading text-primary">
                                    {item.name}
                                  </h2>
                                </div>
                                {item.trial_period_days && (
                                  <div className="ul-pricing__text text-mute">
                                    {item.trial_period_days} jours d'essai gratuit
                                    period
                                  </div>
                                )}
                                <div className="ul-pricing__main-number">
                                  <h3 className="heading text-primary">
                                    $
                                    {new Intl.NumberFormat("us-US", {
                                      maximumFractionDigits: 2,
                                    }).format(item.amount / 100)}
                                  </h3>
                                  <div className="ul-pricing__month">
                                    <small className="text-purple-100">
                                      per {period}
                                    </small>
                                  </div>
                                </div>
                                {item.metadata.map((meta, index) => {
                                    return (
                                        <div key={index} className={`ul-pricing__list${meta.enabled === 'true' ? '':'_disabled'}`}>
                                            <h4 className={`heading text-primary`}>{meta.key}</h4>
                                            <div className="ul-pricing__table-listing mb-4">
                                                <ul>
                                                    {meta.value.map(val => (
                                                        <li key={val} className="t-font-bolder">{val}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })}
                                <button
                                  type="button"
                                  className="btn btn-lg btn-default btn-rounded btn-primary m-1"
                                  onClick={() => selectOffer(item)}
                                >
                                  Select Offer
                                </button>
                            </div>
                          );
                        })}
                      </div>
                    </Tab.Pane>
                  );
                })}
              </>
            </Tab.Content>
          )}
        </Tab.Container>
      </SimpleCard>
    </>
  );
};
const mapStateProps = (state) => ({
  subscription: state.subscription,
});
export default withRouter(connect(mapStateProps)(PlansList));
