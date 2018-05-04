import { get } from "axios";
import endpoint from "./endpoint";

const getBalance = () =>
    get(endpoint.balanceEndpoint).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getBalance
};
