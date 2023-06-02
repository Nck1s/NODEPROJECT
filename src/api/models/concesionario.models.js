const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const concesionarioSchema = new Schema(
    {
        nombre: {type: String, required: true},
        ciudad: {type: String, required: true},
        coche: [{type: Schema.Types.ObjectId, ref: 'coche'}]
    },{
        timestamps: true
    }
)

const Concesionario = mongoose.model('concesionario', concesionarioSchema);

module.exports = Concesionario;