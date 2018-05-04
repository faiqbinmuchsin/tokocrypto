import { createSelector } from "reselect";
import { cryptosSelectors } from "../../common/cryptos";
import { balanceSelectors } from "../../common/balance";

const selectPageRoot = state => state.home;
const selectCryptos = createSelector(selectPageRoot, page => page.cryptos);
const selectBalance = createSelector(selectPageRoot, page => page.balance);

const selectCryptosData = createSelector(selectCryptos, cryptos =>
    cryptosSelectors.selectCryptosData(cryptos)
);
const selectBalanceData = createSelector(selectBalance, balance =>
    balanceSelectors.selectBalanceData(balance)
);

const isCryptosFetched = createSelector(selectCryptos, cryptos =>
    cryptosSelectors.isCryptosFetched(cryptos)
);
const isBalanceFetched = createSelector(selectBalance, balance =>
    balanceSelectors.isBalanceFetched(balance)
);

export default {
    selectCryptosData,
    selectBalanceData,
    isCryptosFetched,
    isBalanceFetched
};
