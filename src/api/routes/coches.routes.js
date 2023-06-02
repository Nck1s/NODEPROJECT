const express = require("express");

const {getCoches, putCoche, postCoche, deleteCoche} = require("../controllers/coches.controllers");

const cochesRoutes = express.Router();

cochesRoutes.get("/", getCoches);
cochesRoutes.put("/", putCoche);
cochesRoutes.post("/", postCoche);
cochesRoutes.delete("/:id", deleteCoche);

module.exports = cochesRoutes;