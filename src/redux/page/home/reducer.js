import { combineReducers } from "redux";

import cryptosReducerGenerator from "../../common/cryptos";
import balanceReducerGenerator from "../../common/balance";

const cryptosReducer = cryptosReducerGenerator("home/cryptos");
const balanceReducer = balanceReducerGenerator("home/balance");

const reducer = combineReducers({
    cryptos: cryptosReducer,
    balance: balanceReducer,
});

export default reducer;
