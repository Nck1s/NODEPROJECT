const Coche = require("../models/coches.models");

const getCoches = async(req, res) => {
    try {
        const allCoches = await Coche.find()
        return res.status(200).json(allCoches)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const putCoche = async(req, res) => {
    try {
        const {id} = req.params;
        const putCoche = new Coche(req.body);
        putCoche._id = id;
        const updatedCoche = await Coche.findByIdAndUpdate(id, putCoche, {new: true});
        if(!updatedCoche){
            return res.status(404).json({message: 'No tenemos coches con ese ID'}); 
         }
        return res.status(200).json(updatedCoche);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postCoche = async(req, res) => {
    try {
    //    console.log(req.body); 
        const newCoche = new Coche(req.body);
        const createdCoche = await newCoche.save();
        return res.status(201).json(createdCoche)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteCoche = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteCoche = await Coche.findByIdAndDelete(id);
        if(!deleteCoche) {
            return res.status(404).jason('mensaje: "No coincide el id"')
        }
        return res.status(200).json(deleteCoche)
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getCoches, putCoche, postCoche, deleteCoche};