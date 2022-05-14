import express from "express";
import { Answer } from "../controllers/Model.js";
const answerRoute = express.Router();

answerRoute.post("/", Answer);

export default answerRoute;
