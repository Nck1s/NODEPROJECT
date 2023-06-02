const Concesionario = require("../models/concesionario.models");


const getConcesionario = async (req, res) => {
    try {
        const allConcesionario = await Concesionario.find().populate("coche",  "Marca Modelo");
        return res.status(200).json(allConcesionario);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postConcesionario = async (req, res) => {
    try {
        const newConcesionario = new Concesionario(req.body);
        const createdConcesionario = await newConcesionario.save();
        return res.status(201).json(createdConcesionario);        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putConcesionario = async(req, res) => {
    try {
        const {id} = req.params;
        const putConcesionario = new Concesionario(req.body);
        putConcesionario._id = id;
        const updatedConcesionario = await Concesionario.findByIdAndUpdate(id, putConcesionario, {new: true});
        if(!updatedConcesionario){
            return res.status(404).json({message: 'No tenemos concesionarios con ese ID'}); 
         }
        return res.status(200).json(updatedConcesionario);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteConcesionario = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteConcesionario = await Concesionario.findByIdAndDelete(id);
        if(!deleteConcesionario) {
            return res.status(404).jason('mensaje: "No coincide el id"')
        }
        return res.status(200).json(deleteConcesionario)
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {getConcesionario, postConcesionario, putConcesionario, deleteConcesionario};