
const ip = '172.31.29.11';
const baseUrl = `http://${ip}:3000`;
const stripeKeyLive = 'pk_live_51JfTbQEo9mAig2o8WBjwlzGV5JPOjLICIj7zGlVqlKFbloDjnXJxw7fauYLTGfYPyGlVDdaN7ThdUg75mwVbXJRY00fP3MSXx6';
const stripeKeyTest = 'pk_test_51JfTbQEo9mAig2o8V8YUYYdgLtvnvzWvVfnUnnySoAmrCP7AdEvnJ6AGBGbQf6lYGUiKOCMurhKUFf9p6odalfmi00ojrGPFVe';

export const environment = {
  production: true,
  url: baseUrl,
  stripeKey: stripeKeyTest
};

