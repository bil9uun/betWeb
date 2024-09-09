import { Router } from "express";
import {
  addBalanceAndEditPaid,
  postBettedMatch,
  userBettedMatches,
} from "../controller/bettedMatch.ts";

const router = Router();

router.route("/").post(postBettedMatch);
router.route("/user/:id").get(userBettedMatches);
router.route("/edit/:id").post(addBalanceAndEditPaid);

export default router;
