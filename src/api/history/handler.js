import { get } from "axios";
import endpoint from "./endpoint";

const getHistory = () =>
    get(endpoint.historyEndpoint).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getHistory
};
