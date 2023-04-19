import client from './rest-client.js';
import config from './config.js';

const extract = {
    getMaster: () => {
        const promise = Promise.resolve();

        return promise
            .then(() => {
                console.log('getting token');
                return client.getToken(config.extractsKeys);
            })
            .then((token) => {
                console.log('token received, getting branch extracts');
                return client.getMaster(token.access_token);
            }).then(extracts => {
                console.log('=============================');
                console.log('Branch Extracts received:');
                console.log(extracts);
                console.log('=============================');
            }).catch((e) => {
                console.error(`Http call failed - Error code: ${e.statusCode}. Error is: `);
                console.error(e.error);
            });
    }
}


export default extract;