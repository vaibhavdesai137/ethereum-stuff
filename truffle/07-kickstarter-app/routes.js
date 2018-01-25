const routes = require('next-routes')();

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/spendingRequests', '/campaigns/spendingRequests/index')
    .add('/campaigns/:address/spendingRequests/new', '/campaigns/spendingRequests/new');

module.exports = routes;