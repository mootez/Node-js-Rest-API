var express = require('express'); // import du module express
var app = express(); // créer une instance de 

var bodyParser = require('body-parser'); //

// configure application pour utiliser bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // port

// ROUTES 
// =============================================================================
var router = express.Router(); //
app.use('/apiKlai', router); // préfixe de tous les routes


// test route to make sure everything is working (accessed at GET http://localhost:NUMERO_PORT/apiKlai)
router.get('/', function(req, res) {
    res.json({ message: 'BONJOUR  });   
});





app.listen(port);// lancer serveur
