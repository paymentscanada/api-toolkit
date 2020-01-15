const request = require('request-promise-native');
const config = require('./config');

const restClient = {
    getToken: () => {
        const options = {
            method: 'POST',
            uri: `${config.apiBaseUrl}/accesstoken`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                'user': config.apiConsumerKey,
                'pass': config.apiConsumerSecret
            },
            form: {
                'grant_type': 'client_credentials'
            },
            json: true
        };

        return request(options)
            .then((body) => {
                return body;
            });
    },

    getBranch: (dprn, token) => {
        const options = {
            uri: `${config.apiBaseUrl}//fif-branch-sandbox/branches/${dprn}`,
            headers: {
                'Accept': 'application/vnd.fif.api.v1+json',
            },
            auth: {
                'bearer': token,
            },
            json: true
        };

        return request(options)
            .then((body) => {
                return body;
            });
    }
};

module.exports = restClient;
