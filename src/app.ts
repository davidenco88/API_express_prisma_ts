import express from "express";
import dotenv from "dotenv";
import configExpress from "./config/express";
import routes from "./routes";

const app = express();

dotenv.config();
const PORT = process.env.PORT ?? 8080;

//Configuración Express
configExpress(app);

//Manejador de rutas o enrutador.
routes(app);

app.listen(PORT, () => {
  console.log(`Server is runing in http:localhost:${PORT}`)
});