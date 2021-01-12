import axios from "axios";

function request(method, endpoint = "", data = null) {

    return axios({
        method,
        url: `https://api.punkapi.com/v2/beers/${endpoint}`,  
        data,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    });
};


function get(endpoint) {
    return request('GET', endpoint);
}

export default {get};