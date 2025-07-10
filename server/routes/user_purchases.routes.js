import express from "express";
const router = express.Router();

// Controller
import {
  getPurchasesItems,
  postPurchasedItem,
  deletePurchasedItem,
} from "../controller/user_purchases.controller.js";

router.get("/:userId/purchases/", getPurchasesItems);

router.post("/:userId/purchases/:bookId", postPurchasedItem);

router.delete("/:userId/purchases/:bookId", deletePurchasedItem);

export default router;
