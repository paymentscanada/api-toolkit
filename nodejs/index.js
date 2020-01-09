const client = require('./rest-client');

//ensure params are passed in
const argv = require('yargs')
    .command('--dprn', '[9 digit dprn]')
    .demand('dprn')
    .argv;

var dprn = argv.dprn;


const promise = Promise.resolve();

promise
    .then(() => {
        console.log('getting token');
        return client.getToken()
    })
    .then((token) => {
        console.log('token received, getting branches');
        return client.getBranch(dprn, token.access_token)
    }).then((branch => {
        console.log('Branch received:');
        console.log(branch);
    })).catch((e) => {
        console.error(`Http call failed - Error code: ${e.statusCode}. Error is: `);
        console.error(e.error);
    });
