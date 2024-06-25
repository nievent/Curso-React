//acciones de prueba
const pruebaFollow = (req, res) => {
    return res.status(200).json({
        message: "Soy una acción de prueba en mi controlador de follows"
    });
}

//exportar acciones

module.exports = {
    pruebaFollow
}