// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  local: false,
  baseApiUrl: 'https://api.payments.ca/payments-rail',
  accessTokenUrl: 'https://api.payments.ca/accesstoken',
  consumerKey: 'BN0zvKSojktADFsxwzaBh9GByCQc8aA4',
  consumerSecret: 'UnbYBGCIy04EYCD8',
  portal: {
    baseUrl: 'https://developer.payments.ca',
    accountValidation: {
      portal: '/payments-rail-api/apis/post/payment_initiation',
      dataModel: '/account-validation-data-model'
    },
    requestToPay: {
      portal: '/account-validation-data-model',
      dataModel: '/account-validation-data-model'
    },
    paymentInitiation: {
      portal: '/account-validation-data-model',
      dataModel: '/account-validation-data-model'
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
