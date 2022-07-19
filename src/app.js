/* this file is used to config express */
import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "../src/routes/auth.routes";

const app = express();

app.use(cors({origin: "*"}));
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);

export default app;
