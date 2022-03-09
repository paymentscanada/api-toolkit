// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'https://api.payments.ca',
  environmentType: 'sandbox',
  branchesConsumerKey: 'REPLACE WITH CONSUMER KEY',
  branchesConsumerSecret: 'REPLACE WITH CONSUMER SECRET',
  extractsConsumerKey: 'REPLACE WITH CONSUMER KEY',
  extractsConsumerSecret: 'REPLACE WITH CONSUMER SECRET',
  ccinLookupConsumerKey: 'REPLACE WITH CONSUMER KEY',
  ccinLookupConsumerSecret: 'REPLACE WITH CONSUMER SECRET',
  ccinExtractsConsumerKey: 'REPLACE WITH CONSUMER KEY',
  ccinExtractsConsumerSecret: 'REPLACE WITH CONSUMER SECRET',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
