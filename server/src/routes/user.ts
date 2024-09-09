import { Router } from "express";
import { getAllUser, editBalance } from "../controller/user.ts";

const router = Router();

router.route("/get").get(getAllUser);
router.route("/balance").post(editBalance);

export default router;
