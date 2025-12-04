import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

export const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
