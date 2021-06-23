import express from "express";

import {
  getRoot,
  getAllItems,
  postAddItem,
  putUpdateItem,
} from "./controllers.js";

const router = express.Router();

router.get("/", getRoot);
router.get("/getItem", getAllItems);

router.post("/addItem", postAddItem);
router.put("/updateItem", putUpdateItem);

export default router;
