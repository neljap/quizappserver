import { Router } from "express";
const router = Router();

/** import controllers */
// import * as controller from '../controllers/controller.js';
import {
  insertQuestions,
  getQuestions,
  dropQuestions,
  getResult,
  storeResult,
  dropResult,
} from "../controllers/controller.js";

/** Questions Routes API */

router
  .route("/questions")
  .get(getQuestions)
  .post(insertQuestions)
  .delete(dropQuestions);

router.route("/result").get(getResult).post(storeResult).delete(dropResult);

export default router;
