import { ACCESS_TOKEN, CHILLOUT_DOMAIN } from "../util/constants/systemSettings"

const axios = require('axios').default;

export class BaseService {
    put = (functionName, url, model) => {
        return axios({
            url: `${CHILLOUT_DOMAIN}/${functionName}/${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN) }
        })
    }

    post = (functionName, url, model) => {
        return axios({
            url: `${CHILLOUT_DOMAIN}/${functionName}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN) }
        })
    }

    get = (functionName, url) => {
        return axios({
            url: `${CHILLOUT_DOMAIN}/${functionName}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN) }
        })
    }

    delete = (functionName, url) => {
        return axios({
            url: `${CHILLOUT_DOMAIN}/${functionName}/${url}`,
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN) }
        })
    }
}