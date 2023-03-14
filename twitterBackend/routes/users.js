import express from "express";
import {
  getUser,
  update,
  deleteUser,
  follow,
  unFollow,
} from "../controllers/users.js";
import { Token } from "../Token.js";

const router = express.Router();

// Update User
router.put("/:id", Token, update);

// Get User
router.get("/find/:id", getUser);

// Delete User
router.delete("/:id", Token, deleteUser);

// Follow
router.put("/follow/:id", Token, follow);

// Unfollow
router.put("/unfollow/:id", Token, unFollow);

export default router;