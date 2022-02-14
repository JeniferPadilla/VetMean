import express  from "express";
import cors from "cors";
import db from "./db/db.js";
import animalRouter from "./routes/animalRouter.js";
import userRouter from "./routes/userRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app =express();
app.use(express.json());
app.use(cors());
app.use("/api/animals", animalRouter);
app.use("/api/users", userRouter);
app.listen(process.env.PORT, ()=>console.log("Backend server running on port: ", process.env.PORT));

db.dbConnection()
