import { combineReducers } from "redux";

import cryptosReducerGenerator from "../../common/cryptos";

const cryptosReducer = cryptosReducerGenerator("home/cryptos");

const reducer = combineReducers({
    cryptos: cryptosReducer
});

export default reducer;
