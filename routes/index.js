var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var url = require('url');
const log = require('simple-node-logger').createSimpleLogger('project.log');

log.info("Inicio Entra en la app");

/* GET home page. */
router.get('/login', function (request, response, next) {
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    log.info("LOGIN");
    log.info("Headers" + JSON.stringify(request.headers));
    log.info("UrlVars:" + JSON.stringify(query));
    log.info("Body" + JSON.stringify(request.body));
           
    response.render('index', { title: "LOGIN"});

});

router.get('/logout', function (request, response, next) {
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    log.info("LOGOUT");
    log.info("Headers" + JSON.stringify(request.headers));
    log.info("UrlVars:" + JSON.stringify(query));
    log.info("Body" + JSON.stringify(request.body));

    response.render('index', { title: "LOGOUT" });
});

router.get('/', function (request, response, next) {
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    log.info("LOGOUT");
    log.info("Headers" + JSON.stringify(request.headers));
    log.info("UrlVars:" + JSON.stringify(query));
    log.info("Body" + JSON.stringify(request.body));
    response.render('/', { title: "TOKEN " + JSON.stringify(token) + "  DECODEDJWT  " + JSON.stringify(decodedJWT) });    
});

module.exports = router;