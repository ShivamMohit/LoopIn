import express from 'express';
import { login, logout, register } from '../controllers/auth.controller.js';

const router = express.Router();

// "/api/auth" route
// router.get("/login",login)

router.post("/login", login);
router.post("/signin", register);
router.post("/logout", logout);
export default router;