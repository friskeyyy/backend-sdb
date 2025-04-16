import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
const server = http.createServer(app);

// Setup Socket.io
const io = new Server(server, {
  cors: {
    origin: "*", // ganti ke localhost:3000 kalo perlu
    methods: ["GET", "POST"],
  },
});

// Listener untuk koneksi socket
io.on("connection", (socket) => {
  console.log("Client connected");

  // Kirim data dummy setiap 3 detik (simulasi data dari database)
  setInterval(() => {
    const sampleData = [
      { sdb_name: "SDB 1", kwh: Math.random() * 100, area: "Casting" },
      { sdb_name: "SDB 2", kwh: Math.random() * 50, area: "Casting" },
      { sdb_name: "SDB 3", kwh: Math.random() * 80, area: "Machining" },
    ];

    socket.emit("sdb_data", sampleData);
  }, 3000);
});

server.listen(6003, () => {
  console.log("Socket server jalan di http://localhost:6003");
});
