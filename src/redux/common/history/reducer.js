import { reducerGenerator } from "../../../util/redux";
import initialState from "./initial-state";
import types from "./type";

const historyActionHandler = guardedInitialState => ({
    [types.GET_HISTORY_LOADING]: state => ({
        ...state,
        status: "loading"
    }),
    [types.GET_HISTORY_ERROR]: state => ({
        ...state,
        status: "error"
    }),
    [types.GET_HISTORY_SUCCESS]: (state, action) => ({
        ...state,
        status: "success",
        history: action.history
    })
});

const reducer = (pageName, pageInitialState) => {
    const guardedInitialState = pageInitialState || initialState;
    return reducerGenerator(
        pageName,
        historyActionHandler(guardedInitialState),
        guardedInitialState
    );
};

export default reducer;
