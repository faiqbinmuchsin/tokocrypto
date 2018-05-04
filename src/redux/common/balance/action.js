import { typeGenerator, actionCreatorGenerator } from "../../../util/redux";
import types from "./type";

const getBalanceLoading = name => () => ({
    type: typeGenerator(name, types.GET_BALANCE_LOADING)
});

const getBalanceSuccess = name => balance => ({
    type: typeGenerator(name, types.GET_BALANCE_SUCCESS),
    balance
});

const getBalanceError = name => () => ({
    type: typeGenerator(name, types.GET_BALANCE_ERROR)
});

const action = (pageName, params) =>
    actionCreatorGenerator(
        pageName,
        {
            getBalanceLoading,
            getBalanceSuccess,
            getBalanceError
        },
        params
    );

export default action;
