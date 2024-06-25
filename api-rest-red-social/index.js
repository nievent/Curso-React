//importar dependencias
const connection = require("./database/conection");
const express = require("express")
const cors = require ("cors")

//mensaje bienvenida
console.log("API red social arrancada")

//conexion base de datos
connection()

//crear servidor node
const app = express()
const puerto = 3900

//configurar cors
app.use(cors())

//convertir los datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cargar conf rutas
const UserRoutes = require("./routes/user");
const PublicationRoutes = require("./routes/publication");
const FollowRoutes = require("./routes/follow");

app.use("/api/user", UserRoutes)
app.use("/api/publication", PublicationRoutes)
app.use("/api/follow", FollowRoutes)

//ruta de prueba
app.get("/prueba", (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            mensaje: "Todo esta correcto"
        }
    )
})


//poner server a escuchar peticiones http
app.listen(puerto, ()=> {
    console.log("Servidor corriendo en el puerto " + puerto);
})