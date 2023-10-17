import express from "express"
const router = express.Router()
import {deleteAccount, getUsers, login, createAccount, } from "../controllers/userCtrl.js"
// import auth from "../middleware/auth.js"
// import { updateProduct } from "../controllers/productCtrl.js"

router.post("/user/create", createAccount)
router.post("/user/login",  login)
router.get("/user/get-all-users", getUsers)
router.delete("/user/delete", deleteAccount)

export default router
