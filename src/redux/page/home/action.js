import { cryptosActions as cryptosActionsGenerator } from "../../common/cryptos";
import { balanceActions as balanceActionsGenerator } from "../../common/balance";

import CryptosAPI from "../../../api/cryptos";
import BalanceAPI from "../../../api/balance";

const cryptosActions = cryptosActionsGenerator("home/cryptos");
const balanceActions = balanceActionsGenerator("home/balance");

const getCryptos = () => dispatch => {
    dispatch(cryptosActions.getCryptosLoading());
    return CryptosAPI.getCryptos()
        .then(response => {
            dispatch(cryptosActions.getCryptosSuccess(response));
        })
        .catch(err => {
            dispatch(cryptosActions.getCryptosError());
        });
};

const getBalance = () => dispatch => {
    dispatch(balanceActions.getBalanceLoading());
    return BalanceAPI.getBalance()
        .then(response => {
            dispatch(balanceActions.getBalanceSuccess(response));
        })
        .catch(err => {
            dispatch(balanceActions.getBalanceError());
        });
};

export default {
    ...cryptosActions,
    ...balanceActions,
    getCryptos,
    getBalance
};
