const express = require('express');
const UsuarioController = require ('../controllers/usuarioController.js');
const router = express.Router();
 
router.post('/usuario', UsuarioController.Insert);
 
module.exports = router;