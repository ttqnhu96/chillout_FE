import { ACCESS_TOKEN, CHILLOUT_DOMAIN } from "../util/constants/systemSettings"

const axios = require('axios').default;

export class BaseService {
    put = (url, model) => {
        return axios({
            url: `${CHILLOUT_DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN) }
        })
    }

    post = (url, model) => {
        return axios({
            url: `${CHILLOUT_DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN) }
        })
    }

    get = (url) => {
        return axios({
            url: `${CHILLOUT_DOMAIN}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN) }
        })
    }

    delete = (url) => {
        return axios({
            url: `${CHILLOUT_DOMAIN}/${url}`,
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN) }
        })
    }
}