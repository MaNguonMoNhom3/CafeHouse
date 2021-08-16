import express from "express";
import { getContact, createMessage } from "../controllers/ContactController.js";

const router = express.Router();

router.get("/", getContact);
router.post("/", createMessage);

export default router;
