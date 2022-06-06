import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import {
  manageSubscription,
  getUserSubscriptionDetails,
} from "app/redux/actions/UserActions";
import { Loading } from "@gull";

const ManageSubscription = (props) => {
  const { loading = false, account = {}, profile = {}, t } = props;
  useEffect(() => {
    if (profile.id) {
      props.getUserSubscriptionDetails();
    }
  }, [profile]);
  return (
    <div>
      {loading && <Loading />}
      <h4 className="pt-2 text-capitalize mb-0">{t('profile.subscription.subtitle')}</h4>
      {account.id && (
        <div>
          <ul>
            <li>
                {t('profile.subscription.plan')}: <b>{account.planName}</b>
            </li>
            {account.amount && (
              <li>
                  {t('profile.subscription.amount')}:{" "}
                <b>
                  {new Intl.NumberFormat("us-US", {
                    maximumFractionDigits: 2,
                  }).format(account.amount / 100)}
                  $
                </b>
              </li>
            )}
            {account.subscriptionCurrentPeriodEnd && (
              <li>
                  {t('profile.subscription.next_invoice')}:{" "}
                <b>
                  {new Date(
                    account.subscriptionCurrentPeriodEnd * 1000
                  ).toISOString()}
                </b>
              </li>
            )}
          </ul>
        </div>
      )}
      <p style={{whiteSpace: 'pre-line'}}>
        {t('profile.subscription.description')}
      </p>
      <div className="">
        {account.id && <button
          onClick={() => props.manageSubscription()}
          disabled={loading}
          className="btn btn-primary btn-block text-capitalize"
        >
          {t('profile.subscription.manage')} {loading && "..."}
        </button>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile,
  loading: state.user.loading,
  account: state.user.account,
});

const mapStateToDispatch = {
  manageSubscription,
  getUserSubscriptionDetails,
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(withTranslation()(ManageSubscription));
