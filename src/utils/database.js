const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const connect = async() => {
    try {
        const database = await mongoose.connect(DB_URL);
        const{name, host} = database.connection;
        console.log(`Conectado a ${name} a traves del ${host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect};