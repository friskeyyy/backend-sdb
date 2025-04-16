import express from "express";
import { getAllPermenitKwh, getPermenitKwhById, createPermenitKwh, updatePermenitKwh, deletePermenitKwh } from "../controllers/permenitKwhController.js";

const router = express.Router();

router.get("/", getAllPermenitKwh);
router.get("/:id", getPermenitKwhById);
router.post("/", createPermenitKwh);
router.put("/:id", updatePermenitKwh);
router.delete("/:id", deletePermenitKwh);

export default router;
