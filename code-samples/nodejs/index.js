import branch from './branch.js';
import extract from './extract.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

//ensure params are passed in
const argv = yargs(hideBin(process.argv))
    .scriptName("fif_api_call")
    .usage('$0 <cmd> [args]')
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
    .demandCommand(1, 'You need at least one command before moving on')
    .help()
    .argv;







