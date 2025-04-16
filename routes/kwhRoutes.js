import express from "express";
import { getAllKwh, getKwhById, createKwh, updateKwh, deleteKwh } from "../controllers/kwhController.js";

const router = express.Router();

router.get("/", getAllKwh);
router.get("/:id", getKwhById);
router.post("/", createKwh);
router.put("/:id", updateKwh);
router.delete("/:id", deleteKwh);

export default router;
