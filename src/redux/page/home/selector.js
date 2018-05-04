import { createSelector } from "reselect";
import { cryptosSelectors } from "../../common/cryptos";

const selectPageRoot = state => state.home;
const selectCryptos = createSelector(selectPageRoot, page => page.cryptos);

const selectCryptosData = createSelector(selectCryptos, cryptos =>
    cryptosSelectors.selectCryptosData(cryptos)
);

const isCryptosFetched = createSelector(selectCryptos, cryptos =>
    cryptosSelectors.isCryptosFetched(cryptos)
);

export default {
    selectCryptosData,
    isCryptosFetched
};
