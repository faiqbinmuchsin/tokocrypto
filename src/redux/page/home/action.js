import { cryptosActions as cryptosActionsGenerator } from "../../common/cryptos";
import { balanceActions as balanceActionsGenerator } from "../../common/balance";
import { historyActions as historyActionsGenerator } from "../../common/history";

import CryptosAPI from "../../../api/cryptos";
import BalanceAPI from "../../../api/balance";
import HistoryAPI from "../../../api/history";

const cryptosActions = cryptosActionsGenerator("home/cryptos");
const balanceActions = balanceActionsGenerator("home/balance");
const historyActions = historyActionsGenerator("home/history");

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

const getHistory = () => dispatch => {
    dispatch(historyActions.getHistoryLoading());
    return HistoryAPI.getHistory()
        .then(response => {
            dispatch(historyActions.getHistorySuccess(response));
        })
        .catch(err => {
            dispatch(historyActions.getHistoryError());
        });
};

export default {
    ...cryptosActions,
    ...balanceActions,
    ...historyActions,
    getCryptos,
    getBalance,
    getHistory
};
