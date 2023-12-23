import express from "express"
import { getAllUser, getSingleUser, deleteUser } from "../controllers/users.controller.js"

const router = express.Router()
// get all user
// http://localhost:5000/api/v1/users
router.get("/", getAllUser);

// get single user
// http://localhost:5000/api/v1/users/:id
router.get("/:id", getSingleUser);

// delete user
// http://localhost:5000/api/v1/users/:id
router.delete("/:id", deleteUser);


export default router;