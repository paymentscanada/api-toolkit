import client from './rest-client.js';
import config from './config.js';

const branch = {
    getBranches: (dprn) => {
        const promise = Promise.resolve();

        return promise
            .then(() => {
                console.log('getting token for branch API');
                return client.getToken(config.branchKeys)
            })
            .then((token) => {
                console.log('token received, getting branch');
                return client.getBranch(dprn, token.access_token)
            }).then(branch => {
                console.log('=============================');
                console.log('Branch received:');
                console.log(branch);
                console.log('=============================');
            }).catch((e) => {
                console.error(`Http call failed - Error code: ${e.statusCode}. Error is: `);
                console.error(e.error);
            });
    }
}

export default branch;
