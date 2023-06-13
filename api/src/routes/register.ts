import express from "express";
import { register } from "../controllers/register_controller";
const router = express.Router();

// register a new user
router.post("/", [], register);

export default router;
