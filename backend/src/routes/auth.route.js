import express from 'express';
import { checkAuth, login, logout, register, updateProfile } from '../controllers/auth.controller.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const router = express.Router();

// "/api/auth" route
// router.get("/login",login)

router.post("/login", login);
router.post("/signup", register);
router.post("/logout", logout);

router.put("/update-profile",isAuthenticated,updateProfile);

router.get("/check", isAuthenticated,checkAuth);
export default router;