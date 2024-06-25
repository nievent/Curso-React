const mongoose = require ('mongoose');

const conection = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mi_redsocial");
        console.log("Conectado correctamente a la base de datos mi_redsocial!!");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos!!");
    }
}

module.exports = conection
