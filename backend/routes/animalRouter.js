import express from "express";
import userAnimal from "../controllers/animalController.js";

const router =express.Router();

router.post("/registerAnimal", userAnimal.registerAnimal);

export default router;