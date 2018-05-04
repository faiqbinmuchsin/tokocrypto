import { reducerGenerator } from "../../../util/redux";
import initialState from "./initial-state";
import types from "./type";

const balanceActionHandler = guardedInitialState => ({
    [types.GET_BALANCE_LOADING]: state => ({
        ...state,
        status: "loading"
    }),
    [types.GET_BALANCE_ERROR]: state => ({
        ...state,
        status: "error"
    }),
    [types.GET_BALANCE_SUCCESS]: (state, action) => ({
        ...state,
        status: "success",
        balance: action.balance
    })
});

const reducer = (pageName, pageInitialState) => {
    const guardedInitialState = pageInitialState || initialState;
    return reducerGenerator(
        pageName,
        balanceActionHandler(guardedInitialState),
        guardedInitialState
    );
};

export default reducer;
