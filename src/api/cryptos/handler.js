import { get } from "axios";
import endpoint from "./endpoint";

const getCryptos = () =>
    get(endpoint.cryptoEndpoint).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getCryptos
};
