import { typeGenerator, actionCreatorGenerator } from "../../../util/redux";
import types from "./type";

const getHistoryLoading = name => () => ({
    type: typeGenerator(name, types.GET_HISTORY_LOADING)
});

const getHistorySuccess = name => history => ({
    type: typeGenerator(name, types.GET_HISTORY_SUCCESS),
    history
});

const getHistoryError = name => () => ({
    type: typeGenerator(name, types.GET_HISTORY_ERROR)
});

const action = (pageName, params) =>
    actionCreatorGenerator(
        pageName,
        {
            getHistoryLoading,
            getHistorySuccess,
            getHistoryError
        },
        params
    );

export default action;
