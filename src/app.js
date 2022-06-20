import express from "express";
import indexRouter from './routes/index.js';
import dotenv from "dotenv"
const app = express();

dotenv.config()

app.use("/v1", indexRouter)
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});