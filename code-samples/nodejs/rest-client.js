import config from './config.js';
import fetch from 'node-fetch';

const restClient = {
    getToken: (keys) => {
        const formData = new URLSearchParams({
            'grant_type': 'client_credentials'
        });

        const base64Auth = Buffer.from(`${keys.apiConsumerKey}:${keys.apiConsumerSecret}`).toString('base64');

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${base64Auth}`
            },
            body: formData,
            json: true,
        };

        return fetch(`${config.apiBaseUrl}/accesstoken`, options)
            .then(response => response.json())
            .then(body => body);
    },

    getBranch: (dprn, token) => {
        const options = {
            uri: `${config.apiBaseUrl}//fif-branch-sandbox/branches/${dprn}`,
            headers: {
                'Accept': 'application/vnd.fif.api.v1+json',
                'Authorization': `Bearer ${token}`

            },
            json: true
        };

        return fetch(`${config.apiBaseUrl}//fif-branch-sandbox/branches/${dprn}`, options)
            .then(response => response.json())
            .then(body => body);
    },

    getMaster: (token) => {
        const options = {
            headers: {
                'Accept': 'application/vnd.fif.api.v1+json',
                'Authorization': `Bearer ${token}`
            },
            json: true
        };

        return fetch(`${config.apiBaseUrl}/fif-extracts-sandbox/extracts/master`, options)
            .then(response => response.json())
            .then(body => body);
    }
};

export default restClient;
