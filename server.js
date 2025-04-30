import express from "express";
import sequelize from "./config/db.js";
import kwhRoutes from "./routes/kwhRoutes.js";
import permenitKwhRoutes from "./routes/permenitKwhRoutes.js";
import panelRoutes from "./routes/panelRoutes.js";
import masterDataRoutes from "./routes/masterDataRoutes.js";
import areaRoutes from "./routes/areaRoutes.js";
import cors from "cors";


const app = express();
app.use(cors());
const PORT = process.env.PORT || 6003;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});

// Sync database
sequelize.sync({ alter: true })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Sync error:", err));



app.use("/api/kwh", kwhRoutes);
app.use("/api/permenit-kwh", permenitKwhRoutes);
app.use("/api/panel", panelRoutes);
app.use("/api/master-data", masterDataRoutes);
app.use("/api/area", areaRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
