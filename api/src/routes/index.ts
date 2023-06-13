import express from "express";
import register from "./register";

// instantiate a new router
const router = express.Router();

// GET /
router.get("/", (req, res) => {
	res.send({
		message: "Welcome to my API 👋",
	});
});

router.use("/register", register);

export default router;
