var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var url = require('url');


/* GET home page. */
router.get('/login', function (request, response, next) {
    const log = require('simple-node-logger').createSimpleLogger('project.log');
    log.info("Inicio Entra en la app");

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    log.info("LOGIN");
    log.info("Headers" + JSON.stringify(request.headers));
    log.info("UrlVars:" + JSON.stringify(query));
    log.info("Body" + JSON.stringify(request.body));
    log.info("Params" + JSON.stringify(request.params));
           
    response.render('index', { title: "GET LOGIN"});

});

/* GET home page. */
router.post('/login', function (request, response, next) {
    const log = require('simple-node-logger').createSimpleLogger('project.log');
    log.info("Inicio Entra en la app");

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    log.info("LOGIN");
    log.info("Headers" + JSON.stringify(request.headers));
    log.info("UrlVars:" + JSON.stringify(query));
    log.info("Body" + JSON.stringify(request));
    log.info("Params" + JSON.stringify(request));

    response.render('index', { title: "POST LOGIN" });

});

router.get('/logout', function (request, response, next) {
    const log = require('simple-node-logger').createSimpleLogger('project.log');
    log.info("Inicio Entra en la app");

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    log.info("LOGOUT");
    log.info("Headers" + JSON.stringify(request.headers));
    log.info("UrlVars:" + JSON.stringify(query));
    log.info("Body" + JSON.stringify(request.body));

    response.render('index', { title: "LOGOUT" });
});

router.get('/', function (request, response, next) {
    const log = require('simple-node-logger').createSimpleLogger('project.log');
    log.info("Inicio Entra en la app");

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    log.info("Raiz");
    log.info("Headers" + JSON.stringify(request.headers));
    log.info("UrlVars:" + JSON.stringify(query));
    log.info("Body" + JSON.stringify(request.body));
    response.render('index', { title: "TOKEN " + JSON.stringify("Notoken")});    
});

module.exports = router;