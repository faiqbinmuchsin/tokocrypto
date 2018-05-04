import { createSelector } from "reselect";

const selectBalanceStatus = state => state.status;
const selectBalanceData = state => state.balance;

const isBalanceFetched = createSelector(
    selectBalanceStatus,
    status => status === "success"
);

export default {
    selectBalanceStatus,
    selectBalanceData,
    isBalanceFetched
};
