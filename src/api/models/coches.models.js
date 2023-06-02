const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cocheSchema = new Schema(
    {
        Marca: {type: String, required: true},
        Modelo: {type: String, required: true},
        Año: {type: Number, required: true},
        Clase: {type: String, required: true},
        Precio: {type: Number, required: true}
    },{
        timestamps: true
    }
)

const Coche = mongoose.model("coche", cocheSchema);

module.exports = Coche;