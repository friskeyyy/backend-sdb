import express from "express";
import { getAllPanel, getPanelById, createPanel, updatePanel, deletePanel } from "../controllers/panelController.js";
import PanelSDB from "../models/Panelsdb.js";

const router = express.Router();

router.get("/", getAllPanel);
router.get("/:id", getPanelById);
router.post("/", createPanel);
router.put("/:id", updatePanel);
router.delete("/:id", deletePanel);

router.get("/", async (req, res) => {
    try {
      const panel = await PanelSDB.findAll();
      res.json(panels);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get("/:area", async (req, res) => {
    try {
      const { area } = req.params;
      const panel = await PanelSDB.findAll({ where: { area_sdb: area } });
      res.json(panels);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;
