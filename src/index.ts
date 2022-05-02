import { setMongoConnection } from './config/mongo.config';
import express from "express";
import "dotenv/config"
import { logger } from "./utils/logger";
import { userRouter } from "./routes/userRouter";

const app = express();
const PORT = process.env.PORT || 8081

app.use(express.json())
app.all("/", logger)

app.use(userRouter)
setMongoConnection()
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`))
