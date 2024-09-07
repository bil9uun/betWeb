import { Router } from "express";
import { addMatch, getAllLiveMatch, getAllMatch } from "../controller/match.ts";

const router = Router();

router.route("/").post(addMatch).get(getAllMatch);
router.route("/live").get(getAllLiveMatch);

export default router;
