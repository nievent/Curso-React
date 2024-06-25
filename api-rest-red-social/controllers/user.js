const User = require("../models/user");
//acciones de prueba
const pruebaUser = (req, res) => {
    return res.status(200).json({
        message: "Soy una acción de prueba en mi controlador de usuarios"
    });
}

//registro de usuarios
const register = (req, res) => {
    //recoger datos de la peticion
    let params = req.body;
    //comprobar que me llegan bien
    if (!params.name || !params.email || !params.password || !params.nick) {
        return res.status(400).json({
            status: "error",
            message: "Faltan datos por enviar"
        });
    }

    //crear objeto usuario
    let user_to_save = new User(params)
    //control de usuarios duplicados
    User.find({
        $or: [{
                email: user_to_save.email.toLowerCase()
            },
            {
                nick: user_to_save.nick.toLowerCase()
            }

        ]
    }).exec((error, users) => {
        if (error) {
            return res.status(500).json({
                status: "error",
                message: "Error al comprobar si el usuario existe"
            });
        }

        if (users && users.length >= 1) {
            return res.status(200).json({
                status: "success",
                message: "El usuario ya existe"
            });
        }
        //cifrar la contraseña

        //guardar usuario 
        return res.status(200).json({
            message: "Metodo accion de registro de usuarios",
            user_to_save,
            status: "success"
        });
    
    })


}

//exportar acciones

module.exports = {
    pruebaUser,
    register
}