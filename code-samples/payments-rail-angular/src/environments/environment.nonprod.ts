// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  local: false,
  baseApiUrl: 'https://dev-api.payments.ca/payments-rail',
  accessTokenUrl: 'https://dev-api.payments.ca/accesstoken',
  consumerKey: 'REPLACE WITH CONSUMER KEY',
  consumerSecret: 'REPLACE WITH CONSUMER SECRET',
  portal: {
    baseUrl: 'https://nonprod-developer.payments.ca',
    accountValidation: {
      portal: '/payments-rail-api/apis/post/payment_initiation',
      dataModel: '/account-validation-data-model'
    },
    requestToPay: {
      portal: '/payments-rail-api/apis/post/request_to_pay',
      dataModel: 'not yet'
    },
    paymentInitiation: {
      portal: '/payments-rail-api/apis/post/payment_initiation',
      dataModel: 'not yet'
    },
  },
  githubUrl: 'https://github.com/paymentscanada/api-samples/tree/feature/h-add-payments-rails/postman-collection/Payments-Rail'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
