import { Router } from "express";
import { getAllUser } from "../controller/user.ts";

const router = Router();

router.route("/get").get(getAllUser);

export default router;
