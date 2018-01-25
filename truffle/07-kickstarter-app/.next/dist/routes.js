'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/spendingRequests', '/campaigns/spendingRequests/index').add('/campaigns/:address/spendingRequests/new', '/campaigns/spendingRequests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMyQixBQUQzQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsbUJBR0ssQUFITCxJQUdTLEFBSFQsd0NBR2lELEFBSGpELHFDQUlLLEFBSkwsSUFJUyxBQUpULDRDQUlxRCxBQUpyRDs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy92YWlkZXNhaS9EZXZlbG9wbWVudC9naXQvdmFpYmhhdmRlc2FpMTM3L2V0aGVyZXVtLXN0dWZmL3RydWZmbGUvMDcta2lja3N0YXJ0ZXItYXBwIn0=