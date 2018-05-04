import { createSelector } from "reselect";

const selectHistoryStatus = state => state.status;
const selectHistoryData = state => state.history;

const isHistoryFetched = createSelector(
    selectHistoryStatus,
    status => status === "success"
);

export default {
    selectHistoryStatus,
    selectHistoryData,
    isHistoryFetched
};
