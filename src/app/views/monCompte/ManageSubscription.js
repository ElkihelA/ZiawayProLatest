import React, {useEffect} from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { manageSubscription, getUserSubscriptionDetails } from "app/redux/actions/UserActions";
import { Loading } from "@gull";

const ManageSubscription = (props) => {
  const { loading = false, account = {}, profile = {} } = props
  useEffect(() => {
    if(profile.id){
      props.getUserSubscriptionDetails();
    }
  }, [profile])
  return (
    <div>
      {loading && <Loading /> }
      <h4 className="pt-2 text-capitalize mb-0">Manage your subscription</h4>
      {account.id &&
      <div>
        <p>Infos about your subscription</p>
        <ul>
          <li>Plan: <b>{account.planName}</b></li>
          {account.amount && <li>Amount: <b>{new Intl.NumberFormat('us-US', { maximumFractionDigits: 2 }).format(account.amount/100)}$</b></li>}
          {account.subscriptionCurrentPeriodEnd && <li>Next Invoice: <b>{new Date(account.subscriptionCurrentPeriodEnd * 1000).toISOString()}</b></li>}
        </ul>
      </div>}
      <p>
        If you want to upgrade, downgrade, cancel or pause your subscription, please click on Manage Subscription Button below
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div className="col-12 col-md-4 col-lg-2">
        <button 
          onClick={() => props.manageSubscription()}
          disabled={loading}
          className="btn btn-primary btn-block text-capitalize">
          Manage Subscription {loading && "..."}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
  loading: state.user.loading,
  account: state.user.account
});

const mapStateToDispatch = {
  manageSubscription,
  getUserSubscriptionDetails
}
export default connect(mapStateToProps, mapStateToDispatch)(withTranslation()(ManageSubscription));

