import { typeGenerator, actionCreatorGenerator } from "../../../util/redux";
import types from "./type";

const getCryptosLoading = name => () => ({
    type: typeGenerator(name, types.GET_CRYPTOS_LOADING)
});

const getCryptosSuccess = name => cryptos => ({
    type: typeGenerator(name, types.GET_CRYPTOS_SUCCESS),
    cryptos
});

const getCryptosError = name => () => ({
    type: typeGenerator(name, types.GET_CRYPTOS_ERROR)
});

const action = (pageName, params) =>
    actionCreatorGenerator(
        pageName,
        {
            getCryptosLoading,
            getCryptosSuccess,
            getCryptosError
        },
        params
    );

export default action;
