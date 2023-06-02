const express = require('express');

const {getConcesionario, postConcesionario, putConcesionario, deleteConcesionario} = require('../controllers/concesionario.controllers');
const concesionarioRoutes = express.Router();


concesionarioRoutes.get('/', getConcesionario);
concesionarioRoutes.post('/', postConcesionario);
concesionarioRoutes.put('/id/:id', putConcesionario);
concesionarioRoutes.delete('/id/:id', deleteConcesionario);


module.exports = concesionarioRoutes;