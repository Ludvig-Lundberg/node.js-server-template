import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";

export const register = async (req: Request, res: Response) => {
	const validationErrors = validationResult(req);
	if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array(),
		});
	}

	const validatedData = matchedData(req);
};
