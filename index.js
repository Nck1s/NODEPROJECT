const express = require("express");
const dotenv = require("dotenv");
dotenv.config()

const {connect} = require("./src/utils/database");
const {isAuth} = require("./src/middlewares/auth");

const cochesRoutes = require("./src/api/routes/coches.routes");
const concesionarioRoutes = require("./src/api/routes/concesionario.routes");
const userRoutes = require("./src/api/routes/user.routes");

const PORT = process.env.PORT;

const app = express();

connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(`/coches`,isAuth, cochesRoutes);
app.use(`/concesionario`, concesionarioRoutes);
app.use(`/user`, userRoutes);

app.listen(PORT, () => console.log(`Escuchando en el puerto: ${PORT}`));



