const express = require("express");
const router = express.Router();
const publicationController = require ("../controllers/publication");

//definir rutas

router.get("/prueba-publication", publicationController.pruebaPublication);

//exportar el router
module.exports = router;