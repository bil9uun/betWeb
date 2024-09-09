import { Router } from "express";
import {
  addMatch,
  editMatchMoney,
  getAllLiveMatch,
  getAllMatch,
  getAllRecentMatch,
  getAllUpcomingMatch,
} from "../controller/match.ts";

const router = Router();

router.route("/").post(addMatch).get(getAllMatch);
router.route("/live").get(getAllLiveMatch);
router.route("/upcoming").get(getAllUpcomingMatch).post(editMatchMoney);
router.route("/recent").get(getAllRecentMatch);

export default router;
