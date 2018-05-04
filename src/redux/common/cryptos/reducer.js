import { reducerGenerator } from "../../../util/redux";
import initialState from "./initial-state";
import types from "./type";

const cryptosActionHandler = guardedInitialState => ({
    [types.GET_CRYPTOS_LOADING]: state => ({
        ...state,
        status: "loading"
    }),
    [types.GET_CRYPTOS_ERROR]: state => ({
        ...state,
        status: "error"
    }),
    [types.GET_CRYPTOS_SUCCESS]: (state, action) => ({
        ...state,
        status: "success",
        cryptos: action.cryptos
        // image: [...state.image, ...action.image]
    })
});

const reducer = (pageName, pageInitialState) => {
    const guardedInitialState = pageInitialState || initialState;
    return reducerGenerator(
        pageName,
        cryptosActionHandler(guardedInitialState),
        guardedInitialState
    );
};

export default reducer;
