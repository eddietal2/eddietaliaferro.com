// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// import 'zone.js/plugins/zone-error';

const ip = '10.0.1.16';
const mobileIP = '172.20.10.2';
const baseUrl = `http://${ip}:3000`;
const stripeKeyLive = 'pk_live_51JfTbQEo9mAig2o8WBjwlzGV5JPOjLICIj7zGlVqlKFbloDjnXJxw7fauYLTGfYPyGlVDdaN7ThdUg75mwVbXJRY00fP3MSXx6';
const stripeKeyTest = 'pk_test_51JfTbQEo9mAig2o8V8YUYYdgLtvnvzWvVfnUnnySoAmrCP7AdEvnJ6AGBGbQf6lYGUiKOCMurhKUFf9p6odalfmi00ojrGPFVe';

export const environment = {
  production: false,
  url: baseUrl,
  stripeKey: stripeKeyTest
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
