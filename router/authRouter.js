import express from "express";
import {registerController, logincotroller , testController,forgotPasswordController, isAdmin} from "../controllers/authController.js";
import { requireSignIn } from "../middleware/authmiddlware.js";

const router = express.Router()

// user ragister route
router.post('/ragister', registerController);

// User login route

router.post('/login', logincotroller )

//forget password

router.post('/forgot-password', forgotPasswordController)

//test routes
router.get('/test', requireSignIn,testController)


//protected route
router.get('/user-auth', requireSignIn, (req, res) => {
    console.log("hello")
    res.status(200).send({ok:true});
});


// Admin protected route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ok:true});
});
export default router;