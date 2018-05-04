import { createSelector } from "reselect";

const selectCryptosStatus = state => state.status;
const selectCryptosData = state => state.cryptos;

const isCryptosFetched = createSelector(
    selectCryptosStatus,
    status => status === "success"
);

export default {
    selectCryptosStatus,
    selectCryptosData,
    isCryptosFetched
};
