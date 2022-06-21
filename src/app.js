import express from "express";
import indexRouter from './routes/index.js';
import dotenv from "dotenv"
const app = express();

dotenv.config()

app.use("/v1", indexRouter)
const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
