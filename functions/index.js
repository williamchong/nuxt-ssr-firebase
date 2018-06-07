const functions = require('firebase-functions');
const { Nuxt } = require('nuxt-edge');

const config = {
  dev: false,
  buildDir: 'nuxt',
};
const nuxt = new Nuxt(config);
exports.ssrapp = functions.https.onRequest((req, res) => nuxt.render(req, res));
