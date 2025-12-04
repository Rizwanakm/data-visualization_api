import express from "express";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes";
import { setupSwagger } from "./swagger";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/data", dataRoutes);

// Swagger UI
setupSwagger(app);

export default app;
