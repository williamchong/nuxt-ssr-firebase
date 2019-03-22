const functions = require('firebase-functions');
const { Nuxt } = require('nuxt-start');

const nuxtConfig = require('./nuxt.config.js');

const config = {
  ...nuxtConfig,
  dev: false,
  buildDir: 'nuxt',
};
const nuxt = new Nuxt(config);

exports.ssrapp = functions.https.onRequest((req, res) => nuxt.render(req, res));
