import { createSelector } from "reselect";
import { cryptosSelectors } from "../../common/cryptos";
import { balanceSelectors } from "../../common/balance";
import { historySelectors } from "../../common/history";

const selectPageRoot = state => state.home;
const selectCryptos = createSelector(selectPageRoot, page => page.cryptos);
const selectBalance = createSelector(selectPageRoot, page => page.balance);
const selectHistory = createSelector(selectPageRoot, page => page.history);

const selectCryptosData = createSelector(selectCryptos, cryptos =>
    cryptosSelectors.selectCryptosData(cryptos)
);
const selectBalanceData = createSelector(selectBalance, balance =>
    balanceSelectors.selectBalanceData(balance)
);
const selectHistoryData = createSelector(selectHistory, history =>
    historySelectors.selectHistoryData(history)
);

const isCryptosFetched = createSelector(selectCryptos, cryptos =>
    cryptosSelectors.isCryptosFetched(cryptos)
);
const isBalanceFetched = createSelector(selectBalance, balance =>
    balanceSelectors.isBalanceFetched(balance)
);
const isHistoryFetched = createSelector(selectHistory, history =>
    historySelectors.isHistoryFetched(history)
);

export default {
    selectCryptosData,
    selectBalanceData,
    selectHistoryData,
    isCryptosFetched,
    isBalanceFetched,
    isHistoryFetched
};
