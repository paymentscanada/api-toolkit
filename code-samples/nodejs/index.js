const branch = require("./branch");
const extract = require("./extract");

//ensure params are passed in
const yargs = require('yargs');
const argv = yargs
    .command('branch', 'call branch api', (yargs) => {
        const argv = yargs
            .command('--dprn', '[9 digit dprn]')
            .demand('dprn')
            .argv;

        branch.getBranches(argv.dprn);
    })
    .command('extract', 'call master extract api', (yargs) => {
        extract.getMaster();
    })
    .argv;







