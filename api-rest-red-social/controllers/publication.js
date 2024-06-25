//acciones de prueba
const pruebaPublication = (req, res) => {
    return res.status(200).json({
        message: "Soy una acción de prueba en mi controlador de publicaciones"
    });
}

//exportar acciones

module.exports = {
    pruebaPublication
}