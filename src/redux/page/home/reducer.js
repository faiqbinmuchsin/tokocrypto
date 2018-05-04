import { combineReducers } from "redux";

import cryptosReducerGenerator from "../../common/cryptos";
import balanceReducerGenerator from "../../common/balance";
import historyReducerGenerator from "../../common/history";

const cryptosReducer = cryptosReducerGenerator("home/cryptos");
const balanceReducer = balanceReducerGenerator("home/balance");
const historyReducer = historyReducerGenerator("home/history");

const reducer = combineReducers({
    cryptos: cryptosReducer,
    balance: balanceReducer,
    history: historyReducer,
});

export default reducer;
