import { actions } from "../actions/SubscriptionActions";

const initialState = {
    step: 1,
    current: {},
    plans: [],
    loading: false
};

const SubscriptionReducer = function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_STATE: {
            return { ...state, ...action.payload }
        }
        default: {
            return state;
        }
    }
};

export default SubscriptionReducer;
