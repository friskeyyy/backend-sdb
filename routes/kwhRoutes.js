import express from "express";
import { getAllKwh, getKwhById, createKwh, updateKwh, deleteKwh, getTonage, getGroupedKwhByDateAndArea} from "../controllers/kwhController.js";

const router = express.Router();

router.get("/", getAllKwh);
// router.get("/tonage", getTonage);
router.get("/:id", getKwhById);
router.post("/", createKwh);
router.put("/:id", updateKwh);
router.delete("/:id", deleteKwh);
router.get("/grouping", getGroupedKwhByDateAndArea);


export default router;
