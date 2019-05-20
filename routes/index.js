var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');
var url = require('url');
const log = require('simple-node-logger').createSimpleLogger('project.log');

log.info("Inicio Entra en la app");





// CODIFICADOR JWT
var payload = {
  foo: 'adios'
};
var secret = 'XwdKtoBAV9fwBfFKCZCmTyCW';

var token = jwt.encode(payload, secret);
var decoded = jwt.decode(token, secret);

// DECODIFICADOR DE JWT
var encodedJWT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJhZGlvcyJ9.G5tFr4hK4tkljznknH7oG_SRgsBHJLr3XYbvl69hDCg";
var secret = "XwdKtoBAV9fwBfFKCZCmTyCW";
var decodedJWT = jwt.decode(encodedJWT, secret);

/* GET home page. */
router.get('/', function (request, response, next) {
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    console.log("--------------");
 

    log.info("Headers" + JSON.stringify(request.headers));
    log.info("UrlVars:" + JSON.stringify(query));
    log.info("Body" + JSON.stringify(request.body));
    
    
    
    response.render('index', { title: "TOKEN " + JSON.stringify(token) + "  DECODEDJWT  " + JSON.stringify(decodedJWT) });
  // res.render('index', {
  //   title: JSON.stringify(token) + "||" + JSON.stringify(decoded) +
  //     "||" + JSON.stringify(payload)
  // });
});

module.exports = router;