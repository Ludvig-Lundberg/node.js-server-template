import cors from "cors";
import express from "express";
import morgan from "morgan";
import router from "./api/src/routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(router);

export default app;
