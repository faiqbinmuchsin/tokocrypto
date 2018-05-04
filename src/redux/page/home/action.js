import { cryptosActions as cryptosActionsGenerator } from "../../common/cryptos";

import CryptosAPI from "../../../api/cryptos";

const cryptosActions = cryptosActionsGenerator("home/cryptos");

const getCryptos = () => dispatch => {
    dispatch(cryptosActions.getCryptosLoading());
    return CryptosAPI.getCryptos()
        .then(response => {
            dispatch(cryptosActions.getCryptosSuccess(response));
            // console.log(response);
        })
        .catch(err => {
            // console.error(err);
            dispatch(cryptosActions.getCryptosError());
        });
};

export default {
    ...cryptosActions,
    getCryptos
};
