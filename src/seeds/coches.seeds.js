const mongoose = require("mongoose");

const Coche = require("../api/models/coches.models");
const { log } = require("console");

const arrayCoches = [
    {
        Marca: "Bugatti",
        Modelo: "Bugatti Bolide",
        Año: 2020,
        Clase: "Deportivo",
        Precio: 3000000
    },{
        Marca: "Bugatti",
        Modelo: "Bugatti Centodieci",
        Año: 2021,
        Clase: "Deportivo",
        Precio: 2500000
    },{
        Marca: "Bugatti",
        Modelo: "Bugatti Chiron",
        Año: 2022,
        Clase: "Deportivo",
        Precio: 3400000
    },{
        Marca: "Bugatti",
        Modelo: "Bugatti Divo",
        Año: 2018,
        Clase: "Deportivo",
        Precio: 2800000
    },{  
        Marca: "BMW",  
        Modelo: "iX M60", 
        Año: 2023, 
        Clase: "Electrico",  
        Precio: 140400
    },{  
        Marca: "BMW",  
        Modelo: "i7 M70",  
        Año: 2022, 
        Clase: "Electrico",  
        Precio: 115500
    },{  
        Marca: "BMW",  
        Modelo: " i5 M60",  
        Año: 2023,  
        Clase: "Electrico",  
        Precio: 120400
    },{  
        Marca: "BMW",  
        Modelo: "M8",  
        Año: 2022,  
        Clase: "Coupe Competition",  
        Precio: 227150
    },{  
        Marca: "BMW",
        Modelo: "M2",
        Año: 2023,
        Clase: "Coupe",  
        Precio: 91250
    },{
        Marca: "Volkswagen",
        Modelo: "Polo",
        Año: 2022,
        Clase: "Deportivo",
        Precio: 23000
    },{
        Marca: "Volkswagen",
        Modelo:"Golf",
        Año: 2022,
        Clase: "Deportivo",
        Precio: 34000  
    },{
        Marca: "Volkswagen",
        Modelo: "Taigo",
        Año: 2022,
        Clase: "Todoterreno",
        Precio: 27000
    },{
        Marca: "Volkswagen",
        Modelo: "T-Cross",
        Año: 2022,
        Clase: "CrossOver",
        Precio: 26000
    },{
        Marca: "Volkswagen",
        Modelo: "T-Roc",
        Año: 2022,
        Clase: "CrossOver",
        Precio: 32000, 
    },{
        Marca: "Volkswagen",
        Modelo: "Passat Variant",
        Año: 2022,
        Clase: "Berlina",
        Precio: 46000 
    },{
        Marca: "Volkswagen",
        Modelo: "T-Roc Cabrio",
        Año: 2022,
        Clase: "CrossOver",
        Precio: 37000 
    },{
        Marca: "Jeep", 
        Modelo: "Renegade", 
        Año: 2023, 
        Clase: "Todoterreno",
        Precio: 50548
    },{
        Marca: "Jeep", 
        Modelo: "Compass",
        Año: 2023, 
        Clase: "Todoterreno",
        Precio: 35892
    },{
        Marca: "Jeep", 
        Modelo: "Grand Cherokee", 
        Año: 2023, 
        Clase: "Todoterreno", 
        Precio: 83250
    },{
        Marca: "Jeep", 
        Modelo: "Wrangler", 
        Año: 2023, 
        Clase: "Todoterreno", 
        Precio: 85950
    },{
        Marca: "Jeep", 
        Modelo: "Avenger", 
        Año: 2023, 
        Clase: "Todoterreno", 
        Precio: 21734
    },{
        Marca: "Seat",
        Modelo: "Arona",
        Año: 2017,
        Clase: "Todoterreno",
        Precio: 22300
    },{
        Marca: "Seat",
        Modelo: "Leon",
        Año: 2023,
        Clase: "Deportivo",
        Precio: 27000
    },{
        Marca: "Seat",
        Modelo: "Ateca",
        Año: 2023,
        Clase: "Todoterreno",
        Precio: "33000"
    },{
        Marca: "Seat",
        Modelo: "Tarraco",
        Año: 2023,
        Clase: "Todoterreno",
        Precio:"32000"
    },{
        Marca: "Seat",
        Modelo: "Ibiza",
        Año: 2022,
        Clase: "Deportivo",
        Precio: 19000
    },{
        Marca: "Seat",
        Modelo: "Altea",
        Año: 2015,
        Clase: "Deportivo",
        Precio: 19000
    }
];

mongoose.connect("mongodb+srv://root:root@nck1s.8mthzdt.mongodb.net/proyectoNode?retryWrites=true&w=majority")

.then( async() => {
    const allCoches = await Coche.find();
    if (allCoches.length > 0) {
        await Coche.collection.drop();
        console.log(`Coches borrados`);
    }
})

.catch((error) => {
    console.log(`${error} al borrar los coches`);
})

.then( async() => {
    const mapCoche = arrayCoches.map((coche) => new Coche(coche));
    await Coche.insertMany(mapCoche);
})

.catch ((error) => {
    console.log(`${error} al insertar los coches`);
})

.finally (() => mongoose.disconnect());
