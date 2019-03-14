const { startServer } = require('@base-cms/marko-web');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  graphqlUri: 'https://ofcr.ebm.base-cms.io/graphql',
});
